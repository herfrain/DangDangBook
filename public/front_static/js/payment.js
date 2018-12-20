function $(id){//依据id后去element对象
	return document.getElementById(id);
}

function onclickBank(obj)
{
	$("paymentBox").style.display = "block";
	$("bankImg").src="学子商城web前端开发/客户端/img/pay/pay_img"+obj.id+".jpg";
	if(obj.id=="1")
	{
		$("bankNum").innerHTML="银行卡号：123********123";
	}
	if(obj.id=="2")
	{
		$("bankNum").innerHTML="银行卡号：321********321";
	}
	if(obj.id=="3")
	{
		$("bankNum").innerHTML="银行卡号：345********345";
	}
	if(obj.id=="4")
	{
		$("bankNum").innerHTML="银行卡号：645********654";
	}
	if(obj.id=="5")
	{
		$("bankNum").innerHTML="银行卡号：876********876";
	}
}
function pwdOnblur(obj)
{
	if(obj.value.length<6)
	{
		return false;
	}
	else return true;
}
function confirmPay(obj)
{
	if(!pwdOnblur($("payPwd")))
	{
		$("pwdDiv").style.color="#FF0000";
		return;
	}
	if($("payPwd").value=="123456")
	{
		window.location.href="pay-success.html";
	}
	else window.location.href="pay-fail.html";
}
function backOrder()
{
	window.location.href="orderConfirm.html";
}
