var $ = require('../utils/jquery-3.1.1.min.js');
var echarts = require('../utils/echarts.min.js');
var scrollMyself = require('../utils/scrollMyself.js');
var common = require('../utils/common.util2.js');
var Body   = require('../tpls/optimize/optimizeBody.string');
var Top   = require('../tpls/optimize/optimizeTop.string');
var Mid   = require('../tpls/optimize/optimizeMid.string');
var Right   = require('../tpls/optimize/optimizeRight.string');
var template = require('../utils/template.js');
var templates = require('../tpls/optimize/optimizeTemplates.string');
var tableTemplates = require('../tpls/optimize/optimizeTableTemplates.string');
var proposal = require('../tpls/optimize/optimizeProposal.string');
var Left = require('../tpls/optimize/optimizeLeft.string');
require('../utils/scrolling.js');
$(function() {
    common.renderBody($('body'), Body);
    common.append($('.opt-left'), Left);
    common.append($('.top-title'), Top);
    common.append($('.cavas-mid'), Mid);
    common.append($('.opt-right'), Right);
    common.append($('body'), templates);
    common.append($('body'), tableTemplates);
    common.append($('.plBox'), proposal);

    // 定义常量
    var CONSTANT = {
        FPL: '已发计划报',
        plan: '计划中',
        flight: '飞行中',
        DOWN: '降落',
        ARR: '到达',
        DEP: '起飞'
    };
    var STATUS_ASPECT = ['STATUS', 'ASPECT'];

    // echarts三个图表自定义颜色
    var color1 = ['#2388D9', '#FFCC42', '#7740A2', '#686868'];
    var color2 = ['#2388D9', '#FFCC42', '#7740A2', '#686868'];
    var color3 = ['#4FAADF', '#FB614C'];

    var obj1 = {
        color: color1
    };
    var obj2 = {
        color: color2
    };
    var obj3 = {
        color: color3,
        dataZoom: { show: true, bottom: 1 }
    };

    var iTime1, iTime2, iTme3;

    // 获取当前时间 航班排序时间
    var nDate = new Date();
    var nDay = nDate.getDay();
    nDay = nDay < 10 ? ('0' + nDay) : nDay;
    var nHour = nDate.getHours();
    var num = nHour + 6 - (nHour - 2);
    for (var n = 0; n < num; n++) {
        var hour = (nHour - 2) + n;
        hour = hour < 10 ? ('0' + hour) : hour;
        $('#dl' + n + ' .replace').replaceWith('<dt class="replace">' + (nDay + '/' + hour + '00')  + '</dt>');
    }

    getProposalData(getCurrentDate(), '15');
    // 获取优化建议数据
    function getProposalData(theTime, granule) {
        $.ajax({
            url: "../api/v1/prediction/getOptimizationSuggestion",
            type: "get",
            data: {theTime: theTime, granularity: granule}, 
            complete: function(request, textStatus) {

            },
            success: function(data, textStatus) {
                var nData = JSON.parse(data);
                if (typeof nData.data === 'undefined') {
                    return;
                }
                nData = nData.data;
                if (!nData.length) {
                    return;
                }
                var tracData = {};
                var traceArr = [];
                for (var q = 0; q < nData.length; q++) {
                    var arr = [];
                    var status = nData[q].STATUS;
                    if (typeof status === 'undefined') {
                        status = '无'
                    } else {
                        status = CONSTANT[status];
                    }
                    arr.push(typeof nData[q].FLT_ID === 'undefined' ? '无' : nData[q].FLT_ID);
                    arr.push(typeof nData[q].ARR_AP === 'undefined' ? '无' : nData[q].ARR_AP);
                    arr.push(typeof nData[q].PLAN_ETD === 'undefined' ? '无' : nData[q].PLAN_ETD);
                    arr.push(typeof nData[q].NEW_TIME === 'undefined' ? '无' : nData[q].NEW_TIME);
                    arr.push(status);
                    arr.push(typeof nData[q].RUNWAY === 'undefined' ? '无' : nData[q].RUNWAY);
                    traceArr.push(arr);
                }

                tracData.list = traceArr;
                var html4 = template('tpl-data2', tracData);
                document.getElementById('tableTpl4').innerHTML = html4;

                
                $('#scroll3').scrollingOff();
                $('#scroll3').scrolling({ backgroundColor: '#0a3f5e', width: '0.1rem', borderRadius: '0.03rem', height: '5rem', right: '0.3rem' }, { backgroundColor: '#0396c2', borderRadius: '0.03rem', width: '0.08rem', marginLeft: '-0.02rem' });

            
            }
        });
        iTime1 = setTimeout(function() {getProposalData(getCurrentDate(), granule)}, 5000);
    }

    getRightData(getCurrentDate(), '15');
    // 获取右侧数据
    function getRightData(theTime, granule) {
        $.ajax({
            url: "../api/v1/prediction/getDetails",
            type: "get",
            data: {theTime: theTime, granule: granule},
            complete: function(request, textStatus) {

            },
            success: function(data, textStatus) {
                var nData = JSON.parse(data);
                if (typeof nData.data === 'undefined') {
                    return;
                }
                nData = nData.data;
                if (!nData.length) {
                    return;
                }
                var arrivalData = {};
                var departureData = {};
                var arrivalData1 = [];
                var departureData1 = [];

                for (var i = 0; i < nData.length; i++) {
                    var arr = [];
                    var arr1 = [];
                    var etaTime = nData[i].PLAN_ETA;
                    var etdTime = nData[i].PLAN_ETD;
                    etaTime = etaTime.substr(0, 2) + ':' + etaTime.substr(2);
                    etdTime = etdTime.substr(0, 2) + ':' + etdTime.substr(2);
                    // 出港
                    if (nData[i].ASPECT === 'DEP') {
                        arr.push(nData[i].FLT_ID);
                        arr.push('    ');
                        arr.push('到达 ' + etaTime);
                        arr.push('起飞 ' + etdTime);
                        arr.push(nData[i].ARR_AP);
                        arr.push(nData[i].DEP_AP);
                        departureData1.push(arr);
                    } else if (nData[i].ASPECT === 'ARR') {
                        // 进港
                        arr1.push(nData[i].FLT_ID);
                        arr1.push('    ');
                        arr1.push('到达 ' + etaTime);
                        arr1.push('起飞 ' + etdTime);
                        arr1.push(nData[i].ARR_AP);
                        arr1.push(nData[i].DEP_AP);
                        arrivalData1.push(arr1);
                    }
                }
                arrivalData.list = arrivalData1;
                departureData.list = departureData1;
                var html2 = template('tpl-data1', arrivalData);
                document.getElementById('tableTpl2').innerHTML = html2;

                var html3 = template('tpl-data1', departureData);
                document.getElementById('tableTpl3').innerHTML = html3;

                for (var w = 0; w < nData.length; w++) {
                    var obj = nData[w];
                    var status = obj.STATUS; // 状态 判断图标颜色
                    var aspect = obj.ASPECT; // DEP出港(右)  ARR进港(左)
                    var etdTime = obj.PLAN_ETD; // 起飞时间
                    var etaTime = obj.PLAN_ETA; // 落地时间
                    var time = null;
                    if (aspect === 'DEP') {
                        time = etdTime;
                    } else if (aspect == 'ARR') {
                        time = etaTime;
                    }
                    var background = '';
                    if (status === 'plan' && aspect === 'DEP') {
                        background = 'url(./img/optimize/chu_jihua.png) no-repeat';
                    } else if (status === 'FPL' && aspect === 'DEP') {
                        background = 'url(./img/optimize/chu_yifa.png) no-repeat';

                    } else  if (status === 'flight' && aspect === 'DEP') {
                        background = 'url(./img/optimize/chu_qifei.png) no-repeat';

                    } else if (status === 'DOWN' && aspect === 'DEP') {
                        background = 'url(./img/optimize/chu_jiangluo.png) no-repeat';

                    } else if (status === 'plan' && aspect === 'ARR') {
                        background = 'url(./img/optimize/jin_jihua.png) no-repeat';

                    } else if (status === 'FPL' && aspect === 'ARR') {
                        background = 'url(./img/optimize/jin_yifa.png) no-repeat';

                    } else  if (status === 'flight' && aspect === 'ARR') {
                        background = 'url(./img/optimize/jin_qifei.png) no-repeat';

                    } else if (status === 'DOWN' && aspect === 'ARR') {
                        background = 'url(./img/optimize/jin_jiangluo.png) no-repeat';
                    } 

                    var testDiv = '<div id="arrow' + w + '" class="arrow"></div>';
                    var left1 = parseInt(time.substr(0, 2), 10) - (parseInt(nHour, 10) - 2) + 1;
                    var left = 12 * 0.105 * left1 - 0.45 + 'rem';
                    
                    var top1 = parseInt(parseInt(time.substr(2), 10)  / 5, 10) * 0.52 + 0.82 - 0.02;
                    var top2 = parseInt(time.substr(2), 10) % 5 * (0.43 / 5);
                    var top =  top1 + top2 - 0.09 + 'rem';

                    $('#content1').append(testDiv);
                    $('#arrow' + w).css({left: left, top: top, background: background});

                }
                $('#scroll1').scrollingOff();
                $('#scroll2').scrollingOff();
                $('#scroll1').scrolling({ backgroundColor: '#0a3f5e', width: '0.02rem', borderRadius: '0.03rem', height: '6.5rem', right: '0.03rem' }, { backgroundColor: '#0396c2', borderRadius: '0.03rem', width: '0.06rem', marginLeft: '-0.02rem' });
                $('#scroll2').scrolling({ backgroundColor: '#0a3f5e', width: '0.02rem', borderRadius: '0.03rem', height: '6.5rem', right: '0.03rem' }, { backgroundColor: '#0396c2', borderRadius: '0.03rem', width: '0.06rem', marginLeft: '-0.02rem' });
            }
        });
        iTime2 = setTimeout(function() {getRightData(getCurrentDate(), granule)}, 5000);
    }

    

    function showDiv(){
        document.getElementById('popDiv').style.display='block';
        document.getElementById('bg').style.display='block';
    }

    function closeDiv(){
        document.getElementById('popDiv').style.display='none';
        document.getElementById('bg').style.display='none';
    }

    $('#closeD').on('click', function () {
        closeDiv();
    });
     //点击查看弹出框
    $('#lists').on('click','.showD',function () {
       showDiv();
    });
    

    // 粒度选择事件
    $('#lidu').on('change', onSelectChange);
    function onSelectChange() {
        var selected = $('select option:selected').val();
        // TODO: '11:16:30'换成 getCurrentDate()
        iTime1 && clearTimeout(iTime1);
        iTime2 && clearTimeout(iTime2);
        iTime3 && clearTimeout(iTime3);
        getData(getCurrentDate(), '1', selected);
        getRightData(getCurrentDate(), selected);
        getProposalData(getCurrentDate(), selected);

    }


    // 模拟Tab标签
    $('.titles').on('click', function(event) {
        $('.titles').removeClass('on');
        $(this).addClass('on');
        var index=$(this).index();
        $('#lists').css('margin-left',(-index*4)+'rem')
    });

    // 定义滚动条
    $('#scroll').scrolling({ backgroundColor: '#0a3f5e', borderRadius: '0.03rem',height:'0.05rem',width:'4rem' }, { backgroundColor: '#0396c2', borderRadius: '0.03rem',height:'0.05rem'}, true);
    
    // 获取当前时间 秒数是5的倍数
    function getCurrentDate() {
        var currentDate = new Date();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        if ((hours + '').length < 2) {
            hours = '0' + hours;
        }
        var fiveMultipe = Math.ceil(seconds / 15);
        if (fiveMultipe === 4) {
            minutes += 1;
            seconds = '00';
        } else {
            seconds = fiveMultipe * 15;
        }

        minutes = minutes < 10 ? ('0' + minutes) : minutes;
        seconds = seconds < 10 ? ('0' + seconds) : seconds;
        return hours + ':' + minutes + ':' + seconds;
    }
    // TODO: '11:16:30'换成 getCurrentDate()
    getData(getCurrentDate(), '1', '15');
	// 获取后端数据
    function getData(theTime, type, granule) {

        $.ajax({
            url: "../api/v1/prediction/getPrediction",
            type: "get",
            data: {theTime: theTime, type: type, granule: granule},
            complete: function(request, textStatus) {

            },
            success: function(data1, textStatus) {
                $.ajax({
                    url: "../api/v1/prediction/getPrediction",
                    type: "get",
                    data: {theTime: theTime, type: '2', granule: granule},
                    complete: function(request, textStatus) {

                    },
                    success: function(data2, textStatus) {
                        $.ajax({
                            url: "../api/v1/prediction/getPrediction",
                            type: "get",
                            data: {theTime: theTime, type: '3', granule: granule},
                            complete: function(request, textStatus) {

                            },
                            success: function(data3, textStatus) {
                                var prevData1 = JSON.parse(data1);
                                var prevData2 = JSON.parse(data2);
                                var prevData3 = JSON.parse(data3);
                                if (!prevData1.data.length || !prevData2.data.length || !prevData3.data.length) {
                                    return;
                                }
                                 var nData1 = formatData(prevData1.data, parseInt(granule, 10), true);
                                var nData2 = formatData(prevData2.data, parseInt(granule, 10), true);
                                var nData3 = formatData(prevData3.data, parseInt(granule, 10), false, STATUS_ASPECT[1]);
                                initChart(nData1.xAxisData, nData1.finalData, nData2.finalData, nData3.finalData);
                            }
                        });      
                    }
                });
            }
        });
        iTime3 = setTimeout(function() {getData(getCurrentDate(), type, granule)}, 5000);
    }
   
    // 格式化数据 返回格式 {xAxisData: [], finalData: []}
    function formatData(prevData, granularity, isType, status) {
        var status = status || 'STATUS';
        var isType = isType && true;
        var legendData = [];
        if (!prevData.length) {
            return [];
        }

        // 获取echarts图例数据
        for (var i = 0; i < prevData.length; i++) {
            if (legendData.indexOf(prevData[i][status]) < 0) {
                legendData.push(prevData[i][status]);
            }
        }
        i = 0;

        // 获取图例下的data数据 第一次转换
        var firstData = [];
        for (var j = 0; j < legendData.length; j++) {
            var obj = {
                nameCode: legendData[j],
                name: CONSTANT[legendData[j]],
                data: []
            };
            for (var k = 0; k < prevData.length; k++) {
                if (prevData[k][status] === legendData[j]) {
                    var time = prevData[k].TIME_QUANTUM.split('_')[1];
                    time = time.split('');
                    for (var z = 1; z < time.length - 1; z += 2) {
                        time[z] += ':';
                    }
                    time = time.join('');
                    var number = prevData[k].FLIGHT_NUMBER;
                    obj.data.push({
                        time: time,
                        number: number
                    });
                }
            }
            firstData.push(obj);
        }

        // 获取X轴数据
        var currentDate = new Date();
        var currentHour = currentDate.getHours();
        var left2Hour = currentHour - 2;
        var right6Hour = currentHour + 6;
        if (right6Hour >= 24) {
            right6Hour = 24;
        }
        if (left2Hour <= 0) {
            left2Hour = 0
        }
        var differHours = right6Hour - left2Hour; //相差differHours个小时
        // var granularity = 15; //粒度 15 分钟
        var hoursLength = 60 / granularity * differHours;
        left2Hour = left2Hour * 100;
        right6Hour = right6Hour * 100;

        var timeData = [];
        for (var y = 0; y < hoursLength; y++) {
            left2Hour += granularity;
            if (parseInt((''+left2Hour).substr((''+left2Hour).length - 2), 10) === 60) {
                left2Hour += 40;
            }
            var nLeft2Hour = '' + left2Hour;
            if (nLeft2Hour.length === 3) {
                nLeft2Hour = 0 + nLeft2Hour;
            }
            nLeft2Hour = nLeft2Hour.substr(0, 2) + ':' + nLeft2Hour.substr(2);
            timeData.push(nLeft2Hour);
        }

        // 第二次转换图例下data数据
        var secondData = [];
        for (var r = 0; r < firstData.length; r++) {
            var obj1 = {
                name: firstData[r].name,
                nameCode: firstData[r].nameCode,
                data: []
            };
            var firstObjData = firstData[r].data;
            var datas = [];
            for (var g = 0; g < firstObjData.length; g++) {
                var index = timeData.indexOf(firstObjData[g].time);
                if (index > 0) {
                    datas[index] = firstObjData[g].number;
                }
            }
            for (var f = 0; f<timeData.length; f++) {
                if (typeof datas[f] === 'undefined') {
                    datas[f] = 0;
                }
            }
            obj1.data = datas;
            secondData.push(obj1);
        }

        // 第三次转换图例下Data数据
        var thirdData = secondData;
        if (isType) {
            thirdData = [];
            for (var l = 0; l < secondData.length; l++) {
                var objT = secondData[l];
                if (objT.nameCode === 'plan') {
                    thirdData[0] = objT;
                } else if (objT.nameCode === 'FPL') {
                    thirdData[1] = objT;
                } else if (objT.nameCode === 'flight') {
                    thirdData[2] = objT;
                } else if (objT.nameCode === 'DOWN') {
                    thirdData[3] = objT;
                }
            }
        }
        
        return {xAxisData: timeData, finalData: thirdData};
    }

    // 初始化echarts图表
    function initChart(xAxisData, data1, data2, data3) {
        var trafficeEcharts1 = document.getElementById('trafficEcharts1');
        var trafficeEcharts2 = document.getElementById('trafficEcharts2');
        var trafficeEcharts3 = document.getElementById('trafficEcharts3');

        var myChart1 = echarts.init(trafficeEcharts1);
        var myChart2 = echarts.init(trafficeEcharts2);
        var myChart3 = echarts.init(trafficeEcharts3);

        function createOpt(data, obj, markLineData) {
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
                tooltip: {
                    trigger: 'axis',
                    confine: true,
                    axisPointer: {
                        type: "line",
                        axis: 'x',
                        lineStyle: {
                            color: ' #FFFFFF',
                            type: 'dashed'
                        }
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                dataZoom : {
                    type: 'slider',
                    show : false,
                    filterMode: 'empty',
                    labelFormatter: function() {
                        return '';
                    },
                    realtime : true,
                    height: 15,
                    start : 0,
                    end: 60,
                    backgroundColor: 'rgba(4,202,245,0.70)',
                    borderColor: '#0d152f',
                    textStyle: {fontSize: 0}
                },
                xAxis: {
                    type : 'category',
                    axisTick: false,
                    axisLabel: {  
                        textStyle: {
                            color: '#04CBF5'
                        }
                    },
                    axisLine: {
                        lineStyle:{
                            color:'rgba(230,235,240,0.1)'
                        }
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color: ['rgba(230,235,240,0.1)'],
                            type: 'dashed'
                        }
                    },
                    data : xAxisData
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
                        lineStyle:{
                            color:'rgba(230,235,240,0.1)',
                            type: 'dashed'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'rgba(230,235,240,0.1)'
                        }
                    }
                },
                series: []
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
                data[i].stack = '默认组';
                data[i].barMaxWidth = 20;
                data[i].markLine = {
                    label: {normal: {show: false}},
                    silent: true,
                    symbol: '',
                    lineStyle: {normal: {color: 'red'}},
                    // data: [[{xAxis: ['8:00', 0], label:{normal: {show: false}}}, {xAxis: ['8:00', 200], label:{normal: {show: false}}}]]]
                };
                nLegends.push(obj1);
            }
            i = 0;
            nObj.legend.data = nLegends;
            nObj.series = data;
            return nObj;
        }

        var nOption1 = createOpt(data1, obj1);
        var nOption2 = createOpt(data2, obj2);
        var nOption3 = createOpt(data3, obj3);

        myChart1.setOption(nOption1, true);
        myChart2.setOption(nOption2, true);
        myChart3.setOption(nOption3, true);
        

        myChart1.group = 'group1';
        myChart2.group = 'group1';
        myChart3.group = 'group1';
        echarts.connect('group1');
    }

    //缩放窗口事件
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, initChart, onSelectChange, false);
})
