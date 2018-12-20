<?php
namespace app\index\controller;

use think\Controller;
class Collection extends Controller{
    //显示商品收藏
    //删除商品收藏
    public function collect()
    {
        
        return  $this->fetch();
    }
}