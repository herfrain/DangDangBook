<?php
namespace app\back\controller;

use think\Controller;
use think\Db;
use app\index\model\Comment as commentModel;
class Commentmanager extends Base{
    protected $fun=['1'];
    public function reply(){
        $commentID=input('post.commentID');

        $comment=commentModel::where('commentID',$commentID)->find();
        if(!empty($comment)){
            $reply=input('post.reply');
            $comment->reply=$reply;
            $comment->save();
            
            return "success";
        }else{
            return "fail";
        }
        
    }
    
    //显示该图书的评价
    public function commentList(){
        $bookID=input('get.bookID');
        
        //限制10条然后分页，需要传值bookID
        $comments=commentModel::where('bookID',$bookID)->order('commentID desc')->paginate(10,false,['query'=>array('bookID' => $bookID)]);
        $page = $comments->render();//分页
        
        $this->assign('comments',$comments);
        $this->assign('page',$page);
        return  $this->fetch();
    }
}