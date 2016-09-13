var $=require('./libs/jquery.js');

var common=require('./utils/common.util.js');

var strheader=require('./tpls/header.string');
var strbody=require('./tpls/index.body.string');
var strfooter=require('./tpls/footer.string');

var list=require('./mods/index.js');

$(function(){
	common.load(strheader+strbody+strfooter);
	list();
});

