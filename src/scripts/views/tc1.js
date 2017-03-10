var $ = require('../utils/jquery-3.1.1.min.js');
var common = require('../utils/common.util.js');
var tc1Body = require('../tpls/tc/tc1.string');
$(function() {
	common.renderBody($('body'), tc1Body);
});