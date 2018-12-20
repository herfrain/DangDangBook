function $(id){//依据id获取element的对象
	return document.getElementById(id);
}
function $getValue(id){//依据id获取element对象中的value值
	return document.getElementById(id).value;
}
function userNameOnblur(obj){//传入this对象
//	var name=$("name");
//	name.placeholder="请输入用户名";
	obj.placeholder="请输入用户名";
	var userName=obj.value.trim();
	if(userName.length==0){
		$("showError").innerHTML="用户名不能为空";
		return false;
	}
	$("showError").innerHTML="";
	return true;
}
function passwordOnblur(obj){//传入this对象
//	var name=$("name");
//	name.placeholder="请输入用户名";
	obj.placeholder="请输入密码";
	var password=obj.value.trim();
	if(password.length==0){
		$("showError").innerHTML="密码不能为空";
		return false;
	}
	$("showError").innerHTML="";
	return true;
}

function onSubmit(){
	if(userNameOnblur($("loginUserName"))&passwordOnblur($("loginPassword"))){
		return true;
	}
	return false;
}
