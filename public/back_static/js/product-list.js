function $(id){//依据id后去element对象
	return document.getElementById(id);
}

function changePage(obj)
{
	var parentN=obj.parentNode.parentNode;
	var nodeList=parentN.childNodes;
	for(i in nodeList)
	{
		if(nodeList[i].nodeName=="LI")
			if(nodeList[i].childNodes[0].className=="pageNum cheackTrue")
				nodeList[i].childNodes[0].className="pageNum cheackFalse";
	}
	obj.className="pageNum cheackTrue";
	$("page").innerHTML=" "+obj.id+" ";
	if(obj.id<7)
	$("order").innerHTML=" "+obj.id*10+" ";
	else $("order").innerHTML=" "+64+" ";
	$("iframe").src="productList/page"+obj.id+".html";
}
function toFirstPage(obj)
{
	var parentN=obj.parentNode.parentNode;
	var nodeList=parentN.childNodes;
	var nowPage=0;
	for(i in nodeList)
	{
		if(nodeList[i].nodeName=="LI")
			if(nodeList[i].childNodes[0].className=="pageNum cheackTrue")
			{
				nodeList[i].childNodes[0].className="pageNum cheackFalse";
				nowPage=nodeList[i].childNodes[0].id;
				break;			
			}			
	}
	$("1").className="pageNum cheackTrue";
	$("page").innerHTML=" "+1+" ";
	$("order").innerHTML=" "+10+" ";
	$("iframe").src="productList/page"+1+".html";
}
function toLastPage(obj)
{
	var parentN=obj.parentNode.parentNode;
	var nodeList=parentN.childNodes;
	var nowPage=0;
	for(i in nodeList)
	{
		if(nodeList[i].nodeName=="LI")
			if(nodeList[i].childNodes[0].className=="pageNum cheackTrue")
			{
				nodeList[i].childNodes[0].className="pageNum cheackFalse";
				nowPage=nodeList[i].childNodes[0].id;
				break;			
			}			
	}
	$("7").className="pageNum cheackTrue";
	$("page").innerHTML=" "+7+" ";
	$("order").innerHTML=" "+64+" ";
	$("iframe").src="productList/page"+7+".html";
}
function UpPage(obj)
{
	var parentN=obj.parentNode.parentNode;
	var nodeList=parentN.childNodes;
	var nowPage=0;
	for(i in nodeList)
	{
		if(nodeList[i].nodeName=="LI")
			if(nodeList[i].childNodes[0].className=="pageNum cheackTrue")
			{
				nodeList[i].childNodes[0].className="pageNum cheackFalse";
				nowPage=nodeList[i].childNodes[0].id;
				break;			
			}			
	}
	if(nowPage>1)
	nowPage=nowPage-1;
	$(nowPage).className="pageNum cheackTrue";
	$("page").innerHTML=" "+nowPage+" ";
	$("order").innerHTML=" "+10*nowPage+" ";
	$("iframe").src="productList/page"+nowPage+".html";
}
function NextPage(obj)
{
	var parentN=obj.parentNode.parentNode;
	var nodeList=parentN.childNodes;
	var nowPage=0;
	for(i in nodeList)
	{
		if(nodeList[i].nodeName=="LI")
			if(nodeList[i].childNodes[0].className=="pageNum cheackTrue")
			{
				nodeList[i].childNodes[0].className="pageNum cheackFalse";
				nowPage=nodeList[i].childNodes[0].id;
				break;			
			}			
	}
	if(nowPage<7)
	nowPage=nowPage-(-1);
	$(nowPage).className="pageNum cheackTrue";
	$("page").innerHTML=" "+nowPage+" ";
	if(nowPage==7)
	$("order").innerHTML=" "+64+" ";
	else
	$("order").innerHTML=" "+10*nowPage+" ";
	$("iframe").src="productList/page"+nowPage+".html";
}