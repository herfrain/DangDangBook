<?php
namespace app\back\controller;

use think\Controller;
use think\Db;
class Login extends Controller{
    
    //登陆功能
    public function login(){
        return  $this->fetch();
    }
    
    //修改密码
    public function changePwd(){
        return  $this->fetch();
    }
}