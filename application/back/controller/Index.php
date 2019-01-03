<?php
namespace app\back\controller;

use think\Controller;
use think\Db;
class Index extends Controller{
    
    public function welcome(){
        return  $this->fetch();
    }
    
    public function index($name='123'){
        $data =md5('admin');
       
        dump($data);
        #return 'hello '.$name.'!';
        return  $this->fetch();
    }
    
}
