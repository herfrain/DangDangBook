<?php
namespace app\index\controller;

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
    
    //登出
    public function logOut(){
        session('email',null);
        $this->redirect(url('index/index'));
    }
}