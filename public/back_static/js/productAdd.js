function $(id){//依据id获取element的对象
	return document.getElementById(id);
}
function $getValue(id){//依据id获取element对象中的value值
	return document.getElementById(id).value;
}
function browser(obj) {
	var ie = navigator.appName == "Microsoft Internet Explorer" ? true : false;
	var file=obj.nextElementSibling;
	if(ie) {
		file.click();
	} else {
		var a = document.createEvent("MouseEvents"); //FF的处理 
		a.initEvent("click", true, true);
		file.dispatchEvent(a);
	}
	
}

function fileChange(obj){
	pathShow=obj.nextElementSibling;
	if(obj.value==""){
		$("report").innerHTML="图片资源不能为空";
		return false;
	}
	pathShow.innerHTML=obj.value;
	return true;
}

function bookNumberOnblur(obj){
	obj.placeholder="图书编号";
	var bookNumber=obj.value.trim();
	var txt =new RegExp(/^9787\d{9}$/);
	if(!txt.test(bookNumber)){//txt对象通过test函数匹配nameValue
//		/\w 0-9a-zA-Z ^以……开头   ￥以……结尾    \w{6,12} 6-12个字符/
//		正确的 设置友好提示为正确
		$("report").innerHTML="图书编号不符合要求"; //js控制样式的切换 html css js
		return false;
	}else if(bookNumber==""){
		$("report").innerHTML="图书编号不能为空"; //js控制样式的切换 html css js
		return false;
	}
	return true;
}

function bookNameOnblur(obj){
	obj.placeholder="书名";
	var bookName=obj.value.trim();
	if(bookName==null || bookName==""){
		$("report").innerHTML="书名不能为空"; //js控制样式的切换 html css js
		return false;
	}
	$("report").innerHTML="";
	return true;
}

function bookAuthorOnblur(obj){
	obj.placeholder="作者";
	var bookAuthor=obj.value.trim();
	if(bookAuthor==null || bookAuthor==""){
		$("report").innerHTML="作者不能为空"; //js控制样式的切换 html css js
		return false;
	}
	$("report").innerHTML="";
	return true;
}

function bookPriceOnblur(obj){
	obj.placeholder="价格";
	var bookPrice=obj.value.trim();
	var txt =new RegExp(/^\d.*\d*$/);
	if(!txt.test(bookPrice)){//txt对象通过test函数匹配nameValue
//		/\w 0-9a-zA-Z ^以……开头   ￥以……结尾    \w{6,12} 6-12个字符/
//		正确的 设置友好提示为正确
		$("report").innerHTML="价格格式不符合要求"; //js控制样式的切换 html css js
		return false;
	}else if(bookPrice==""){
		$("report").innerHTML="价格不能为空"; //js控制样式的切换 html css js
		return false;
	}
	$("report").innerHTML="";
	return true;
}

function bookPageOnblur(obj){
	obj.placeholder="页数";
	var bookPage=obj.value.trim();
	var txt =new RegExp(/^[1-9]\d*$/);
	if(!txt.test(bookPage)){//txt对象通过test函数匹配nameValue
//		/\w 0-9a-zA-Z ^以……开头   ￥以……结尾    \w{6,12} 6-12个字符/
//		正确的 设置友好提示为正确
		$("report").innerHTML="页数格式不符合要求"; //js控制样式的切换 html css js
		return false;
	}else if(bookPage==""){
		$("report").innerHTML="页数不能为空"; //js控制样式的切换 html css js
		return false;
	}
	$("report").innerHTML="";
	return true;
}

function bookWordAmountOnblur(obj){
	obj.placeholder="字数";
	var wordAmount=obj.value.trim();
	var txt =new RegExp(/^[1-9]\d*$/);
	if(!txt.test(wordAmount)){//txt对象通过test函数匹配nameValue
//		/\w 0-9a-zA-Z ^以……开头   ￥以……结尾    \w{6,12} 6-12个字符/
//		正确的 设置友好提示为正确
		$("report").innerHTML="字数格式不符合要求"; //js控制样式的切换 html css js
		return false;
	}else if(wordAmount==""){
		$("report").innerHTML="字数不能为空"; //js控制样式的切换 html css js
		return false;
	}
	$("report").innerHTML="";
	return true;
}

function bookPublishComplyOnblur(obj){
	obj.placeholder="出版社";
	var bookPublish=obj.value.trim();
	if(bookPublish==null || bookPublish==""){
		$("report").innerHTML="出版社不能为空"; //js控制样式的切换 html css js
		return false;
	}
	$("report").innerHTML="";
	return true;
}

function bookPublishNumberOnblur(obj){
	obj.placeholder="版次";
	var bookPublish=obj.value.trim();
	if(bookPublish==null || bookPublish==""){
		$("report").innerHTML="版次不能为空"; //js控制样式的切换 html css js
		return false;
	}
	$("report").innerHTML="";
	return true;
}

function onSubmit(){
	if(bookNumberOnblur($("bookNumber"))&&bookNameOnblur($("bookName"))&&bookAuthorOnblur($("bookAuthor"))
	&&bookPriceOnblur($("bookPrice"))&&bookPageOnblur($("bookPage"))&&bookWordAmountOnblur($("bookWord"))
	&&bookPublishComplyOnblur($("bookPublishComply"))&&bookPublishNumberOnblur($("bookPublishNum"))){
		var paths=document.getElementsByClassName("path");
		for (i=0;i<paths.length;i++) {
			if(paths[i].innerHTML==""){
				$("report").innerHTML="输入信息有误，请详细检查";
				return false;
			}
		}
		return true;
	}
	$("report").innerHTML="输入信息有误，请详细检查";
	return false;
}
