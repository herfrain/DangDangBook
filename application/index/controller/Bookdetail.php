<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use app\index\model\Book as bookModel;
use app\index\model\Cart as cartModel;
use app\index\model\Comment as commentModel;

use app\index\model\Collection as collectionModel;
//命名是首字母大写，其余都是小写
class Bookdetail extends Controller
{
    public function detail()
    {
        //商品详情
        
        //获取bookID
        $bookID=input('get.bookID');
//         echo $bookID;
        //检索该book,find()找一个,select()找集合
        $book=bookModel::where('bookID',$bookID)->find();
        $this->assign('book',$book);
        
        //推荐书籍，找同类型的书
        $recommendBooks=bookModel::where('bClass',$book->bClass)->where('bookID','<>',$bookID)->limit(4)->select();
        $this->assign('recommendBooks',$recommendBooks);
        
        //评论
        $comments=commentModel::where('bookID',$bookID)->select();
//         echo empty($comments);
        $this->assign('comments',$comments);
        
        //如果已登陆，则看这个账号有没有收藏
        if(!empty(session('userEmail'))){
            $email=session('userEmail');
            $collection=collectionModel::where('email',$email)->where('bookID',$bookID)->find();
            $this->assign('collection',$collection);
        }
        
        
        return  $this->fetch();
    }
    
    //加入购物车，需要改cart表
    public function addToCart(){
        if(empty(session('userEmail'))){
            $this->error('请先登录!','login/login');
        }
        
        //需要知道是“立即购买”还是“加入购物车”
        $action=input('get.action');
        
        $email=session('userEmail');
        $bookID=input('post.bookID');
        $num=input('post.num');
        
        $cart=cartModel::where('email',$email)->where('bookID',$bookID)->find();
        if(empty($cart)){
            $cart=new cartModel();
            $cart->email=$email;
            $cart->bookID=$bookID;
            $cart->num=$num;//默认数量为1
            $cart->save();
        }else {
            $cart->num=$cart->num+$num;
            $cart->save();
        }
        
        
    }
    
    //添加收藏
    public function addToCollection(){
        if(empty(session('userEmail'))){
//             $this->error('请先登录!','login/login');
            return "login";
        }
        
        $email=session('userEmail');
        $bookID=input('post.bookID');
        
        $old=collectionModel::where('email',$email)->where('bookID',$bookID)->find();
        if(empty($old)){
            $collection=new collectionModel();
            $collection->email=$email;
            $collection->bookID=$bookID;
            $collection->save();
            return "add";
            
        }else{
            //再次点击收藏则删除
            $old->delete();
            return "delete";
        }
        
    }
    
}
