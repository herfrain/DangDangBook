function $(id){//依据id后去element对象
	return document.getElementById(id);
}

function changeColorOver(obj)
{
	obj.style.color="#0AA2ED"
}
function changeColorOut(obj)
{
	obj.style.color="#000000"
}
function moreAddressClick()
{
	$("addAddress").style.display = "block";
}
function addressNameOnblur(obj)
{
	obj.placeholder="请输入收货人姓名"
	var str=obj.value;
	if(str=="")
	{
		$("errorAddName").className="errorTd";
		$("errorAddName").innerHTML="收货人姓名不能为空！";
	}
	else
	{
		$("errorAddName").className="rightTd";
		$("errorAddName").innerHTML="收货人姓名正确";
		return true;
	}
	return false;
}
function addressPlaceOnblur(obj)
{
	obj.placeholder="请输入收货地址"
	var str=obj.value;
	if(str=="")
	{
		$("errorAddPlace").className="errorTd";
		$("errorAddPlace").innerHTML="收货地址不能为空！";
	}
	else
	{
		$("errorAddPlace").className="rightTd";
		$("errorAddPlace").innerHTML="收货地址正确";
		return true;
	}
	return false;
}
function addressTelOnblur(obj)
{
	obj.placeholder="请输入收货人电话"
	var str=obj.value;
	var txt=new RegExp(/^[0-9]{4,}$/);//使用正则表达式来进行字符串的匹配	
	if(str=="")
	{
		$("errorAddTel").className="errorTd";
		$("errorAddTel").innerHTML="电话号码不能为空！";
	}
	else if(!txt.test(str))
	{
		$("errorAddTel").className="errorTd";
		$("errorAddTel").innerHTML="请输入正确的电话号码";
	}
	else
	{
		$("errorAddTel").className="rightTd";
		$("errorAddTel").innerHTML="电话号码正确";
		return true;
	}
	return false;
}
function addAddress()
{
	if(addressNameOnblur($("newAddressName"))&&
	addressPlaceOnblur($("newAddressPlace"))&&
	addressTelOnblur($("newAddressTel")))
	{
		var name=$("newAddressName").value;
		var place=$("newAddressPlace").value;
		var tel=$("newAddressTel").value;
		var adde=$("oneAddress");		
		var superE=adde.parentNode;
		var newE=adde.cloneNode(true);//传入一个bl值，当为真的时候，会拷贝全部，false时候只会拷贝首节点
		var arr=newE.childNodes;
		
		for(i in arr)
		{
			if(arr[i].nodeName=="INPUT")
			{
				arr[i].checked=true;
			}
			if(arr[i].className=="addressNameDiv")
			{
				arr[i].innerHTML=name;
			}
			if(arr[i].className=="addressPlaceDiv")
			{
				arr[i].innerHTML=place+" "+tel;
			}
		}
		superE.appendChild(newE);
		$("addAddress").style.display = "none";
	}
}
function confirmClick()
{
	window.location.href="payment.html";
}