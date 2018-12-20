<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use app\index\model\Customer;
use app\index\model\Member;

class Order extends Controller{
    //生成订单
    //管理送货地址
    //查看我的订单
    public function order()
    {
        
        return  $this->fetch();
    }
    
    //thinkphp默认url会加下划线，所以要改html的文件名
    //对应order_confirm.html
    public function orderConfirm()
    {
        
        return  $this->fetch();
    }
    
    public function orderStatus()
    {
        
        return  $this->fetch();
    }
}