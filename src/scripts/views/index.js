var $=require('../utils/jquery-3.1.1.min.js');
var common = require('../utils/common.util.js');
var str   = require('../tpls/index/body.string');
var left  = require('../tpls/index/leftIndex.string');
var right = require('../tpls/index/rightIndex.string');
require('../modules/index/anmination.js');

$(function(){
	common.renderBody($('body'), str);
	common.append($('.centerBox'), left);
	common.append($('.centerBox'), right);
	var dcpDom=document.getElementById('dcpText');
//	alert(dcpDom)
//	dcpDom.onclick=function(){
//		alert(2)
//	}
	
})

