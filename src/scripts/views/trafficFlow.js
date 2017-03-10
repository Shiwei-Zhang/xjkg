//var $ = require('../utils/jquery-3.1.1.min.js');
var common = require('../utils/common.util.js');
var template = require('../utils/template.js');
var trafficFlowBottom = require('../tpls/trafficFlow/trafficFlowBottom.string');
var templates = require('../tpls/trafficFlow/trafficFlowTemplates.string');

$(function() {

	common.append($('.bottomBox'), trafficFlowBottom);
	common.append($('body'), templates);
	//获取table
	var $listContainer = $('.bottomList table');
	var mapbox = document.getElementById('mapChina');
	//获取标题ul
	var $tableT = $('.table_title');
	var SectorCountData = [];
	var SegmentCount = [];
	

	function updata() {
		//alert('updatas')
		function gettimeData() {
			var nDate = new Date();
			var nDay = nDate.getDate();
			var nHours = nDate.getHours();
			var nMinutes = nDate.getMinutes();
			var nSeconds = nDate.getSeconds();
			var nYear = nDate.getFullYear();
			var nMonth = nDate.getMonth() + 1;
			var current = nHours * 60 * 60 + nMinutes * 60 + nSeconds;
			var finalSeconds = current; // 获取最终秒数 传递到echarts重新渲染
			if((nMonth + '').length < 2) {
				nMonth = '0' + nMonth;
			}
			if((nDay + '').length < 2) {
				nDay = '0' + nDay;
			}
			var finalHour = parseInt(finalSeconds / 3600, 10);
			if((finalHour + '').length < 2) {
				finalHour = '0' + finalHour;
			}
			var finalMinutes = parseInt(finalSeconds % 3600 / 60, 10);

			var finalSs = parseInt(finalSeconds % 3600 % 60, 10);
			var fiveMultipe = Math.ceil(finalSs / 5);
			if(fiveMultipe === 12) {
				finalMinutes += 1;
				finalSs = '00';
			} else {
				finalSs = fiveMultipe * 5;
			}

			if((finalMinutes + '').length < 2) {
				finalMinutes = '0' + finalMinutes;
			}
			if((finalSs + '').length < 2) {
				finalSs = '0' + finalSs;
			}
			var finalTime = nYear + '-' + nMonth + '-' + nDay + ' ' + finalHour + ':' + finalMinutes + ':' + finalSs;

			return(finalTime)
		}
		var timecb = gettimeData();
		var jsonDatab = {
			"size": "-1",
			"dateTime": timecb,
		};
		$.ajax({
			url: '../api/v1/route/getSectorCount',
			type: 'POST',
			dataType: 'json',
			data: jsonDatab,
			contentType: "application/x-www-form-urlencoded;",
			success: function(data) {
				console.log(jsonDatab)
				console.log(data)
				var html1 = template('tableBoxTpl1', data);
				document.getElementById('tableBox1').innerHTML = html1;

				$('#tableBox1').scrollingOff();
				$('#tableBox1').scrolling({
					backgroundColor: '#0a3f5e',
					width: '0',
					borderRadius: '0.03rem',
					height: '1.2rem',
					right: '0.2rem'
				}, {
					backgroundColor: '#0396c2',
					borderRadius: '0.03rem',
					width: '0.06rem',
					marginLeft: '-0.2rem'
				});
				//            
			},
			error: function(err) {
				console.warn('die')
			}
		});
		$.ajax({
			url: '../api/v1/route/getSegmentCount',
			type: 'POST',
			dataType: 'json',
			data: jsonDatab,
			contentType: "application/x-www-form-urlencoded;",
			success: function(data) {
				var html2 = template('tableBoxTpl2', data);
				document.getElementById('tableBox2').innerHTML = html2;
				$('#tableBox2').scrollingOff();
				$('#tableBox2').scrolling({
					backgroundColor: '#0a3f5e',
					width: '0',
					borderRadius: '0.03rem',
					height: '1.2rem',
					right: '0.2rem'
				}, {
					backgroundColor: '#0396c2',
					borderRadius: '0.03rem',
					width: '0.06rem',
					marginLeft: '-0.2rem'
				});
				//         
			},
			error: function(err) {
				console.warn('die')
			}
		});

	}

	updata();

	var timerb;
	clearInterval(timerb);
	timerb = setInterval(function() {
		updata();
	}, 5000)

})