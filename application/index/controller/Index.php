<?php
namespace app\index\controller;
use app\extra\ChromePhp;
use think\Controller;
use think\Db;
use app\index\model\Book as bookModel;
use think\Console;
class Index extends Controller
{

    
    public function index()
    {
        //实现搜索功能
        //获取input输入框内容
        $bName=input('post.bookName');
        //默认展示所有book
        $results=bookModel::paginate(20);

        //如果输入框有名字
        if(!empty($bName)){
            if($bName=="link start"){
                return $this->redirect('back/login/login');
            }
            //查找书名、书作者、书类型
            $results=bookModel::where(" bName like '%".$bName."%' "."or bAuthor like '%".$bName."%' "."or bClass like '%".$bName."%' ")->paginate(20);
        }
        $page=$results->render();
        $this->assign('page',$page);
        //返回搜索到的商品对象
        $this->assign('books',$results);
        
        //书类型
        $classes=bookModel::field('bClass')->distinct(true)->select();
        $this->assign('classes',$classes);
        return  $this->fetch();
    }
    
    
    //用ajax实现筛选
    //html界面要新增筛选条件
    public function bookClass()
    {
        $class=input('get.class');
//         echo $class;
        $results=bookModel::where('bClass',$class)->paginate(20);
        $page=$results->render();
        $this->assign('page',$page);
        $this->assign('books',$results);
        
        $classes=bookModel::field('bClass')->distinct(true)->select();
        $this->assign('classes',$classes);
        return  $this->fetch('index');
    }
    
}
