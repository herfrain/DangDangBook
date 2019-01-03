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
	var txt =new RegExp(/^\w{6,12}$/);
	if(txt.test(userName)){//txt对象通过test函数匹配nameValue
//		/\w 0-9a-zA-Z ^以……开头   ￥以……结尾    \w{6,12} 6-12个字符/
//		正确的 设置友好提示为正确
		$("errUserName").innerHTML="用户名符合要求"; //js控制样式的切换 html css js
		$("errUserName").className="correctSpan";
		return true;
	}else if(userName.length==0){
		$("errUserName").innerHTML="用户名不能为空";
		$("errUserName").className="errorSpan";
		return false;
	}else{
		$("errUserName").innerHTML="用户名不符合要求";
		$("errUserName").className="errorSpan";
		return false;
	}
}
function passwordOnblur(obj){//传入this对象
//	var name=$("name");
//	name.placeholder="请输入用户名";
	obj.placeholder="请输入密码";
	var password=obj.value.trim();
	var txt =new RegExp(/^\w{6,18}$/);
	if(txt.test(password)){//txt对象通过test函数匹配value值
		$("errPassword").innerHTML="密码符合要求"; //js控制样式的切换 html css js
		$("errPassword").className="correctSpan";
		return true;
	}else if(password.length==0){
		$("errPassword").innerHTML="密码不能为空";
		$("errPassword").className="errorSpan";
		return false;
	}else{
		$("errPassword").innerHTML="密码不符合要求";
		$("errPassword").className="errorSpan";
		return false;
	}
}
function emailOnblur(obj){//传入this对象
//	var name=$("name");
//	name.placeholder="请输入用户名";
	obj.placeholder="请输入邮箱地址";
	var emailAddress=obj.value.trim();
	var txt =new RegExp(/^[a-zA-Z0-9\_\.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.[a-zA-Z0-9]{2,6}$/);
/*
 *邮箱的正则表达式满足规则：
 * 1.@之前必须有内容，且只能是字母(大小写均可)、数字以及下划线，减号，以及.
 * 2.@和最后一个.之间必须有内容而且只能是字母(大小写均可)、数字、减号（-），以及（.），且两个点之间不能挨着
 * 3.最后一个点（.）之后必须有内容而且内容只能是字母（大小写均可）、数字且长度为2-6字符
 * */
	if(txt.test(emailAddress)){//txt对象通过test函数匹配nameValue
		$("showError").innerHTML="合法邮箱"; //js控制样式的切换 html css js
		$("showError").className="correctSpan";
		return true;
	}else if(emailAddress.length==0){
		$("showError").innerHTML="邮箱地址不能为空";
		$("showError").className="errorSpan";
		return false;
	}else{
		$("showError").innerHTML="非法邮箱";
		$("showError").className="errorSpan";
		return false;
	}
}
function phoneNumberOnblur(obj){//传入this对象
//	var name=$("name");
//	name.placeholder="请输入用户名";
	
	obj.placeholder="请输入手机号码";
	var phoneNumber=obj.value.trim();
	var txt =new RegExp(/^1[0-9]{10}$/);
/*手机号匹配规则：11位数字，开头必须为1*/
	if(txt.test(phoneNumber)){//txt对象通过test函数匹配nameValue
		$("errPhoneNumber").innerHTML="合法手机号码"; //js控制样式的切换 html css js
		$("errPhoneNumber").className="correctSpan";
		return true;
	}else if(phoneNumber.length==0){
		$("errPhoneNumber").innerHTML="手机号码不能为空";
		$("errPhoneNumber").className="errorSpan";
		return false;	
	}else{
		$("errPhoneNumber").innerHTML="非法手机号码";
		$("errPhoneNumber").className="errorSpan";
		return false;
	}
}
function onSubmit(){/*这个函数返回true就是提交，返回false就是不提交*/
	//把所有判断全部执行一遍，其中一个不符合就不允许提交
	if(userNameOnblur($('userName'))&passwordOnblur($('password'))&emailOnblur($('email'))&phoneNumberOnblur($('phoneNumber'))){
		return true;
	}
	return false;
	
}