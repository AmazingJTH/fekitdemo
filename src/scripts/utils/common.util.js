var $=require('../libs/jquery.js');

var Common={
	load:function(str){
		$("body").prepend(str);
	}
}

module.exports=Common;
