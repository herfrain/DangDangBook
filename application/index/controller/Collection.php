<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\Collection as collectionModel;
use app\index\model\Showcollection;
class Collection extends Controller{
    //显示商品收藏
    //删除商品收藏
    public function collection()
    {
        if(empty(session('userEmail'))){
            $this->error('请先登录!','login/login');
        }
        $email=session('userEmail');
        $books=Showcollection::where('email',$email)->paginate(8);
        $page = $books->render();
        $this->assign('books', $books);
        $this->assign('page', $page);
        
        return  $this->fetch();
    }
}