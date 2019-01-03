<?php
namespace app\back\controller;

use think\Controller;
use think\Db;
use \think\Paginator;
use think\View;
use app\index\model\Admin;
use app\index\model\Myorder;
use think\Request;

class Ordermanager extends Base{
    protected $fun=['1'];
    //订单列表
    public function orderList(){
        $get=input('get.');
        $orderID=input('get.orderID');
        $orderStatus=input('get.orderStatus');
        $pageParam=['query'=>[]];
        $myorder=new Myorder();
        $num=Db::name('myorder')->count();
        if($orderID){
            $myorder->where('orderID','like',"%{$orderID}%");
            $this->assign('orderID',$orderID);
            $pageParam['query']['orderID']=$orderID;
        }
        if($orderStatus){
            $myorder->where('orderStatus','like',"%{$orderStatus}%");
            $this->assign('orderStatus',$orderStatus);
            $pageParam['query']['orderStatus']=$orderStatus;
        }
        $list = $myorder->paginate(8, false, $pageParam);
        $this->assign('resu',$list);
        $this->assign('numb',$num);
        return  $this->fetch();
    }
    
    //订单详情
    public function orderDetail($oi,$ct,$tp,$os,$ci,$pi){
        $data=Db::name('customer')->where('custID',$ci)->find();
        $osdd=Db::name('myorder')->where('orderID',$oi)->field('orderStatus')->find();
        $nuu=null;
        $ctt=substr($ct, 0,10); 
        if ($osdd['orderStatus']==='已收货')$nuu=3;
        if ($osdd['orderStatus']==='已发货')$nuu=2;
        if ($osdd['orderStatus']==='未发货')$nuu=1;
        if ($osdd['orderStatus']==='未付款')$nuu=0;
        $this->assign('nuu',$nuu);
        $this->assign('ct',$ct);
        $this->assign('ctt',$ctt);
        $this->assign('tp',$tp);
        $this->assign('os',$os);
        $this->assign('ci',$ci);
        $this->assign('oi',$oi);
        $this->assign('pi',$pi);
        $this->assign('da',$data);
        
        $book=Db::name('shoplist')->alias('a')->join('book i','a.bookID=i.bookID')
        ->field('a.num,a.orderID,i.bookID,i.bName,i.bAuthor,i.bPublisher,i.bPubTime,i.bPriceS')
        ->where('a.orderID',$oi)->select();
        $this->assign('book',$book);
        
        $ods=Db::name('myorder')->where('orderID',$oi)->find();
        
        $this->assign('ods',$ods);
        
        return  $this->fetch();
    }
    
    //用于修改订单状态：待处理，处理中，已发货，已交付等
    public  function datachange($oi) {
       
        $fahuo=input('post.fahuo');
        if(!$fahuo==''){
        $res= Db::name('myorder')->where('orderID',$oi)->setField(['orderStatus'=>'已发货','packageID'=>$fahuo]);
        $this->assign('up',$fahuo);
        $this->success('发货成功，正在为您跳转','Ordermanager/orderList');
        }else{
            $this->error('物流单号不为空');
        }
         }
    
    
    //个人购物车展示
   
    public function orderProcess($ooi){
        $book=Db::name('shoplist')->alias('a')->join('book i','a.bookID=i.bookID')
        ->field('a.num,a.orderID,i.bName,i.bAuthor,i.bPublisher,i.bPubTime,i.bPriceS')
        ->where('a.orderID',$ooi)->select();
        $this->assign('book',$book);
        
        $ods=Db::name('myorder')->where('orderID',$ooi)->find();
        
        $this->assign('ods',$ods);
         return  $this->fetch(); 
    }
}