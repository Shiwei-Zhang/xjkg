/**
 * Created by chenwei on 2017/3/2.
 */
var $=require('../utils/jquery-3.1.1.min.js');
var common = require('../utils/common.util.js');
var str   = require('../tpls/trafficPrediction/trafficPredictionBody.string');
var left  = require('../tpls/trafficPrediction/trafficPredictionLeft.string');
var right = require('../tpls/trafficPrediction/trafficPredictionRight.string');
require('../modules/index/anmination.js');
var echarts = require('../utils/echarts.min.js');

$(function() {
    common.renderBody($('body'), str);
    common.append($('.leftBox'), left);
    common.append($('.rightBox'), right);
    $('#tab').on('click','li',function(){
        $(this).siblings().removeClass('select');
        $(this).addClass('select');
        var className = $(this).attr('class');
        var id = parseInt($(this).attr('id'), 10);
        $(this).parent().next().css('left', '-' + (id - 1) + '00%');
    });

    var trafficeEcharts1 = document.getElementById('trafficEcharts1');
    var trafficeEcharts2 = document.getElementById('trafficEcharts2');
    var trafficeEcharts3 = document.getElementById('trafficEcharts3');

    var myChart1 = echarts.init(trafficeEcharts1);
    var myChart2 = echarts.init(trafficeEcharts2);
    var myChart3 = echarts.init(trafficeEcharts3);

    function createOpt(data, obj) {
        if (!data instanceof Array || !data.length) {
            return {};
        }
        var option = {
            legend: {
                itemGap: 5,
                itemHeight: 8,
                textStyle: {
                    color: '#04CBF5',
                    fontSize: 2
                },
                data:[]
            },
            grid: {
                top: 30,
                bottom: 40,
                left: '6%',
                right: '5%'
            },
            tooltip: {},
            dataZoom : {
                type: 'slider',
                show : false,
                realtime : true,
                height: 10,
                start : 0,
                end: 60,
                backgroundColor: ' rgba(4,202,245,0.70)',
                borderColor: '#0d152f',
                textStyle: {fontSize: 0}
            },
            xAxis: {
                interval: 2,
                axisTick: false,
                axisLabel: {
                    textStyle: {
                        color: '#04CBF5'
                    }
                },
                axisLine: {
                    lineStyle:{color:'rgba(230,235,240,0.1)'}
                },
                splitLine:{
                    lineStyle:{color:'rgba(230,235,240,0.1)'}
                },
                type : 'category',
                data : [ '10:00','11:00','12:00','13:00','14:00','15:00','16:00',
                    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
            },
            yAxis: {
                axisTick: false,
                name: '',
                nameTextStyle: {
                    color: '#04CBF5'
                },
                axisLabel: {
                    textStyle: {
                        color: '#04CBF5'
                    }
                },
                axisLine: {
                    lineStyle:{color:'rgba(230,235,240,0.1)'}
                },
                splitLine:{
                    lineStyle:{color:'rgba(230,235,240,0.1)'}
                }
            },
            series: [{
                name: '',
                type: 'bar',
                stack: '',
                barWidth: 20,
                data: []
            }, {
                name: '',
                type: 'bar',
                stack: '',
                barWidth: 20,
                data: []
            }]
        };

        var nObj = $.extend(true, option, obj);

        var nLegends = [];
        var i = 0;
        for (i = 0; i < data.length; i++) {
            var dataObj = data[i];
            var obj1 = {
                icon: 'circle',
                name: dataObj.name
            };
            data[i].type = 'bar';
            data[i].stack = 'aaa';
            data[i].barWidth = 20;
            nLegends.push(obj1);
        }
        i = 0;
        nObj.legend.data = nLegends;
        nObj.series = data;
        return nObj;
    }

    var data1 =  [{
        name: '计划',
        data: [1, 1, 3, 10, 26, 14, 10, 20,1, 2, 5, 20, 36, 10, 10]
    }, {
        name: '已发FPL',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '已起飞',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '已降落',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '堆栈航班',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '数据时间',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    }];

    var data2 =  [{
        name: '前序到岗',
        data: [1, 1, 3, 10, 26, 14, 10, 20,1, 2, 5, 20, 36, 10, 10]
    },{
        name: '已发FPL',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '计划',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '已起飞',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '已降落',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '堆栈航班',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    },{
        name: '数据时间',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    }];

    var data3 =  [{
        name: '出港预测',
        data: [1, 1, 3, 10, 26, 14, 10, 20,1, 2, 5, 20, 36, 10, 10]
    }, {
        name: '进港预测',
        data: [1, 2, 5, 20, 36, 10, 10, 20, 31]
    }];

    var color1 = ['#2388D9', '#00AC8B', '#04CBF5', ' #686868', '#7740A2', '#FFCC42'];
    var color2 = ['#880F4A', '#2388D9', '#00AC8B', '#04CBF5', ' #686868', '#7740A2', '#FFCC42'];
    var color3 = ['#4FAADF', '#FB614C'];

    var obj1 = {
        color: color1
    };
    var obj2 = {
        color: color2,
        yAxis: {name: '出港流量统计'}
    };
    var obj3 = {
        color: color3,
        dataZoom: {show: true, bottom: 1},
        yAxis: {name: '机场流量预测'}
    };

    var nOption1 = createOpt(data1, obj1);
    var nOption2 = createOpt(data2, obj2);
    var nOption3 = createOpt(data3, obj3);

    myChart1.setOption(nOption1);
    myChart2.setOption(nOption2);
    myChart3.setOption(nOption3);
    //
    // myChart1.connect([myChart2, myChart3]);
    // myChart2.connect([myChart1, myChart3]);
    // myChart3.connect([myChart2, myChart1]);
    myChart1.group = 'group1';
    myChart2.group = 'group1';
    myChart3.group = 'group1';
    echarts.connect('group1');
});
