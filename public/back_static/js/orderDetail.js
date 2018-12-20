init();
totalPrice();
greyBar();


function totalPrice(){
	var lists=$C('price');
	var totalP=0;
	for(i=0;i<lists.length;i++){
		//求和
		totalP=totalP+parseInt(lists[i].innerText);
	}
	//赋值
	$('totalPrice').innerText=totalP;
}

//将奇数的行数的class 设置为 detail greyBack形式
function greyBar(){
	var lists=$C('detail');
//	console.log(lists.length);
	for(i=1;i<=lists.length;i++){
		if(i%2!=0){
//			console.log(i)
			lists[i-1].className="detail greyBack";
		}else{
			lists[i-1].className="detail";
		}
	}
}


function init(){
	var lists=$C('width3');
//	console.log(lists.length);
	for(i=1;i<lists.length;i++){
		lists[i].innerText='0'+'0'+(i)
	}
	
	var goodsName=new Array("","四星电视机","想联笔记本",
"Neki明显球鞋","Adadis运动背包","最新款Aplle手机","DOTA2专业鼠标垫",
"16核32线程发烧级TMD处理器","吴亦凡Skr签名照");
	var lists=$C('width2');
//	console.log(lists.length);
	for(i=1;i<lists.length;i++){
		lists[i].innerText=goodsName[i];
	}
	
	var goodsIntro=new Array("","四星的体验，更好的生活","想着想着，就联上了的笔记本",
	"Neki Neki~","背上背包，走吧","超薄，超频，超apple","Doda2 你值得拥有",
	"烧到你脑袋发麻");
	var lists=$C('width4');
//	console.log(lists.length);
	for(i=1;i<lists.length;i++){
		lists[i].innerText=goodsIntro[i];
	}
	
	var goodsPrices=new Array("666","1666",
	"88","18","998","3",
	"888");
	var lists=$C('price');
//	console.log(lists.length);
	for(i=0;i<lists.length;i++){
		lists[i].innerText=goodsPrices[i];
	}
}
