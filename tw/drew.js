	window.onload = function() {
		// 基于准备好的dom，初始化echarts图表
		var myinitx = $('#scrollbar').css('left');
		var arr = myinitx.split("px");
		var myinitxValue = arr[0] * 1;
		var copyinitxValue = myinitxValue;
		//console.log('myinitx')
		//console.log(myinitxValue)
		//	
		var initHk = function() {
			//alert('initHk');
			var nDate = new Date();
			var nHours = nDate.getHours();
			var nMinutes = nDate.getMinutes();
			var nSeconds = nDate.getSeconds();
			var current = nHours * 60 * 60 + nMinutes * 60 + nSeconds;
			var bl = current / 86400;
			var leftValue = bl * 10 - 0.215 + 'rem';
			if(nMinutes < 10) {
				nMinutes = '0' + nMinutes;
			}
			if(nSeconds < 10) {
				nSeconds = '0' + nSeconds;
			}
			var timrString = nHours + ':' + nMinutes + ':' + nSeconds;
			$(".hk1").css("left", leftValue);
			$('.timeHKtimt').html(timrString)
				//alert(leftValue);
		}

		initHk();
		var timer;
		clearInterval(timer);
		timer = setInterval(function() {
			//alert('initHk');
			var nDate = new Date();
			var nHours = nDate.getHours();
			var nMinutes = nDate.getMinutes();
			var nSeconds = nDate.getSeconds();
			var current = nHours * 60 * 60 + nMinutes * 60 + nSeconds;
			var bl = current / 86400;
			var leftValue = bl * 10 - 0.215 + 'rem';
			if(nMinutes < 10) {
				nMinutes = '0' + nMinutes;
			}
			if(nSeconds < 10) {
				nSeconds = '0' + nSeconds;
			}
			var timrString = nHours + ':' + nMinutes + ':' + nSeconds;
			$(".hk1").css("left", leftValue);
			$('.timeHKtimt').html(timrString)
				//alert(leftValue);
		}, 1000)

		var timec = gettime();

		function drewAll(ctime) {
			var reList0 = [];
			var reList1 = [];
			var reList2 = [];
			var fxObj = {};
			var geoCoord = null;

			function getGeoCoord(name) {
				var coord;
				try {
					coord = geoCoord[name];

				} catch(e) {}

				return coord;
			}

			function drew() {
				var myChart = echarts.init(document.getElementById('mapChina'));

				myChart.showLoading({
					textStyle: {
						color: '#0698ca'
					},
					effectOption: {
						backgroundColor: 'rgba(0, 0, 0, 0)'
					}
				});
				var pointdata = [];
				option = {
					backgroundColor: 'rgba(250,250,250,0)',

					tooltip: {
						trigger: 'item',
						formatter: '{b}'
					},

					title: {
						text: '交通流量',
						x: 'center',
						y: '25',
						textStyle: {
							color: '#0596d1',
							fontSize: 32,
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
							aspectScale: 0.8,
							zoom: 1.2,
							left: '18%',
							top: '50%',
							roam: true,
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
						}, {
							name: '北京 Top10',
							type: 'map',
							mapType: 'china',
							data: [],

							markPoint: {
								tooltip: {
									padding: 10,
									backgroundColor: '#222',
									borderColor: '#777',
									borderWidth: 1,
									enterable: true,
									formatter: function(obj) {
										//console.log('%%%%%%')
										//console.log(obj)
										//console.log('obj.data.value')
										//console.log(obj.data.geoCoord)
										var value = obj.data.geoCoord;
										return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
											obj.data.name +
											'</div>' +
											'经度' + '：' + value[0] + '<br>' +
											'纬度' + '：' + value[1] + '<br>';

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
							},

							markLine: {
								effect: {
									color: 'rgba(204, 246, 255, 0.05)', //三色
									show: true,
									period: 40
								},
								tooltip: {
									padding: 10,
									backgroundColor: '#222',
									borderColor: '#777',
									borderWidth: 1,
									enterable: true,
									formatter: function(obj) {
										console.log('提示框1')
										console.log(obj)
										console.log('提示框obj1')
										var value = obj.data.geoCoord;
										return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
											obj.data.name +
											'</div>' +
											obj.series.markLine.data[obj.dataIndex][1].massage[1].massage + '<br>' +

											'繁忙程度' + '：' + obj.series.markLine.data[obj.dataIndex][1].massage[1].fmd + '<br>'+
											obj.series.markLine.data[obj.dataIndex][1].massage[1].massagefx + '<br>' +

											'繁忙程度' + '：' + obj.series.markLine.data[obj.dataIndex][1].massage[1].fmdfx + '<br>';
									}
								},
								smooth: true,
								smoothness: 0,
								symbol: ['none', 'none'],
								itemStyle: {
									normal: {
										lineStyle: {

											color: 'rgba(2, 166, 253, 0.1)',
											type: 'solid',
											width: 0.5,
											opacity: 0.2
										},
										formatter: '{b}',
										position: 'right',
										show: true
									},

									emphasis: {
										show: true
									}
								},
								data: []
							},

						}, {
							name: '北京 Top10',
							type: 'map',
							mapType: 'china',
							data: [],
							markLine: {
								effect: {
									color: 'rgba(255,112,0,0.5)', //三色黄色
									show: true,
									period: 40
								},
								smooth: true,
								smoothness: 0,
								tooltip: {
									padding: 10,
									backgroundColor: '#222',
									borderColor: '#777',
									borderWidth: 1,
									enterable: true,
									formatter: function(obj) {
										console.log('提示框2')
										console.log(obj)
										console.log('提示框obj2')
										var value = obj.data.geoCoord;
										return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
											obj.data.name +
											'</div>' +
											obj.series.markLine.data[obj.dataIndex][1].massage[1].massage + '<br>' +

											'繁忙程度' + '：' + obj.series.markLine.data[obj.dataIndex][1].massage[1].fmd + '<br>'+
											obj.series.markLine.data[obj.dataIndex][1].massage[1].massagefx + '<br>' +

											'繁忙程度' + '：' + obj.series.markLine.data[obj.dataIndex][1].massage[1].fmdfx + '<br>';
									}
								},
								smooth: true,
								smoothness: 0,
								symbol: ['none', 'none'],
								itemStyle: {
									normal: {
										lineStyle: {

											color: 'rgba(204, 246, 255, 0.05)',
											type: 'solid',
											width: 0.5,
											opacity: 0.2
										},
										formatter: '{b}',
										position: 'right',
										show: true
									},

									emphasis: {
										show: true
									}
								},
								data: []
							}

						}, {
							name: '北京 Top10',
							type: 'map',
							mapType: 'china',
							data: [],
							markLine: {
								effect: {
									color: 'rgba(255,0,107,0.5)', //三色粉色
									show: true,
									period: 40
								},
								tooltip: {
									padding: 10,
									backgroundColor: '#222',
									borderColor: '#777',
									borderWidth: 1,
									enterable: true,
									formatter: function(obj) {
										console.log('提示框3')
										console.log(obj)
										console.log('提示框obj3')
										var value = obj.data.geoCoord;
										return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
											obj.data.name +
											'</div>' +
											obj.series.markLine.data[obj.dataIndex][1].massage[1].massage + '<br>' +

											'繁忙程度' + '：' + obj.series.markLine.data[obj.dataIndex][1].massage[1].fmd + '<br>'+
											obj.series.markLine.data[obj.dataIndex][1].massage[1].massagefx + '<br>' +

											'繁忙程度' + '：' + obj.series.markLine.data[obj.dataIndex][1].massage[1].fmdfx + '<br>';
									}
								},
								smooth: true,
								smoothness: 0,
								symbol: ['none', 'none'],
								itemStyle: {
									normal: {
										lineStyle: {

											color: 'rgba(204, 246, 255, 0.05)',
											type: 'solid',
											width: 0.5,
											opacity: 0.2
										},
										formatter: '{b}',
										position: 'right',
										show: true
									},

									emphasis: {
										show: true
									}
								},
								data: []
							}

						}

					]
				};

				$.ajax({
					url: "../api/v1/route/getBaseRoute",
					dataType: 'json',
					success: function(data) {
						//console.log(data.data.segmentList.length)
						//console.log(data.data)
						geoCoord = data.data['pointList'];
						var flag = 0;
						var copylineData = data.data['segmentList'];
						//						option.series[1].markLine.data = data.data['segmentList'].sort(function(a, b) {
						//							return b.num - a.num
						//						}).slice(0, 1593).map(function(line) {
						//							flag++;
						//
						//							return [{
						//								geoCoord: getGeoCoord(line[0].name)
						//							}, {
						//								geoCoord: getGeoCoord(line[1].name)
						//							}]
						//						});
						for(var j = 0; j < data.data.segmentList.length; j++) {
							pointdata.push(data.data.segmentList[j][0]);
							pointdata.push(data.data.segmentList[j][1]);
						}
						option.series[1].markPoint.data = pointdata.map(function(point) {
							return {
								name: point.name,
								geoCoord: getGeoCoord(point.name)
							}
						});
						var jsonData = {
								"size": "-1",
								"dateTime": ctime,
							}
							//console.log('jsonData')
							//console.log(jsonData)

						$.ajax({
							url: "../api/v1/route/getMapFlow",
							type: "post",
							data: jsonData,
							complete: function(request, textStatus) {

							},
							success: function(data, textStatus) {

								var getData = JSON.parse(data);
								console.log(getData);
								for(var k = 0; k < getData.data.segmentList.length; k++) {
									var xbfx = getData.data.segmentList[k][0].name + getData.data.segmentList[k][1].name;
									fxObj[xbfx] = getData.data.segmentList[k][1].value;
								}
								for(var k = 0; k < getData.data.segmentList.length; k++) {

									if(getData.data.segmentList[k][1].value >= 0.0 && getData.data.segmentList[k][1].value < 0.1) {
										var fxcsstring = getData.data.segmentList[k][1].name + getData.data.segmentList[k][0].name;
										if(fxObj[fxcsstring] !== undefined) {
											var fxValue = fxObj[fxcsstring];
											var reList1Obj = [{
												"name": getData.data.segmentList[k][0].name
											}, {
												"name": getData.data.segmentList[k][1].name,
												'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
												'fmd': getData.data.segmentList[k][1].value,
												'massagefx': getData.data.segmentList[k][1].name + '→' + getData.data.segmentList[k][0].name,
												'fmdfx': fxValue,
											}]
											reList1.push(reList1Obj);

										} else {
											var reList1Obj = [{
												"name": getData.data.segmentList[k][0].name
											}, {
												"name": getData.data.segmentList[k][1].name,
												'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
												'fmd': getData.data.segmentList[k][1].value,
												'massagefx': getData.data.segmentList[k][1].name + '→' + getData.data.segmentList[k][0].name,
												'fmdfx': '暂无数据',
											}]
											reList1.push(reList1Obj);
										}

									} else if(getData.data.segmentList[k][1].value >= 0.1 && getData.data.segmentList[k][1].value < 0.8) {
										
										var fxcsstring = getData.data.segmentList[k][1].name + getData.data.segmentList[k][0].name;
										if(fxObj[fxcsstring] !== undefined) {
											var fxValue = fxObj[fxcsstring];
											var reList0Obj = [{
												"name": getData.data.segmentList[k][0].name
											}, {
												"name": getData.data.segmentList[k][1].name,
												'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
												'massagefx': getData.data.segmentList[k][1].name + '→' + getData.data.segmentList[k][0].name,
												'fmd': getData.data.segmentList[k][1].value,
												'fmdfx': fxValue,
											}]
											reList0.push(reList0Obj);

										} else {
											var reList0Obj = [{
												"name": getData.data.segmentList[k][0].name
											}, {
												"name": getData.data.segmentList[k][1].name,
												'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
												'massagefx': getData.data.segmentList[k][1].name + '→' + getData.data.segmentList[k][0].name,
												'fmd': getData.data.segmentList[k][1].value,
												'fmdfx': '暂无数据',
											}]
											reList0.push(reList0Obj);
										}

	
//										
//										var reList0Obj = [{
//											"name": getData.data.segmentList[k][0].name
//										}, {
//											"name": getData.data.segmentList[k][1].name,
//											'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
//											'fmd': getData.data.segmentList[k][1].value
//										}]
//										reList0.push(reList0Obj);

									} else if(getData.data.segmentList[k][1].value >= 0.8) {
										
										var fxcsstring = getData.data.segmentList[k][1].name + getData.data.segmentList[k][0].name;
										if(fxObj[fxcsstring] !== undefined) {
											var fxValue = fxObj[fxcsstring];
											var reList1Obj = [{
												"name": getData.data.segmentList[k][0].name
											}, {
												"name": getData.data.segmentList[k][1].name,
												'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
												'massagefx': getData.data.segmentList[k][1].name + '→' + getData.data.segmentList[k][0].name,
												'fmd': getData.data.segmentList[k][1].value,
												'fmdfx': fxValue,
											}]
											reList2.push(reList1Obj);

										} else {
											var reList1Obj = [{
												"name": getData.data.segmentList[k][0].name
											}, {
												"name": getData.data.segmentList[k][1].name,
												'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
												'massagefx': getData.data.segmentList[k][1].name + '→' + getData.data.segmentList[k][0].name,
												'fmd': getData.data.segmentList[k][1].value,
												'fmdfx': '暂无数据',
											}]
											reList2.push(reList1Obj);
										}

//										var reList1Obj = [{
//											"name": getData.data.segmentList[k][0].name
//										}, {
//											"name": getData.data.segmentList[k][1].name,
//											'massage': getData.data.segmentList[k][0].name + '→' + getData.data.segmentList[k][1].name,
//											'fmd': getData.data.segmentList[k][1].value
//										}]
//										reList2.push(reList1Obj);
										
										

									}

								}

								option.series[2].markLine.data = reList0.sort(function(a, b) {
									return b.num - a.num
								}).slice(0, reList1.length / 2).map(function(line) {

									return [{
										geoCoord: getGeoCoord(line[0].name)
									}, {
										geoCoord: getGeoCoord(line[1].name),
										'massage': line
									}]
								});

								option.series[1].markLine.data = reList1.sort(function(a, b) {
									return b.num - a.num
								}).slice(0, reList1.length / 2).map(function(line) {

									return [{
										geoCoord: getGeoCoord(line[0].name)
									}, {
										geoCoord: getGeoCoord(line[1].name),
										'massage': line
									}]
								});

								option.series[3].markLine.data = reList2.sort(function(a, b) {
									return b.num - a.num
								}).slice(0, reList2.length / 2).map(function(line) {

									return [{
										geoCoord: getGeoCoord(line[0].name)
									}, {
										geoCoord: getGeoCoord(line[1].name),
										'massage': line
									}]
								});

								//console.log(option.series[1].markPoint.data)
								//alert('startcanvas')
								//setTimeout(//console.log(1), 0)
								myChart.hideLoading();
								myChart.setOption(option, true);

							}

						});

					}

				});

			}
			drew()

		}

		drewAll(timec)

		function gettime() {
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

			$(scrollBarId).css('left', scale * current + 'rem'); // 当前时间滚动条的位置
			//	$('#time').append('<div class="hk1"; style="z-index: 999; position: absolute;left:' + scale * current + 'rem; width: 0.43rem; height: 0.38rem;"></div>'); // 当前时间滚动条的位置

			return(finalTime)
		}

		// 滚动条 时间轴
		var scrollBarId = document.getElementById('scrollbar');
		var parentWidth = $(scrollBarId).parent().width();
		var scale = 10 / 86400; // 10 当前父元素宽度 86400一天的秒数

		function currentPosition() {
			var finalTime = gettime()
				// TODO: echarts 重新加载操作

			//drewAll(finalTime)
			setTimeout(currentPosition, 5000);
		}

		//setTimeout(currentPosition, 1);

		drag($(scrollBarId)[0], $('#mapChina'));

		function drag(drageEle, moveEle) {
			var parentDomHeight = $(moveEle.parent()).height();
			var moveDomHeight = moveEle.height();
			var oBox = drageEle;
			oBox.onmousedown = down;
			var disX = null;
			var x = null

			function down(e) {

				e = e || window.event;
				x = e.clientX;
				disX = e.clientX - this.offsetLeft;
				if(this.setCapture) {
					this.setCapture();
					oBox.onmousemove = move;
					oBox.onmouseup = up;
				} else {
					var _this = this;
					document.onmousemove = function() {
						move.call(_this)
					};
					document.onmouseup = function() {
						up.call(_this)
					};
					e.preventDefault();
				}
			}

			function move(e) {
				e = e || window.event;
				var L = e.clientX - disX;
				if(L <= 20 || L >= 900) {
					return;
				}
				this.style.left = L + 'px';
			}

			function up(e) {
				//alert('up')
				e = e || window.event;
				var offset = e.clientX - x;

				var offsetRem = offset / 100; // px 转换成 rem
				var offsetSecond = parseInt(offsetRem / scale, 10); // 获取偏离秒数
				//myinitxValue=offset+myinitxValue;
				var myoffset = e.clientX - 454.427;
				var myoffsetRem = myoffset / 100; // px 转换成 rem
				if(myoffsetRem > 5) {
					var bl2 = (myoffsetRem - 5) / 10;
				} else {
					var bl2 = (5 - myoffsetRem) / 10;
				}

				var myoffsetSecond = parseInt(bl2 * 12 * 3600); // 获取偏离秒数

				var absoffsetSecond = Math.abs(myoffsetSecond);
				if(myoffsetSecond > 3600) {
					var offH = Math.floor(myoffsetSecond / 3600)
					var offM = Math.floor((myoffsetSecond - 3600 * offH) / 60)
					var offS = (myoffsetSecond - 3600 * offH) % 60
				} else {
					var offH = '00'
					var offM = Math.floor(myoffsetSecond / 60);
					var offS = offsetSecond % 60
				}

				if(offM < 10) {
					offM = '0' + offM;
				}
				if(offS < 10) {
					offS = '0' + offS;
				}
				if(myoffsetRem > 5) {
					var pylstring = offH + ':' + offM + ':' + offS;
				} else {
					var pylstring = '-' + offH + ':' + offM + ':' + offS;
				}
				$('.pyl').html(pylstring)
				var nDate = new Date();
				var nYear = nDate.getFullYear();
				var nMonth = nDate.getMonth() + 1;
				var nDay = nDate.getDate();
				var nHours = nDate.getHours();
				var nMinutes = nDate.getMinutes();
				var nSeconds = nDate.getSeconds();
				var currentTime = nHours * 60 * 60 + nMinutes * 60 + nSeconds;
				var finalSeconds = currentTime + offsetSecond; // 获取最终秒数 传递到echarts重新渲染
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

				// TODO: echarts重新渲染操作

				drewAll(finalTime)

				if(this.releaseCapture) {
					this.releaseCapture();
					this.onmousemove = null;
					this.onmouseup = null;
				} else {
					document.onmousemove = null;
					document.onmouseup = null;
				}
			}
		}

		//时间选择器
		function formatTime() {
			var date = new Date;
			var y = date.getFullYear();
			var m = date.getMonth() + 1;
			var d = date.getDate();
			// m = m < 10 ? ("0" + m) : m;
			// d = d < 10 ? ("0" + d) : d;
			//console.log(y, m, d)
			return y + '-' + m + '-' + d;
		}

		var ctime = formatTime();
		$('#timer').val(ctime);
		document.getElementById('timer').onfocus = function() {
			WdatePicker({
				dateFmt: 'yyyy-MM-dd',
				readOnly: true,
				maxDate: '%y-%M-%d',
				onpicking: function(dp) {
					//在这里添加事件
					//console.log(dp)
					//console.log($dp.cal.date);
					var $time = $('#timer').val();
					//alert($time)

					var nDate = new Date();
					var nDay = $dp.cal.date.d;
					var nHours = $dp.cal.date.H;
					var nMinutes = $dp.cal.date.m;
					var nSeconds = $dp.cal.date.s;
					var nYear = $dp.cal.date.y;
					var nMonth = $dp.cal.date.M;
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

					$(scrollBarId).css('left', scale * current + 'rem'); // 当前时间滚动条的位置
					//$('#time').html('<div class="hk1"; style="z-index: 0; position: absolute;left:' + scale * current + 'rem; width: 0.43rem; height: 0.38rem;"></div>'); // 当前时间滚动条的位置
					drewAll(finalTime)
				}
			})
		}

	}