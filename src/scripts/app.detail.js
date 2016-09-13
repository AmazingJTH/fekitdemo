var $=require('./libs/jquery.js');

var common=require('./utils/common.util.js');

var strheader=require('./tpls/header.string');
var strdetailbody=require('./tpls/detail.body.string');
var strfooter=require('./tpls/footer.string');


$(function(){
	common.load(strheader+strdetailbody+strfooter);
});
