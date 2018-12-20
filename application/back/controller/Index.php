<?php
namespace app\back\controller;

use think\Controller;
use think\Db;
class Index extends Controller{
    
    public function welcome(){
        return  $this->fetch();
    }
    
    public function index(){
        return  $this->fetch();
    }
}