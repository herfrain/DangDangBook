<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
// use app\index\model\Cart as CartModel;
class  Cart extends Controller{
    //添加购物车
    //查看购物车
    //修改购物车中商品的数量（计算总价格）
    //删除购物车中指定商品
    
    public function cart()
    {
        
        return  $this->fetch();
    }
}