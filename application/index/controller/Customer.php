<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\Customer as CustomerModel;
class Customer extends Controller{
    //添加、编辑、删除收货人
    
    public function addCustomer()
    {
        
        return  $this->fetch();
    }
}