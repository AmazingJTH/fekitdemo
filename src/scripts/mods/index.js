var $=require('../libs/jquery.js');

module.exports=function(){
	$.ajax({
		url:"/api/getindex",
		type:"get",
		data:{
			
		},
		success:function(res){
			var str="";
			$.each(res.data,function(index,value){
				str+="<li>"+value+"</li>";
			});
			$(".body ul").html(str);
		},
		dataType:"json"
	})
}
