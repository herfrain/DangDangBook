<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
class Register extends Controller{
    //注册功能
    
    public function register()
    {
        
        return  $this->fetch();
    }
}