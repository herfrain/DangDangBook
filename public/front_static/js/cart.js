function $(id){//依据id获取element的对象
	return document.getElementById(id);
}

function $getValue(id){//依据id获取element对象中的value值
	return document.getElementById(id).value;
}

function allSelect(obj){
	var itemLists=document.getElementsByClassName("goodsCheckBox");
	var allList=document.getElementsByClassName("allSelectCheckBox");
	for(i=0;i<itemLists.length;i++){
		
		itemLists[i].checked=obj.checked;
	}
	for(i=0;i<allList.length;i++){
		allList[i].checked=obj.checked;
	}
}

function itemSelect(obj){
	if(obj.checked == true){
		var lists = document.getElementsByClassName("goodsCheckBox");
		for(i=0;i<lists.length;i++){/*i in lists 进行迭代*/
			if(!lists[i].checked){
				return;
			}
		}
	}
	var allList=document.getElementsByClassName("allSelectCheckBox");
	for(i=0;i<allList.length;i++){
		allList[i].checked=obj.checked;
	}
}

function subtractClick(obj){
	var count=obj.nextElementSibling;
	if(count.value<=1){
		alert("订单中的商品至少要购买一份！")
	}else{
		count.value=parseInt(count.value)-1;
		var price=obj.parentNode.previousElementSibling;
		var total=obj.parentNode.nextElementSibling;
		total.innerHTML="￥"+(parseFloat(price.innerHTML.replace("￥",""))*parseInt(count.value)).toFixed(1);
		totalCount();
	}
}

function addClick(obj){
	var count = obj.previousElementSibling;
	count.value = parseInt(count.value) + 1;
	var price = obj.parentNode.previousElementSibling;
	var total = obj.parentNode.nextElementSibling;
	total.innerHTML = "￥" + (parseFloat(price.innerHTML.replace("￥", "")) * parseInt(count.value)).toFixed(1);
}

function deleteNode(obj){
	var goodItem=obj.parentNode.parentNode;
	var goodsTable=goodItem.parentNode;
	goodsTable.removeChild(goodItem);
}

function updateCount(obj){
	var price = obj.parentNode.previousElementSibling;
	var total = obj.parentNode.nextElementSibling;
	total.innerHTML = "￥" + (parseFloat(price.innerHTML.replace("￥", "")) * parseInt(obj.value)).toFixed(1);
}
