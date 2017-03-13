var $ = require('../utils/jquery-3.1.1.min.js');
var echarts = require('../utils/echarts.min.js');
var scrollMyself2 = require('../utils/scrollMyself2.js');
var template = require('../utils/template.js');
var common = require('../utils/common.util.js');
require('../utils/scrolling.js');
var echartsMyself = require('../utils/echartsMyself.js');
var delayBody = require('../tpls/delayAnalysis/delayBody.string');
var delayLeft = require('../tpls/delayAnalysis/delayAnalysisLeft.string');
var delayRight = require('../tpls/delayAnalysis/delayAnalysisRight.string');
var delayBottom = require('../tpls/delayAnalysis/delayAnalysisBottom.string');
var templates = require('../tpls/delayAnalysis/delayAnalysisTemplates.string');
var tc1 = require('../tpls/delayAnalysis/tc1.string');
//var common = require('../utils/input.js');
$(function() {
    common.append($('body'), delayBody);
    common.append($('.topBox'), delayLeft);
    common.append($('.topBox'), delayRight);
    common.append($('.bottomBox'), delayBottom);
    common.append($('body'), templates);
    common.append($('.tcBox'), tc1);
    // 基于准备好的dom，初始化echarts实例
    var domObj1 = document.getElementById('main');
    var domObj2 = document.getElementById('main1');
    var domObj3 = document.getElementById('main2');
    var domObj4 = document.getElementById('main3');

    //  var domObj3=document.getElementById('barGraph3');
    //  var domObj4=document.getElementById('barGraph4');
    var barWidth = 5;
    var symbolSize = 20;
    var fontSize = 16;


    function doAjax(data, domObj1, k) {
        $.ajax({
            url: '../api/v1/delay/getDelayCount',
            type: 'POST',
            dataType: 'json',
            //data: "{day:1,type:2}",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data) {
                var list = data.delayCountItemList;
                var title = [];
                var da = [];
                for (var i = 0; i < list.length; i++) {
                    title.push(list[i].name);
                    da.push(list[i].count);

                }
                echartsMyself.drewOne(da, title, domObj1, barWidth, symbolSize, fontSize, k, function() {
                    searchFun();
                });
            },
            error: function(err) {
                console.warn('die')
            }
        });
    }



    function initChart() {
        fontSize = document.documentElement.clientWidth / 1920 * 16;
        var nowDay = window.day ? window.day : (new Date().getTime());;
        var dataArr = [{ day: nowDay, type: 1 }, { day: nowDay, type: 2 }, { day: nowDay, type: 3 }, { day: nowDay, type: 4 }]
        for (var i = 0; i < dataArr.length; i++) {
            doAjax(dataArr[i], eval('domObj' + (i + 1)), i);
        }
        $('#listContainerTpl').scrollingOff();
        $('#listContainerTpl').scrolling({
            backgroundColor: '#0a3f5e',
            width: '0.02rem',
            borderRadius: '0.03rem',
            height: '1.3rem',
            right: '0.03rem'
        }, {
            backgroundColor: '#0396c2',
            borderRadius: '0.03rem',
            width: '0.06rem',
            marginLeft: '-0.02rem'
        });
    }

    initChart();
    //缩放窗口事件
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, initChart, false);

    //时间控件
    var n = new Date;
    window.Time = {
        y: n.getFullYear(),
        M: n.getMonth(),
        d: n.getDate()
    };
    window.day = 0;
    window.startTime = null;
    window.endTime = null;
    var M8 = 28800000; //北京位于东八区，减去8小时


    //格式化时间
    function formatTime(num) {
        var date = new Date;
        date.setTime(num)
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        m = m < 10 ? ("0" + m) : m;
        d = d < 10 ? ("0" + d) : d;
        return y + '-' + m + '-' + d;
    }

    function formatTime2(num) {
        var data = new Date;
        data.setTime(num);
        var h = data.getHours();
        var m = data.getMinutes();
        h = h < 10 ? ("0" + h) : h;
        m = m < 10 ? ("0" + m) : m;
        return h + ':' + m;
    }

    $('.dList').on('click', function(event) {
        $(this).addClass('on').siblings().removeClass('on');
    });


    $('#doSearch').on('click', function(event) {
        event.preventDefault();
        searchFun()
    });

    function searchFun() {
        var flightNumber = document.getElementById('flightNumber').value == "" ? null : document.getElementById('flightNumber').value;
        var company = document.getElementById('company').value == "" ? null : document.getElementById('company').value;
        var airport = document.getElementById('airport').value == "" ? null : document.getElementById('airport').value;
        var delay = document.getElementById('delay').value == "" ? null : document.getElementById('delay').value;
        var start = document.getElementById('startTime').value == "" ? null : document.getElementById('startTime').value;
        var end = document.getElementById('endTime').value == "" ? null : document.getElementById('endTime').value;

        var day = window.day ? window.day : (new Date().getTime());
        if (start) {
            var sTime = start.split(':');
            window.startTime = Date.UTC(window.Time.y, window.Time.M, window.Time.d, parseInt(sTime[0]), parseInt(sTime[1]));
        }
        if (end) {
            var eTime = end.split(':');
            window.endTime = Date.UTC(window.Time.y, window.Time.M, window.Time.d, parseInt(eTime[0]), parseInt(eTime[1]));
        }

        $.ajax({
            url: '../api/v1/delay/getDelayDetailItem',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                flightNumber: flightNumber,
                day: day,
                airlineCompany: company,
                airdrome: airport,
                delayCause: delay,
                takeOffTime: window.endTime == null ? window.endTime : window.endTime - M8,
                fallTakeTime: window.startTime == null ? window.startTime : window.startTime - M8
            }),
            success: function(data) {
                for (var i = 0; i < data.delayItemList.length; i++) {
                    data.delayItemList[i].fallTakeTime = formatTime2(data.delayItemList[i].fallTakeTime);
                    data.delayItemList[i].takeOffTime = formatTime2(data.delayItemList[i].takeOffTime);
                    data.delayItemList[i].r = data.delayItemList[i].delayCause;
                    var r = data.delayItemList[i].delayCause;
                    if (r == '0') {
                        data.delayItemList[i].delayCause = '时刻原因';
                    } else if (r == '1') {
                        data.delayItemList[i].delayCause = '流控原因';
                    } else if (r == '2') {
                        data.delayItemList[i].delayCause = '运行保障';
                    } else if (r == '3') {
                        data.delayItemList[i].delayCause = '航司原因';
                    } else {
                        data.delayItemList[i].delayCause = '天气原因';
                    }

                }
                var html = template('Tpl-data1', data);
                document.getElementById('listContainerTpl').innerHTML = html;
                $('#listContainerTpl').scrollingOff();
                $('#listContainerTpl').scrolling({
                    backgroundColor: '#0a3f5e',
                    width: '0.02rem',
                    borderRadius: '0.03rem',
                    height: '1rem',
                    right: '0.04rem'
                }, {
                    backgroundColor: '#0396c2',
                    borderRadius: '0.03rem',
                    width: '0.06rem',
                    marginLeft: '-0.02rem'
                });
            },
            error: function(err) {
                console.warn(err)
            }

        });
    }

    searchFun();

    //点击查看弹出框
    $('#listContainerTpl').on('click', '.showD', function() {
        $('.tcBox1,.mask').show();
        var txt = $(this).parent().siblings('li').eq(4).data('cause').toString();
        $('[data-c="c' + txt + '"]').trigger('click');
    });
    $('.mask').unbind('click').on('click', function() {
        $('.tcBox1,.mask').hide();
    });

    var $squaCon = $('.squaBox');
    $squaCon.on('click', function() {
        $('.tcContent').find('.r0').removeClass('borderCon redBg').addClass('dashedCon');
        var data = $(this).attr('data');
        $('.tcContent').find('.' + data).removeClass('dashedCon').addClass('borderCon');
        $(this).addClass('redBg');
    });
    $(document).keyup(function(event) {
        switch (event.keyCode) {
            case 27:
                $('.tcBox1,.mask').hide();
            case 96:
                $('.tcBox1,.mask').hide();
        }
    });


    window.endTime = {};

    function formatTime() {
        var date = new Date;
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '-' + m + '-' + d;
    }
    document.getElementById('tm1').value = formatTime();
    // document.getElementById('startTime').value = '00:00';
    // document.getElementById('endTime').value = '23:00';

    document.getElementById('tm1').onfocus = function() {
        WdatePicker({
            dateFmt: 'yyyy-MM-d',
            readOnly: true,
            maxDate: '%y-%M-%d',
            onpicking: function(dp) {
                var arr = dp.cal.getNewDateStr().split('-');
                window.Time = $dp.cal.date;
                window.Time.M = window.Time.M - 1;
                window.Time.d = dp.cal.getNewDateStr().split('-')[2];
                window.day = Date.UTC(window.Time.y, window.Time.M, window.Time.d);
                initChart();
                searchFun();

            }
        })
    }
    document.getElementById('startTime').onfocus = function() {
        WdatePicker({
            dateFmt: 'HH:mm',
            readOnly: true,
            onpicking: function(dp) {
                console.log(dp.cal.getDateStr(), '---', dp.cal.getNewDateStr())

            }
        })
    }
    document.getElementById('endTime').onfocus = function() {
        WdatePicker({
            dateFmt: 'HH:mm',
            readOnly: true,
            onpicking: function(dp) {
                console.log(dp.cal.getDateStr())

            }
        })
    }
});
