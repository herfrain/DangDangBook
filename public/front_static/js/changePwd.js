function $(id){
	return document.getElementById(id);
}


function oldPwdOnblur(obj){
	var oldPwdValue=obj.value;
	var txt=new RegExp(/^\w{6,12}$/);
	if(oldPwdValue == ""){
		obj.placeholder="请输入当前密码";
	}
	else if(!txt.test(oldPwdValue)){
		$("errName").innerHTML="密码格式错误";
		$("errName").className="wrongSpan";
		return false;
	}else{
		$("errName").innerHTML="";
		$("errName").className="correctSpan";
		return true;
	}
}

function newPwdOnblur(obj){
	var newPwdValue=obj.value;
	var txt=new RegExp(/^\w{6,12}$/);
	if(newPwdValue == ""){
		obj.placeholder="请输入新密码";
	}
	else if(!txt.test(newPwdValue)){
		$("errName").innerHTML="密码格式错误";
		$("errName").className="wrongSpan";
		return false;
	}else{
		$("errName").innerHTML="";
		$("errName").className="correctSpan";
		return true;
	}
}

function newPwdsOnblur(obj){
	var newPwdsValue=obj.value;
	var txt=$("newPwd").value;
	if(newPwdsValue == ""){
		obj.placeholder="请确认新密码";
	}
	else if(!(newPwdsValue == txt)){
		$("errName").innerHTML="两次密码不一致";
		$("errName").className="wrongSpan";
		return false;
	}else{
		$("errName").innerHTML="";
		$("errName").className="correctSpan";
		return true;
	}
}

function submitClick(){
	if(oldPwdOnblur($("oldPwd")) && newPwdOnblur($("newPwd"))){
		return true;
	}else{
		return false;
	}
}
