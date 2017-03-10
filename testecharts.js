
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById('main'));
		var pointdata = [];

		option = {
			backgroundColor: 'rgba(250,250,250,0)',
			visualMap: {
				left: 'right',
				min: 500000,
				max: 38000000,
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				},
				text: ['High', 'Low'], // 文本，默认为数值文本
				calculable: true
			},
			tooltip: {
				padding: 10,
				backgroundColor: '#222',
				borderColor: '#777',
				borderWidth: 1,
				enterable: true,
				formatter: function(obj) {
					var value = obj.value;
					return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
						obj.name + ' ' + value[0] + '日：' +
						value[7] +
						'</div>' +
						'经度' + '：' + value[0] + '<br>' +
						'纬度' + '：' + value[1] + '<br>' +
						'繁忙程度' + '：' + value[2] + '<br>';
				}
			},
			title: {
				text: '交通流量',
				x: 'center',
				y: 'top',
				textStyle: {
					color: '#0596d1'
				}
			},
			legend: {
				show: true,
				selected: {},
				x: 'left',
				orient: 'vertical',
				textStyle: {
					color: 'white'
				},
				data: []
			},
			series: [{
				name: "Migration",
				type: 'map',
				mapType: 'china',

				itemStyle: {
					normal: {
						borderColor: 'rgba(100,149,237,0.3)',
						borderWidth: 0.5,
						areaStyle: {
							color: '#0d152f',
						},
						emphasis: {
							areaStyle: {
								color: 'rgba(250,250,250,0)',
							}

						}
					}
				},
				data: [{}],
				hoverable: false,
				clickable: false,
				roam: true,
				markLine: {
					effect: {
						color: 'rgba(2, 166, 253, 0.1)',//三色
						show: true,
						period: 40
					},
					bundling: {
						enable: true
					},
					large: true,
					smooth: true,
					smoothness: 0.1,
					symbol: ['none', 'none'],
					itemStyle: {
						normal: {
							lineStyle: {
								color: 'rgba(204, 246, 255, 0.05)',
								type: 'solid',
								width: 0.5,
								opacity: 0.2
							}
						}
					},
					data: []
				},
				markPoint: {
					tooltip: {
						padding: 10,
						backgroundColor: '#222',
						borderColor: '#777',
						borderWidth: 1,
						enterable: true,
						formatter: function(obj) {
							var value = obj.value;
							return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
								obj.name + ' ' + value[0] + '日：' +
								value[7] +
								'</div>' +
								'经度' + '：' + value[0] + '<br>' +
								'纬度' + '：' + value[1] + '<br>' +
								'繁忙程度' + '：' + value[2] + '<br>';
						}
					},
					symbol: 'circle',
					symbolSize: 0.03,

					itemStyle: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: false
						},
						emphasis: {
							show: true
						}
					},

					data: []
				}
			}]
		};
		var geoCoord = null;

		function getGeoCoord(name) {
			var coord;
			try {
				coord = geoCoord[name];

			} catch(e) {}

			return coord;
		}

		$.ajax({
			url: 'getBaseRouteReally.json',
			dataType: 'json',
			success: function(data) {
				var tmp629 = JSON.stringify(data.data['segmentList'][620]);
				tmp629 = JSON.stringify(data.data['segmentList'][629]);
				console.log(tmp629);

				tmp629 = JSON.stringify(data.data['segmentList'][630]);

				console.log(tmp629);

				//alert("break;");
				geoCoord = data.data['pointList'];
				var flag = 0;
				option.series[0].markLine.data = data.data['segmentList'].sort(function(a, b) {
					return b.num - a.num
				}).slice(0, 3493).map(function(line) {
					flag++;

					return [{
						geoCoord: getGeoCoord(line[0].name)
					}, {
						geoCoord: getGeoCoord(line[1].name)
					}]
				});

				for(var j = 0; j < data.data.segmentList.length; j++) {
					pointdata.push(data.data.segmentList[j][0]);
					pointdata.push(data.data.segmentList[j][1]);
				}
				option.series[0].markPoint.data = pointdata.map(function(point) {
					return {
						geoCoord: getGeoCoord(point.name)
					}
				});
				myChart.setOption(option);
			}
		});

		// 为echarts对象加载数据
		myChart.setOption(option);
	
	