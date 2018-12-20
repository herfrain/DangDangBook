function $(id){
	return document.getElementById(id);
}


function oldPwdOnblur(obj){
	var oldPwdValue=obj.value;
	var txt=new RegExp(/^\w{6,12}$/);
	if(oldPwdValue == ""){
		obj.placeholder="Current Password";
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
		obj.placeholder="New Password";
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
		obj.placeholder="Confirm New Password";
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
