<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use app\index\model\Book as bookModel;
use app\index\model\Cart as cartModel;
use app\index\model\Comment as commentModel;
use app\index\model\Showshoplist as showShopListModel;
//命名是首字母大写，其余都是小写
class Comment extends Controller{
    
    //显示商品信息和评价框
    public function comment(){
        $bookID=input('get.bookID');
        $book=bookModel::where('bookID',$bookID)->find();
        $this->assign('book',$book);
        $SLID=input('get.SLID');
        $this->assign('SLID',$SLID);
        return  $this->fetch();
    }
    
    //添加评论
    public function addComment(){
        if(empty(session('userEmail'))){
            $this->error('请先登录!','login/login');
            //             return $this->fetch('login/login');
            //             return "false";
        }

        $email=session('userEmail');
        $content=input('post.content');
        $bookID=input('get.bookID');
        $score=input('post.score');
        $sendTime=date('Y-m-d');
        //         echo $content;
        if($content==""){
            $this->error('内容不能为空!');
        }
        if(!preg_match("/^[1-5]{1}$/",$score)){
            $this->error('评分范围是1-5');
        }
        $comment=new commentModel();
        $comment->email=$email;
        $comment->bookID=$bookID;
        $comment->content=$content;
        $comment->score=$score;
        $comment->sendTime=$sendTime;
        $comment->save();
        
        //修改showShopList的ifComment
        $SLID=input('get.SLID');
        $showShopList=showShopListModel::where('SLID',$SLID)->find();
        if($showShopList->ifComment==0){
            $showShopList->ifComment=1;
            $showShopList->save();
        }else{
            $this->error('该商品已评价!');
        }
        
//         $this->assign('bookID',$bookID);
        $this->redirect('bookdetail/detail',array('bookID'=>$bookID));
    }
    
}