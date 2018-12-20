function $(id){
	return document.getElementById(id);
}

function $V(id){
	return document.getElementById(id).value;
}

function nameOnblur(obj){
	var nameValue=obj.value;
	var txt=new RegExp(/^\w{6,12}|[\u4e00-\u9fa5]{2,10}$/);
	if(nameValue == ""){
		obj.placeholder="收件人（6-12位字符）";
	}
	else if(!txt.test(nameValue)){
		$("errName").innerHTML="收件人命名错误";
		$("errName").className="wrongSpan";
		return false;
	}else{
		$("errName").innerHTML="";
		$("errName").className="correctSpan";
		return true;
	}
}

function addressOnblur(obj){
	obj.placeholder="地址";
}

function phoneOnblur(obj){
	var phoneValue=obj.value;
	var txt=new RegExp(/^1\d{10}$/);
	if(phoneValue == ""){
		obj.placeholder="号码（11位号码)";
	}
	else if(!txt.test(phoneValue)){
		$("errName").innerHTML="号码格式错误";
		$("errName").className="wrongSpan";
		return false;
	}else{
		$("errName").innerHTML="";
		$("errName").className="correctSpan";
		return true;
	}
}

function submitClick(){
	if(nameOnblur($("name")) && phoneOnblur($("phone"))){
		return true;
	}else{
		return false;
	}
}
