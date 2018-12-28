//减法
function reduce(obj) {

	//兄弟节点，下一个节点
	var next = obj.nextSibling.nextSibling;
	if(next.value <= 1) return;
	next.value = next.value - 1;
}
//加法
function addn(obj) {
	var pre = obj.previousSibling.previousSibling;
	//+默认字符串相加了
	pre.value = parseInt(pre.value) + 1;
}


var collect=false;
//var collectBtn=$('collectBtn');
//collectBtn.onclick=changeImg();
function changeImg(){
	if(!collect){
		console.log(1);
		$('collectImg').src="学子商城web前端开发/客户端/img/product_detail/product_detail_img62.png";
		collect=true;
	}else{
		console.log(2);
		$('collectImg').src="学子商城web前端开发/客户端/img/product_detail/product_detail_img6.png";
		collect=false;
	}
		
}

//回到顶部
function backToUp(){
	
scrollToptimer = setInterval(function () {
    console.log("定时循环回到顶部")
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var speed = top / 4;
    if (document.body.scrollTop!=0) {
        document.body.scrollTop -= speed;
    }else {
        document.documentElement.scrollTop -= speed;
    }
    if (top == 0) {
        clearInterval(scrollToptimer);
    }
}, 16); 
}

//jquery 添加点击事件
//商品详情显示或商品评价显示
$('#detail').click(function(){
	$('#showDetail').removeClass("hide");
	$('#showComment').addClass("hide");
});

$('#comment').click(function(){
	$('#showDetail').addClass("hide");
	$('#showComment').removeClass("hide");
});


