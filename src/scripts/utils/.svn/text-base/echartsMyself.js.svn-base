var echarts = require('../utils/echarts.js');
var china = require('../utils/china.js');
var $ = require('../utils/jquery-3.1.1.min.js');
var echartsMyself = {
    drewOne: function(cData, cXtitle, cdom, cBarWidth, cSymbolSize, cFontSize, k, cb) {
        var myChart = echarts.init(cdom);
        option = {
            animationDuration: 0,
            tooltip: {
                trigger: 'item',
                //showContent:false,
                formatter: '{b}<br />{c}%',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: '6%',
                bottom: '15%'
            },
            legend: {
                padding: 0,
                top: 0,
                itemHeight: 0,
            },
            calculable: true,
            xAxis: [{
                splitLine: {
                    show: true
                },
                axisLabel: {
                    margin: 18,
                    textStyle: {
                        color: '#2990ac',
                        fontSize: cFontSize,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#05b9e2'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(230,235,240,0.1)'
                    }
                },
                type: 'category',
                data: cXtitle,

            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    margin: 18,
                    textStyle: {
                        color: '#ccc',
                        fontSize: cFontSize,
                    }

                },
                axisLine: {
                    lineStyle: {
                        color: '#05b9e2'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(4,203,245,0.1)'
                    }
                },
                //max: 'dataMax',
                min: 0,
                //boundaryGap:true,
                splitNumber: 7,
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value} %'

                },
                nameTextStyle: {
                    color: '#f00'
                },
                show: true
            }],
            series: [{
                name: '',
                type: 'bar',
                data: cData,
                barWidth: cBarWidth,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                [{ offset: 0, color: 'rgba(20,152,229,1)' }, { offset: 1, color: 'rgba(20,152,229,0)' }],
                                [{ offset: 0, color: 'rgba(250,0,106,1)' }, { offset: 1, color: 'rgba(250,0,10,0)' }],
                                [{ offset: 0, color: 'rgba(174,215,75,1)' }, { offset: 1, color: 'rgba(174,215,75,0)' }],
                                [{ offset: 0, color: 'rgba(250,110,0,1)' }, { offset: 1, color: 'rgba(250,110,0,0)' }]
                            ];
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, colorList[params.dataIndex]);
                        }
                    }
                }
            }, {
                name: '',
                type: 'line',
                data: cData,
                barWidth: cBarWidth,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorLists = [
                                'rgba(20,152,229,1)',
                                'rgba(250,0,106,1)',
                                'rgba(174,215,75,1)',
                                'rgba(250,110,0,1)'
                            ];
                            return colorLists[params.dataIndex];
                        }
                    }
                },
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                symbol: 'circle',
                symbolSize: 10
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function(params) {
            $('select').val('')
            if (k == 0) { //航空公司延误比例
                var arr1 = ['CCA', 'CES', 'CXH', 'CXA', 'CNW', 'CXJ', 'CSN', 'CYH', 'CXN', 'CSC', 'CBJ', 'CSH', 'CAG', 'CGW', 'CYN', 'CWU', 'CHH', 'CGH', 'CGN', 'CSZ', 'CNJ', 'CFJ', 'CDG', 'GCR', 'CUH'];
                var arr2 = ['CA', 'MU', 'X2', 'MF', 'WH', 'XO', 'CZ', '3Q', 'SZ', '3U', 'CJ', 'FM', 'F6', 'G8', 'Z2', 'WU', 'HU', 'G4', '2Z', 'ZH', '3W', 'IV', 'SC', 'GS', 'UQ'];
                for (var i = 0; i < arr2.length; i++) {
                    if (arr2[i] == params.name) {
                        $('#company').val(arr1[i]);
                    }
                }
            } else if (k == 1) { //延误时段分析
                var num = parseInt(params.name);
                document.getElementById('startTime').value = num + ':00';
                document.getElementById('endTime').value = (num + 1) + ':00';

            } else if (k == 2) { //到达机场延误比例
                var arr1 = ['海口/美兰', '珠海/九洲', '保山', '库尔勒', '恩施/许家坪', '敦煌', '大同/云冈', '德宏/芒市', '台州/路桥', '泉州/晋江', '义乌', '丹东/浪头', '梧州', '嘉峪关', '临沂/沭埠岭', '阿克苏/温宿', '朝阳', '东营', '万州/五桥', '九寨/黄龙', '乌海', '攀枝花/保安营', '无锡/硕放', '金门尚义', '绵阳/南郊', '青岛/流亭', '克拉玛依', '杭州/萧山', '临沧/博尚', '哈密', '湛江', '洛阳', '格尔木', '乌兰浩特/依勒力特', '北海/福成', '长沙/黄花', '大理/荒草坝', '丽江/三义', '昭通', '衢州', '威海/大水泊', '徐州/观音', '达州/河市', '拉萨/贡嘎', '遂宁', '乌鲁木齐/地窝堡', '长海', '黑河/瑷珲', '佳木斯', '牡丹江/海浪', '延吉/朝阳川', '兰州/中川', '温州/龙湾', '南阳/姜营', '厦门/高崎', '重庆/江北', '广元/盘龙', '富蕴/可可托海', '连城/冠豸山', '南充/高坪', '沈阳/桃仙', '罗定', '沙市', '且末', '阿勒泰', '襄阳/刘集', '永州/零陵', '福州/长乐', '上海/浦东', '上海/龙华', '呼和浩特/白塔', '通辽', '齐齐哈尔/三家子', '喀什', '深圳/宝安', '珠海/金湾', '阳江/合山', '柳州/白莲', '郑州/新郑', '武汉/天河', '安康', '汉中', '银川/河东', '庆阳/西峰', '西宁/曹家堡', '榆林/榆阳', '长治/王村', '邯郸', '平朔/安太堡', '锡林浩特', '常德/桃花源', '张家界/荷花', '桂林/两江', '梅县/长岗岌', '迪庆/香格里拉', '马公', '成都/双流', '安庆', '常州/奔牛', '南昌/昌北', '阜阳', '赣州/黄金', '九江/庐山', '济南/遥墙', '连云港/白塔埠', '宁波/栎社', '南通/兴东', '黄山/屯溪', '潍坊', '武夷山', '盐城/南洋', '舟山/普陀山', '昌都/邦达', '广汉', '贵阳/龙洞堡', '泸州/蓝田', '铜仁/凤凰', '西昌/青山', '新津', '宜宾/菜坝', '塔城', '伊宁', '长春/龙嘉', '哈尔滨/太平', '吉林/二台子', '大连/土城子', '南苑', '台北松山', '琼海/博鳌', '乌兰察布/集宁', '海西/花土沟', '惠州/平潭', '汉中/城固', '衡阳/南岳', '阿坝/红原', '扬州/泰州', '加格达奇/嘎仙', '遵义/新舟', '台北桃园', '高雄', '花莲', '昆明/长水', '巴彦淖尔/天吉泰', '包头', '金昌/金川', '西双版纳/嘎洒', '普洱/思茅', '大庆/萨尔图', '香港', '澳门', '深圳/南头', '石家庄/正定', '太原/武宿', '南宁/吴圩', '和田', '北京/首都', '大连/周水子', '广州/白云', '上海/虹桥', '天津/滨海', '西安/咸阳', '三亚/凤凰', '呼伦贝尔/海拉尔', '宜昌/三峡', '延安', '赤峰/玉龙', '三沙/永兴', '白城/长安', '库车/龟兹', '景德镇/罗家', '南京/禄口', '井冈山', '兴义/万峰林', '安顺/黄果树', '满洲里/西郊', '运城/张孝', '黎平', '怀化/芷江', '神农架/红坪', '阿拉善左旗/巴彦浩特', '文山/普者黑', '绥芬河/阜宁', '林芝/米林', '新源/那拉提', '百色/巴马', '鄂尔多斯/伊金霍洛', '荔波', '布尔津/喀纳斯', '康定', '漠河/古莲', '白山/长白山', '玉树/巴塘', '天水/麦积山', '济宁/曲阜', '腾冲/驼峰', '中卫/沙坡头', '黔江/武陵山', '伊春/林都', '鸡西/兴凯湖', '合肥/新桥', '毕节/飞雄', '宜春/明月山', '凯里/黄平', '甘南/夏河', '台中清泉岗', '池州/九华山', '稻城/亚丁', '张家口/宁远', '二连浩特/赛乌素', '鞍山/腾鳌', '阿里/昆莎', '唐山/三女河', '固原/六盘山', '吐鲁番/交河', '淮安/涟水', '阿尔山/伊尔施', '博乐/阿拉山口', '日喀则/和平', '张掖/甘州', '揭阳/潮汕', '抚远/东极', '台南', '河池/金城江', '吕梁/大武', '阿拉善右旗/巴丹吉林', '额济纳旗/桃来', '通化/三源浦', '海西/德令哈', '台东丰年', '六盘水/月照', '烟台/蓬莱', '宁蒗/泸沽湖', '三明/沙县', '日照/山字河', '锦州/锦州湾', '忻州/五台山', '营口/兰旗', '临汾/乔李', '石河子/花园', '十堰/武当山', '秦皇岛/北戴河', '果洛/玛沁', '扎兰屯/成吉思汗', '上饶/三清山', '沧源/佤山'];
                var arr2 = ['ZJHK', 'ZGUH', 'ZPBS', 'ZWKL', 'ZHES', 'ZLDH', 'ZBDT', 'ZPMS', 'ZSLQ', 'ZSQZ', 'ZSYW', 'ZYDD', 'ZGWZ', 'ZLJQ', 'ZSLY', 'ZWAK', 'ZYCY', 'ZSDY', 'ZUWX', 'ZUJZ', 'ZBUH', 'ZUZH', 'ZSWX', 'RCBS', 'ZUMY', 'ZSQD', 'ZWKM', 'ZSHC', 'ZPLC', 'ZWHM', 'ZGZJ', 'ZHLY', 'ZLGM', 'ZBUL', 'ZGBH', 'ZGHA', 'ZPDL', 'ZPLJ', 'ZPZT', 'ZSJU', 'ZSWH', 'ZSXZ', 'ZUDX', 'ZULS', 'ZUSN', 'ZWWW', 'ZYCH', 'ZYHE', 'ZYJM', 'ZYMD', 'ZYYJ', 'ZLLL', 'ZSWZ', 'ZHNY', 'ZSAM', 'ZUCK', 'ZUGU', 'ZWFY', 'ZSLO', 'ZUNC', 'ZYTX', 'ZGLD', 'ZHSS', 'ZWCM', 'ZWAT', 'ZHXF', 'ZGLG', 'ZSFZ', 'ZSPD', 'ZSSL', 'ZBHH', 'ZBTL', 'ZYQQ', 'ZWSH', 'ZGSZ', 'ZGSD', 'ZGYJ', 'ZGZH', 'ZHCC', 'ZHHH', 'ZLAK', 'ZLHZ', 'ZLIC', 'ZLQY', 'ZLXN', 'ZLYL', 'ZBCZ', 'ZBHD', 'ZBPS', 'ZBXH', 'ZGCD', 'ZGDY', 'ZGKL', 'ZGMX', 'ZPDQ', 'RCQC', 'ZUUU', 'ZSAQ', 'ZSCG', 'ZSCN', 'ZSFY', 'ZSGZ', 'ZSJJ', 'ZSJN', 'ZSLG', 'ZSNB', 'ZSNT', 'ZSTX', 'ZSWF', 'ZSWY', 'ZSYN', 'ZSZS', 'ZUBD', 'ZUGH', 'ZUGY', 'ZULZ', 'ZUTR', 'ZUXC', 'ZUXJ', 'ZUYB', 'ZWTC', 'ZWYN', 'ZYCC', 'ZYHB', 'ZYJL', 'ZYTT', 'ZBNY', 'RCSS', 'ZJQH', 'ZBUC', 'ZLHX', 'ZGHZ', 'ZLHZ', 'ZGHY', 'ZUHY', 'ZSYA', 'ZYJD', 'ZUZY', 'RCTP', 'RCKH', 'RCYU', 'ZPPP', 'ZBYZ', 'ZBOW', 'ZLJC', 'ZPJH', 'ZPSM', 'ZYDQ', 'VHHH', 'VMMC', 'ZGNT', 'ZBSJ', 'ZBYN', 'ZGNN', 'ZWTN', 'ZBAA', 'ZYTL', 'ZGGG', 'ZSSS', 'ZBTJ', 'ZLXY', 'ZJSY', 'ZBLA', 'ZHYC', 'ZLYA', 'ZBCF', 'ZJYX', 'ZYBA', 'ZWKC', 'ZSJD', 'ZSNJ', 'ZSGS', 'ZUYI', 'ZUAS', 'ZBMZ', 'ZBYC', 'ZUNP', 'ZGCJ', 'ZHSN', 'ZBAL', 'ZPWS', 'ZYSF', 'ZUNZ', 'ZWNL', 'ZGBS', 'ZBDS', 'ZULB', 'ZWKN', 'ZUKD', 'ZYMH', 'ZYBS', 'ZLYS', 'ZLTS', 'ZSJG', 'ZPTC', 'ZLZW', 'ZUQJ', 'ZYLD', 'ZYJX', 'ZSOF', 'ZUBJ', 'ZSYC', 'ZUKJ', 'ZLXH', 'RCMQ', 'ZSJH', 'ZUDC', 'ZBZJ', 'ZBER', 'ZYAS', 'ZUAL', 'ZBSN', 'ZLGY', 'ZWTL', 'ZSSH', 'ZBES', 'ZWBL', 'ZURK', 'ZLZY', 'ZGOW', 'ZYFY', 'RCNN', 'ZGHC', 'ZBLL', 'ZBAR', 'ZBEN', 'ZYTN', 'ZLDL', 'RCFN', 'ZUPS', 'ZSYT', 'ZPNL', 'ZSSM', 'ZSRZ', 'ZYJZ', 'ZBXZ', 'ZYYK', 'ZBLF', 'ZWHZ', 'ZHSY', 'ZBDH', 'ZLGL', 'ZBZL', 'ZSSR', 'ZPCW'];
                for (var i = 0; i < arr1.length; i++) {
                    if (arr1[i] == params.name) {
                        $('#airport').val(arr2[i]);
                    }
                }
            } else if (k == 3) { //延误原因
                var arr = ['时刻原因', '流控原因', '运行保障', '航司原因', '天气原因'];
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == params.name) {
                        $('#delay').val(i);
                    }
                }
            }
            cb();
        });
    },

    drewTwo: function(cdom) {
        var myChart = echarts.init(cdom);

        var geoCoordMap = {
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028]
        };

        var BJData = [
            [{
                name: '北京'
            }, {
                name: '上海',
                value: 95
            }],
            [{
                name: '北京'
            }, {
                name: '广州',
                value: 90
            }],
            [{
                name: '北京'
            }, {
                name: '大连',
                value: 80
            }],
            [{
                name: '北京'
            }, {
                name: '南宁',
                value: 70
            }],
            [{
                name: '北京'
            }, {
                name: '南昌',
                value: 60
            }],
            [{
                name: '北京'
            }, {
                name: '拉萨',
                value: 50
            }],
            [{
                name: '北京'
            }, {
                name: '长春',
                value: 40
            }],
            [{
                name: '北京'
            }, {
                name: '包头',
                value: 30
            }],
            [{
                name: '北京'
            }, {
                name: '重庆',
                value: 20
            }],
            [{
                name: '北京'
            }, {
                name: '常州',
                value: 10
            }]
        ];

        var SHData = [
            [{
                name: '上海'
            }, {
                name: '包头',
                value: 95
            }],
            [{
                name: '上海'
            }, {
                name: '昆明',
                value: 90
            }],
            [{
                name: '上海'
            }, {
                name: '广州',
                value: 80
            }],
            [{
                name: '上海'
            }, {
                name: '郑州',
                value: 70
            }],
            [{
                name: '上海'
            }, {
                name: '长春',
                value: 60
            }],
            [{
                name: '上海'
            }, {
                name: '重庆',
                value: 50
            }],
            [{
                name: '上海'
            }, {
                name: '长沙',
                value: 40
            }],
            [{
                name: '上海'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '上海'
            }, {
                name: '丹东',
                value: 20
            }],
            [{
                name: '上海'
            }, {
                name: '大连',
                value: 10
            }]
        ];

        var GZData = [
            [{
                name: '广州'
            }, {
                name: '福州',
                value: 95
            }],
            [{
                name: '广州'
            }, {
                name: '太原',
                value: 90
            }],
            [{
                name: '广州'
            }, {
                name: '长春',
                value: 80
            }],
            [{
                name: '广州'
            }, {
                name: '重庆',
                value: 70
            }],
            [{
                name: '广州'
            }, {
                name: '西安',
                value: 60
            }],
            [{
                name: '广州'
            }, {
                name: '成都',
                value: 50
            }],
            [{
                name: '广州'
            }, {
                name: '常州',
                value: 40
            }],
            [{
                name: '广州'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '广州'
            }, {
                name: '北海',
                value: 20
            }],
            [{
                name: '广州'
            }, {
                name: '海口',
                value: 10
            }]
        ];

        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var series = [];
        [
            ['北京', BJData],
            ['上海', SHData],
            ['广州', GZData]
        ].forEach(function(item, i) {
            series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function(val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
        });

        option = {
            backgroundColor: 'rgba(13,211,47,0)',
            visualMap: {
                left: 'right',
                top: '65%',
                min: 500000,
                max: 38000000,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'], // 文本，默认为数值文本
                calculable: true
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                textStyle: {
                    color: '#fff'
                },
                selectedMode: 'single'
            },

            grid: {
                top: '0%',
                bottom: '5%',
                left: '1%'
            },
            tooltip: {
                trigger: 'item'
            },

            geo: {
                map: 'china',
                roam: true,
                aspectScale: 0.8,
                zoom: 1.2,
                itemStyle: {
                    normal: {
                        areaColor: '#069bc5',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#0b8ab5'
                    }
                }
            },
            series: series
        }; // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },

    drewThree: function(cData, cXtitle, cdom, cBarWidth, cSymbolSize, cFontSize) {
        var myChart = echarts.init(cdom);
        option = {
            animationDuration: 0,
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                padding: 0,
                top: 0,
                itemHeight: 0,
            },
            calculable: true,
            xAxis: [{
                splitLine: {
                    show: true
                },
                axisLabel: {
                    margin: 18,
                    textStyle: {
                        color: '#2990ac',
                        fontSize: cFontSize,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(230,235,240,0.1)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(230,235,240,0.1)'
                    }
                },
                type: 'category',
                data: cXtitle,

            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    margin: 18,
                    textStyle: {
                        color: '#ccc',
                        fontSize: cFontSize,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(4,203,245,0.1)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#0f4461'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(4,203,245,0.1)'
                    }
                },
                max: 70,
                min: 0,
                splitNumber: 7,
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value} %'
                },
                show: true
            }],
            series: [{
                name: '蒸发量',
                type: 'bar',
                data: [cData[0], null, null, null],
                barWidth: cBarWidth,
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(29,158,233,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(29,158,233,0)'
                            }]
                        )
                    }
                },
                markPoint: {
                    symbolSize: cSymbolSize,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {

                            color: 'rgba(29,158,233,1)'
                        }
                    },
                    data: [{
                        name: '年最高',
                        value: ' ',
                        xAxis: 0,
                        yAxis: 45
                    }]
                }
            }, {
                name: '降水量',
                type: 'bar',
                data: [null, cData[1], null, null],
                barWidth: cBarWidth,
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255,0,107,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(255,0,107,0)'
                            }]
                        )
                    }
                },
                markPoint: {
                    symbolSize: cSymbolSize,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,0,107,1)'

                        }
                    },
                    data: [{
                        name: '年最高',
                        value: ' ',
                        xAxis: 1,
                        yAxis: 37
                    }]
                }
            }, {
                name: 'z2',
                type: 'bar',
                data: [null, null, cData[2], null],
                barWidth: cBarWidth,

                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255,112,0,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(255,112,0,0)'
                            }]
                        )
                    }
                },
                markPoint: {
                    symbolSize: cSymbolSize,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {

                            color: 'rgba(255,112,0,1)'
                        }
                    },
                    data: [{
                        name: '年最高',
                        value: ' ',
                        xAxis: 2,
                        yAxis: 55
                    }]
                }
            }, {
                name: 'z3',
                type: 'bar',
                data: [null, null, null, cData[3]],
                barWidth: cBarWidth,
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(177,219,76,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(177,219,76,0)'
                            }]
                        )
                    }
                },
                markPoint: {
                    symbolSize: cSymbolSize,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(177,219,76,1)'
                        }
                    },
                    data: [{
                        name: '年最高',
                        value: 110.2,
                        xAxis: 3,
                        yAxis: 45
                    }]
                }
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    drewFour: function(cdom) {

        $.ajax({
            url: '../api/v1/route/getMapFlow',
            type: 'POST',
            dataType: 'json',
            data: { "size": "-1", "dateTime": "2017-03-07 10:51:25" },
            contentType: "application/x-www-form-urlencoded;",
            success: function(data) {
                console.log('sussce')
                console.log(data)

            },
            error: function(err) {
                console.warn('die')
            }
        });

        var myChart = echarts.init(cdom);
        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var myData = new Array();
        var mySegmentList = new Array();
        var mapMyself = new Object();
        $.get("src/scripts/json/getBaseRoutexx.json", function(rdata) { //初始將a.html include div#iframe  
            　　　
            var testdata = rdata.data.pointList;
            console.log("rdata");
            console.log(rdata)
            var myData = new Array();
            var testdata55 = {};
            for (var j = 0; j < rdata.data.pointList.length; j++) {
                testdata55[rdata.data.pointList[j].name] = rdata.data.pointList[j].value;
            }
            var geoCoordMap = testdata55;
            var sdata = rdata.data.segmentList;

            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[0].name];
                    var toCoord = geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name,
                            toName: dataItem[1].name,
                            coords: [fromCoord, toCoord]
                        });
                    }
                }
                return res;
            };
            var convertData2 = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            function colorReture(cValue) {
                if (cValue > 0 && cValue < 50) {

                    return ('#ccc')
                } else if (cValue > 50) {
                    return ('#fff');
                }

            }
            var colorr = colorReture(100);

            var color = ['#a6c84c', '#ffa022', '#46bee9'];
            var data = myData;
            var series = [];
            var series = [{
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
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
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbolSize: function(val) {
                    return 1;
                },
                itemStyle: {

                    normal: {
                        //color: 'rgba(2, 166, 253, 0.1)',
                        color: '#0496d2',
                        shadowBlur: 0,
                        shadowColor: '#333'
                    }
                },
                data: testdata
            }];

            [
                ['航线', sdata.splice(1, 1000)]
            ].forEach(function(item, i) {
                series.push({
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    polyline: true,
                    effect: {
                        show: true,
                        constantSpeed: 40,
                        trailLength: 0.8,
                        color: '#ff7000',
                        symbolSize: 0.5,

                    },
                    large: true,
                    smooth: true,
                    smoothness: 0.1,
                    lineStyle: {
                        normal: {
                            color: 'rgba(250, 250, 253, 0.05)',
                            type: 'solid',
                            width: 0.5,
                            opacity: 0.2,
                            curveness: 0
                        }
                    },
                    data: convertData(item[1])
                }, {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'none'],

                    symbolSize: 10,
                    polyline: true,
                    lineStyle: {
                        normal: {
                            color: 'rgba(2, 166, 253, 0.05)',
                            type: 'solid',
                            width: 0.5,
                            opacity: 0.2,
                            curveness: 0
                        }
                    },
                    data: convertData(item[1])
                });
            });

            option = {
                backgroundColor: 'rgba(250,250,250,0)',
                tooltip: {
                    trigger: 'item'
                },

                legend: {
                    orient: 'vertical',
                    top: 'bottom',
                    left: 'right',
                    data: ['北京 Top10', '上海 Top10', '广州 Top10'],
                    textStyle: {
                        color: '#fff'
                    },
                    selectedMode: 'single'
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#0d152f',
                            //                              borderColor: 'rgba(100,149,237,0.2)',
                            borderColor: '#069dc3',
                            //                            borderColor: '#069dc3',
                            borderWidth: 0.5,
                        },
                        emphasis: {
                            areaColor: 'rgba(250,250,250,0)'
                        }
                    }
                },
                series: series
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        });


    },



    drewFive: function(cdom) {
        var myChart = echarts.init(cdom);
        baseRouteArray = {};
        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        var myData = new Array();
        var mySegmentList = new Array();
        var mapMyself = new Object();
        $.get("src/scripts/json/getBaseRoute.json", function(rdata) { //初始將a.html include div#iframe    
            　　　
            console.log("rdata");
            console.log(rdata)
            var myData = new Array();
            for (var i = 0; i < rdata.data.pointList.length; i++) {
                if (rdata.data.pointList[i].longitude != 0.0 && rdata.data.pointList[i].latitude != 0.0) {
                    baseRouteArray[rdata.data.pointList[i].pointId] = rdata.data.pointList[i].pointName;

                    var hdObj = {
                        name: rdata.data.pointList[i].pointName,
                        value: 50
                    }
                    mapMyself[rdata.data.pointList[i].pointName] = [rdata.data.pointList[i].longitude, rdata.data.pointList[i].latitude]
                    myData.push(hdObj)
                }

            }

            for (var j = 0; j < rdata.data.segmentList.length; j++) {
                var segmentListData = [{
                    name: baseRouteArray[rdata.data.segmentList[j].startRPID]
                }, {
                    name: baseRouteArray[rdata.data.segmentList[j].endRPID],
                    value: 95
                }]
                mySegmentList.push(segmentListData);
            }
            console.log('mapMyself')
            console.log(mapMyself)
            console.log('mydata')
            console.log(myData);　
            console.log('mySegmentList')
            console.log(mySegmentList)
            var data = myData;
            var geoCoordMap = mapMyself;
            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            var convertData2 = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[0].name];
                    var toCoord = geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name,
                            toName: dataItem[1].name,
                            coords: [fromCoord, toCoord]
                        });
                    }
                }
                return res;
            };
            var mySeries = [{
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 20;
                },

                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 5,
                        },
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff006b',
                        shadowBlur: 8,
                        shadowColor: '#333'
                    }
                },

            }];
            [
                ['航线', mySegmentList]
            ].forEach(function(item, i) {
                mySeries.push({
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 20,
                    symbol: ['none', 'none'],
                    symbolSize: 10,

                    lineStyle: {
                        normal: {
                            color: '#ff006b',
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2,
                        },

                    },
                    data: convertData2(item[1])
                });
            });

            option = {
                backgroundColor: 'rgba(250,250,250,0)',
                visualMap: {
                    left: 'right',
                    top: '65%',
                    min: 50,
                    max: 2000,
                    textStyle: {
                        color: '#05c0e9'
                    },
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    },
                    text: ['High', 'Low'], // 文本，默认为数值文本
                    calculable: true
                },
                tooltip: {
                    trigger: 'item'
                },
                geo: {
                    map: 'china',
                    aspectScale: 0.9,
                    zoom: 1.2,
                    //                      label: {
                    //                          emphasis: {
                    //                              show: true
                    //                          }
                    //                      },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#0699c9',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: 'rgba(250,250,250,0)'
                        }
                    }
                },
                series: mySeries
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        });

    },

};

module.exports = echartsMyself;
