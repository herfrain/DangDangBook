function $(id){
	return document.getElementById(id);
}

function $V(id){
	return document.getElementById(id).value;
}

function $N(id){
	return document.getElementsByName(id);
}

function $C(id){
	return document.getElementsByClassName(id);
}

function nameOnBlur(obj){
	obj.placeholder='输入用户名';
	
	var nameV=obj.value;
	var txt=new RegExp(/^\w{6,12}$/);//正则表达式
	if(txt.test(nameV)){
		//span节点 用innerHTML获取里面的东西，可以变换样式
		$('nameErr').innerHTML="正确";
		$('nameErr').className='correctSpan';
		return true;
	}else{
//		alert('用户名没有输入！');
		
		$('nameErr').innerHTML='6~12个字符';
		$('nameErr').className='wrongSpan';
		return false;
	}
}


function allClickf(obj){
	var bl=obj.checked;
	var lists=$N('hobby');
	for(i=0;i<lists.length;i++){
		lists[i].checked=bl;
	}
}

function hobbyClick(obj){
	if(obj.checked){
		var lists=$N('hobby');
		for(i=0;i<lists.length;i++){
			if(lists[i].checked==false) return;
		}
	}
	$('allClick').checked=obj.checked;

}

//返回true则提交，false则不
function submitClick(){
	if(!nameOnBlur($('name'))){
		alert("用户名错误！");
		return false;
	}
	var lists=$N('hobby');
	var listsNum=0;
	for(i=0;i<lists.length;i++){
		if(lists[i].checked==true)
			listsNum++;
	}
	if(listsNum<4){
		alert('至少选择4个爱好！');
		return false;
	}
	return true;
}
