<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

//dangdangbook
class Login extends Controller{
	
    //登陆功能
    public function login(){
        return  $this->fetch();
    }
    
    //登录
    public function doLogin(){
    	if(empty(input('post.email'))){
    		$this->error('email不能为空');
    	}
    	if(empty(input('post.passw'))){
    		$this->error('密码不能为空');
    	}
    	$has=Db::table('member')->where('userEmail',input('post.email'))->find();
    	if(empty($has)){
    		$this->error('不存在该用户名');
    	}
    	// 验证密码
    	if($has['userPwd']!=md5(input('post.passw'))){
    		$this->error('密码错误');
    	}
    	session('userEmail',$has['userEmail']);
    	$this->redirect(url('index/index'));
    }
    
    //登出
    public function logOut(){
        session('userEmail',null);
        $this->redirect(url('index/index'));
    }
}