<?php
namespace app\back\controller;

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
    	if(empty(input('email'))){
    		$this->error('email不能为空');
    	}
    	if(empty(input('pwd'))){
    		$this->error('密码不能为空');
    	}
    	$has=Db::table('member')->where('userEmail',input('post.email'))->find();
    	if(empty($has)){
    		$this->error('不存在该用户名');
    		
    	}elseif (!$has['permission']){
    	    
    	    $this->error('用户权限不足');
    	}
    	// 验证密码
    	if($has['userPwd']!=md5(input('post.pwd'))){
    		$this->error('密码错误');
    	}
    	
    	session('admin',$has['userEmail']);
    	session('pms',$has['permission']);
    	/* dump($has['permission']);
    	die; */
    	$this->redirect(url('back/index/welcome'));
    }
    
    //登出
    public function logOut(){
        session('admin',null);
        session('pms',null);
        $this->redirect(url('back/login/login'));
    }
}