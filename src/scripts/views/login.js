var $ = require('../utils/jquery-3.1.1.min.js');
var common = require('../utils/common.util.js');
var body = require('../tpls/login/login.string');
//var common = require('../utils/input.js');
$(function() {
	common.renderBody($('body'), body);
	$('#earth').mousemove(function() {
		$("#earth").removeClass('earthA')
		$("#earth").animate({
			left: '+=20px',
			
			opacity:'0.5'
			
		},1000);
		$("#earth").animate({
			right: '+=20px',
			
			opacity:'1'
		},1000);
		
	})
	$('#earth').mouseout(function() {
		$("#earth").stop(true);
		$("#earth").addClass('earthA');
		$("#earth").animate({
			opacity:'1',
			left:'0',
			right:'0',
			top:'0',
			bottom:'0',
			position:'absoulte'
		},10);
		
	})
	
	
	
		
	
})