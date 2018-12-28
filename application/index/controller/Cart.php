<?php
namespace app\index\controller;
use think\Controller;
use app\index\model\Cart as CartModel;
use app\index\model\Showcart;
use think\Db;
class  Cart extends Controller{
    //添加购物车
    //查看购物车
    //修改购物车中商品的数量（计算总价格）
    //删除购物车中指定商品
    
    public function cart()
    {   //因为暂时没有合并登录，所以默认为'a@163.com'，后面要改成session获取
        $email=session('userEmail');
        if(empty($email)){
            $this->error('请先登录!','login/login');
        }
        $showcarts=Showcart::where('email', $email)->select();
        //把传给html
        $this->assign('showcarts', $showcarts);
        return  $this->fetch();
    }
    public function updateCart()
    {
        $cartID=input('get.cartID');
        $num=input('get.num');
        
        $cart=CartModel::get($cartID);//修改购物车里book的数量
        if($cart){
            $cart->num=$num;
            $cart->save();
        }
        $this->redirect(url('cart/cart'));
    }
    public function deleteCart()
    {
        $cartID=input('get.cartID');
        $cart=CartModel::get($cartID);//删除掉购物车相关条目
        if($cart){
            $cart->delete();
        }
        $this->redirect(url('cart/cart'));
    }
    public function submitCart()
    {
        //$this->redirect(url('index/index'));
        $cartIDs=input('get.cartIDs/a');//提交订单
        session('cartIDs',$cartIDs);//将被选中的cartID传到Order模型
        return "goOrder";
    }
}