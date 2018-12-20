<?php
namespace app\back\controller;

use think\Controller;
use think\Db;
class Ordermanager extends Controller{
    
    //订单列表
    public function orderList(){
        return  $this->fetch();
    }
    
    //订单详情
    public function orderDetail(){
        return  $this->fetch();
    }
    
    //订单状态，可能不需要
    //用于修改订单状态：待处理，处理中，已发货，已交付等
    public function orderProcess(){
        return  $this->fetch();
    }
}