<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
class Register extends Controller{
	
	public function register(){
		return $this->fetch();
	}
	public function doRegister(){
		
		$param = input('post.');
		if(empty($param['name'])) {
			$this->error('name不能为空');
		}
		if(empty($param['email'])) {
			$this->error('email不能为空');
		}
		if(empty($param['passw1'])) {
			$this->error('密码不能为空');
		}
		if(empty($param['passw2'])) {
			$this->error('确认密码不能为空');
		}
		if($param['passw1']!=$param['passw2']){
			$this->error('两次密码输入不一致！');
		}
		$has=Db::table('member')->where('userEmail',$param['email'])->find();
		if(!empty($has['userEmail'])){
			$this->error('email已存在！');
		}else{
			
			$result = Db::execute("insert into member(userEmail,userPwd,userName)
                 values('" . $param['email'] . "','" .md5($param['passw1']) . "','" . $param['name'] . "')");
			dump($result);
			session('userEmail',$param['email']);//默认注册后自动登录
			$this->success('用户['.$param['name'].']新增成功','index/index');
			
		}
	}
	
}