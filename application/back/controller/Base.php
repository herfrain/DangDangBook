<?php
namespace app\back\controller;
use think\Controller;
use think\Request;
use think\Session;
//登陆后才可以进行管理操作
//elseif (in_array(Request::instance()->action(), $this->fun)&&(Session::get('pms')-1==0))
class Base extends Controller{
    protected $fun=[];
    public  function  _initialize() {
        /* $data =md5('admin');
         
        dump($data);
        die; */
        if (!$this->isLogin()&& $this->fun[0]){
            return $this->error('请先登录后台管理系统','login/login',1);
            
        }elseif ($this->fun[0]=='2'&&(Session::get('pms')-1==0)){
            
            return $this->error('你所在用户组未被授权权限管理',null,1);
            
        }
    }
    
    public  function  isLogin() {
        return session('admin');
    }
}