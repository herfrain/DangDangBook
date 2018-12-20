function changePic(obj1,obj2){
	//alert(111);
	if(obj2.test(obj1.value)){
		//alert(22);
		var picId=obj1.id+"Check";
		var pic=document.getElementById(picId);
		pic.src="学子商城web前端开发/客户端/img/tF/t.png";
		//alert(111);
	}else{
		//alert(33);
		var picId=obj1.id+"Check";
		var pic=document.getElementById(picId);
		pic.src="学子商城web前端开发/客户端/img/tF/f.png";
	}
}



function checkBookNumber(obj){
	//var aaa=obj.id+"aaa";
	//alert(aaa);
	var objValue=obj.value;
	var txt= new RegExp(/^\d{1,14}$/);
	changePic(obj,txt);
	/*if(txt.test(objValue)){
		//alert(22);
		var picId=obj.id+"Check";
		var pic=document.getElementById(picId);
		pic.src="学子商城web前端开发/客户端/img/tF/t.png";
		//alert(111);
	}else{
		//alert(33);
		var picId=obj.id+"Check";
		var pic=document.getElementById(picId);
		pic.src="学子商城web前端开发/客户端/img/tF/f.png";
	}*/
	
}

function checkBookName(obj){
	
	var objValue=obj.value;
	
	var txt= new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/);
	//alert(txt);
	changePic(obj,txt);
	//alert(222);
}
function checkAuthor(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/);
	changePic(obj,txt);
}

function checkPrice(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^[0-9]+(.[0-9]{1,2})?$/);
	changePic(obj,txt);
}

function checkPage(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^\d{1,10}$/);
	changePic(obj,txt);
}
function checkWordNumber(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^\d{1,10}$/);
	changePic(obj,txt);
}

function checkBirthPlace(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/);
	changePic(obj,txt);
}

function checkAge(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^\d{1,10}$/);
	changePic(obj,txt);
}

function checkBirth(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^\d{4}-\d{1,2}-\d{1,2}/);
	changePic(obj,txt);
}

function checkKai(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/);
	changePic(obj,txt);
}

function checkZhuang(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/);
	changePic(obj,txt);
}

function checkUsePaper(obj){
	var objValue=obj.value;
	var txt= new RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/);
	changePic(obj,txt);
}

function send(){
	checkBookNumber(document.getElementById("bookNumber"));
	checkBookName(document.getElementById("bookName"));
	checkAuthor(document.getElementById("author"));
	checkPrice(document.getElementById("price"));
	checkPage(document.getElementById("page"));
	checkWordNumber(document.getElementById("wordNumber"));
	checkBirthPlace(document.getElementById("birthPlace"));
	checkAge(document.getElementById("age"));
	checkBirth(document.getElementById("birth"));
	checkKai(document.getElementById("kai"));
	checkZhuang(document.getElementById("zhuang"));
	checkUsePaper(document.getElementById("usePaper"));
	
	/*判断是否全部绿色*/
	if(
		(document.getElementById("bookNumberCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("bookNameCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("authorCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("priceCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("pageCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("wordNumberCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("birthPlaceCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("ageCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("birthCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("kaiCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("zhuangCheck").src.indexOf("t.png")!=-1)&&
		(document.getElementById("usePaperCheck").src.indexOf("t.png")!=-1)	
	){
		setTimeout("location.href='orderDetail.html'",1500);
	}else{
		alert("存在格式错误，请输出正确的格式。");
	}
	
}
var a1;

/*function aClick(){
	setTimeout("location.href='orderDetail.html'",3000);
}*/
