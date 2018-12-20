<?php
namespace app\back\controller;

use think\Controller;
use think\Db;
class Bookmanager extends Controller{
    
    //书列表
    public function bookList(){
        return  $this->fetch();
    }
    
    public function index(){
        return  $this->fetch();
    }
    
    //添加书
    public function bookAdd(){
        return  $this->fetch();
    }
    
    //查看书详情
    public function bookInformation(){
        return  $this->fetch();
    }
    
    //编辑
    public function bookInformationEdit(){
        return  $this->fetch();
    }
    
    //删除
}