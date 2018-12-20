<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

//命名是首字母大写，其余都是小写
class Bookdetail extends Controller
{
    public function detail()
    {
        //商品详情
        return  $this->fetch();
    }
    
    
}
