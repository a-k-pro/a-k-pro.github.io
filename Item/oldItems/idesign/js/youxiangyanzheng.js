$(function(){
	var txemail;
	$(".yxyzm").click(function(){
		var txemail= $("#email").val();
		console.log(txemail);
		$.ajax({
			url:"http://localhost:8020/demo_20200706/email",
			type:"get",
			async:true,
			xhrFields:{
			withCredentials:true
						},
			data:{
				"email":txemail,
			},
			success:function(res){
				x = JSON.parse(res);
				if(x.message=="发送验证码成功"){
					console.log("1");
					alert("发送成功");
				}
				else{
					alert("发送失败");
				}
			},
			error:function(e){
				console.log(e)
			}
			})
	})
	var yxzhm;
	$(".yzyxyzm").click(function(){
		var yzmemail =$(".jtyxyzm").val();
		console.log(yzmemail);
		$.ajax({
			url:"http://localhost:8020/demo_20200706/emailverif",
			type:"get",
			async:true,
			xhrFields:{
			withCredentials:true
						},
			data:{
				"usercode":yzmemail,
			},
			success:function(res){
				console.log(res);
				if(x.message=="发送验证码成功"){
					alert("验证成功，可修改个人信息");
					return yxzhm = 1;
					$("#email").val(txemail);
				}
				else{
					alert("验证失败，不可修改个人信息");
				}
				
			},
			error:function(e){
				console.log(e);
				alert("失败");
			}
		})
	})
})