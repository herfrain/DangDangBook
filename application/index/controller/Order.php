<?php
namespace app\index\controller;
use app\index\model\Showcart;
use think\Controller;
use app\index\model\Customer;
use app\index\model\Customercopy;
use app\index\model\Shoplist;
use app\index\model\Showorder;
use app\index\model\Showshoplist;
use app\index\model\Myorder;
use app\index\model\Cart;
class Order extends Controller{
    //生成订单
    //管理送货地址
    //查看我的订单
    public function order()//订单列表
    {
        $email=session('userEmail');
        if(empty($email)){
            $this->error('请先登录!','login/login');
        }
        $showorders = Showorder::where('email', $email)->order('orderID desc')->paginate(3);
        $page = $showorders->render();
        $this->assign('showorders', $showorders);
        $this->assign('page', $page);
        
        $orderlists = array();
        foreach ($showorders as $showorder) {
            $showshoplists = Showshoplist::where('orderID', $showorder->orderID)->select();
            foreach ($showshoplists as $showshoplist) 
            {
                array_push($orderlists, $showshoplist);
            }
        }
        $this->assign('orderlists', $orderlists);
        return $this->fetch();
    }
    
    //thinkphp默认url会加下划线，所以要改html的文件名
    //对应order_confirm.html
    public function orderConfirm()//确认订单
    {  
        $email=session('userEmail');
        $cartIDs=session('cartIDs');
        $showcarts=Showcart::where('cartID','in',$cartIDs)->select();
        $cartnum=Showcart::where('cartID','in',$cartIDs)->count();
        if($cartnum<=0)
        {
            $this->error('你还没有选择商品呢！','index/index');
        }
        $this->assign('showcarts', $showcarts);
        Shoplist::where('orderID',0)->delete();//先把之前没有确认的(orderID=0的)shoplist条目删除
        for($i=0;$i<$cartnum;$i++)
        {
            $newShoplist=new Shoplist();
            $newShoplist->orderID=0;//这时候还没有获取新的订单条目，所以先暂时把订单id设置为0
            $newShoplist->bookID=$showcarts[$i]->bookID;
            $newShoplist->num=$showcarts[$i]->num;
            $newShoplist->ifComment=0;
            $newShoplist->save();//每次添加数据最后都记得save一下
        }
        $customers=Customer::where('email', $email)->order('custID asc')->select();
        $this->assign('customers', $customers);
        return  $this->fetch();
    }
    public function addAddress()//添加地址
    {
        $email=session('userEmail');
        $addName=input('get.addName');
        $addPlace=input('get.addPlace');
        $addTel=input('get.addTel');
        $customer=new Customer();
        $customer->email=$email;
        $customer->custName=$addName;
        $customer->custMobile=$addTel;
        $customer->custAddress=$addPlace;
        $customer->save();
        
        $customerCopy=new Customercopy();
        $customerCopy->custID=$customer->custID;
        $customerCopy->email=$email;
        $customerCopy->custName=$addName;
        $customerCopy->custMobile=$addTel;
        $customerCopy->custAddress=$addPlace;
        $customerCopy->save();
        
    }
    public function editAddress()//编辑地址
    {
        $addName=input('get.addName');
        $addPlace=input('get.addAddr');
        $addTel=input('get.addPhone');
        $custID = input('get.showCustID');
        
        $customer=Customer::where('custID', $custID )->find();
        $customer->custName=$addName;
        $customer->custMobile=$addTel;
        $customer->custAddress=$addPlace;      
        $customer->save();
        $customerCopy=Customercopy::where('custID', $custID )->find();
        $customerCopy->custName=$addName;
        $customerCopy->custMobile=$addTel;
        $customerCopy->custAddress=$addPlace;
        $customerCopy->save();
        return "success";
    }
    public function deleteAddress()//删除地址
    {
        $custID = input('get.custID');
        //return $custID;
        Customer::where('custID','=',$custID)->delete();
        return "success";
    }
    public function orderStatus($orderID="")//订单详情
    {    
        $email=session('userEmail');
        $orderID=input('get.orderID');
        $orderIfExits=Showorder::where('orderID', $orderID)->count();        
        if($orderIfExits==0)//如果订单不存在,不予显示
        {
            $this->error('订单不存在！','order/order');
        }
        $showorder=Showorder::where('orderID', $orderID)->find();
        if($showorder->email!=$email)//如果订单不属于登录用户,不予显示
        {
            $this->error('订单不存在！','order/order');
        }
        $showshoplists=Showshoplist::where('orderID', $orderID)->select();
        $this->assign('showorder', $showorder);
        $this->assign('showshoplists', $showshoplists);
        return  $this->fetch();
    }
    public function submitOrder()//提交订单
    {
        $email=session('userEmail');
        $custID=input('get.custID');
        $sum=input('get.sum');
        if(session("orderID")==null)//如果订单没有被建立，就新建一条订单
        {
            $myorder=new Myorder();//新添加一条order条目
            $myorder->email=$email;
            $myorder->custID=$custID;
            $myorder->totalPay=$sum;
            $myorder->orderStatus='未付款';
            $myorder->createTime=date("Y-m-d H:i:s");
            $myorder->packageID=0;//快递号暂时定位年月日加时
            $myorder->save();
            //将所有orderID为0的数据的orderID变为新添加的Order条目的id
            Shoplist::where('orderID',0)->update(['orderID' => $myorder->orderID]);
            session('orderID',$myorder->orderID);
        }
        else //否则，修改订单中的信息
        {
            $orderID=session("orderID");
            $myorder=Myorder::where('orderID', $orderID)->find();
            $myorder->custID=$custID;
            $myorder->totalPay=$sum;//
            $myorder->createTime=date("Y-m-d H:i:s");
            $myorder->packageID=date("YmdH");//快递号暂时定位年月日加时
            $myorder->save();
            Shoplist::where('orderID',$orderID)->delete();//删除该订单所绑定的所有商品
            Shoplist::where('orderID',0)->update(['orderID' => $myorder->orderID]);//将新选择的商品绑定到该订单上
        }
        return "goPay";
    }
    public function orderPay()//支付订单
    {
        if(session("orderID")!=null)
        {
            $orderID=session("orderID");
            $order=Myorder::where('orderID', $orderID)->find();
            $customer=Customer::where('custID', $order->custID)->find();//在customer表中找到刚刚选择的地址的那行数据
            $this->assign('customer', $customer);
            $this->assign('order', $order);
        }
        else
        {
            $this->error('订单已经支付！','order/order');
        }
        return  $this->fetch();
    }
    public function deleteOrder()//删除订单
    {
        if(session("orderID")!=null)
        {
            $orderID=session("orderID");
            Myorder::where('orderID', $orderID)->delete();
            Shoplist::where('orderID', $orderID)->delete();
            session("orderID",null);
        }
        $this->redirect('order/order');
    }
    public function orderSuccess()//订单支付成功
    {   
        if(session("orderID")!=null)
        {
            $orderID=session("orderID");
            $order=Myorder::where('orderID', $orderID)->find();
            $order->orderStatus='未发货';
            $order->save();
            $this->assign('order', $order);
            $cartIDs=session('cartIDs');
            Cart::where('cartID','in',$cartIDs)->delete();//将购物车内支付的商品删除
            session("orderID",null);
            session('cartIDs',null);
        }
        else 
        {
            $this->error('订单已经支付！','order/order');
        }
        return  $this->fetch();
    }
    public function orderFail()//订单支付失败
    {
        $orderID=session("orderID");
        $order=Myorder::where('orderID', $orderID)->find();
        $this->assign('order', $order);
        $cartIDs=session('cartIDs');
        return  $this->fetch();
    }
    public function getPackage($orderID="")//确认收货
    {
        $order=Myorder::where('orderID', $orderID)->find();
        $order->orderStatus='已收货';
        $order->save();
        $this->redirect('order/order');
    }
    
    public function setDefaultAddress()//设置为默认地址
    {
        $email=session('userEmail');
        $custID = input('get.custID');
        //return $custID;
        $customers=Customer::where('email','=',$email)->select();
        foreach ($customers as $customerone)
        {
            $customerone->default=0;
            $customerone->save();
        }
        $customer=Customer::where('custID','=',$custID)->find();
        $customer->default=1;
        $customer->save();
        return "success";
    }
}