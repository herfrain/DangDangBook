<?php
namespace app\back\controller;
use app\back\model\Book;
use think\Controller;
use think\Db;
use think\console\input\Option;
use think\Session;

class Bookmanager extends Base{
   protected $fun=['1'];
    //书列表
    public function bookList(){
 
     //$list=Book::all();
     $list = Book::paginate(8);
     $page=$list->render();
     $this->assign('list',$list);
     $this->assign('page',$page);
       
     return  $this->fetch();
    }
    
    public function index(){
        return  $this->fetch();
    }
    
    //添加书
    public function bookAdd(){

     
        return  $this->fetch();
    }
    
    function getExt($filename)
    {
        $arr = explode('.',$filename);
        return array_pop($arr);;
    }
    
    public function picture()
    {
        $date=input('post.');
        $bookID  = $date['bookID'];
        //dump($date['image']);
        // 获取书本ID作为唯一图片名字
        $file = request()->file('image');
        //dump($file);
        //dump($file);echo '</br>';
        //校验器，判断图片格式是否正确
        if (true !== $this->validate(['image' => $file], ['image' => 'require|image'])) {
            $this->error('请选择图像文件');
        } else {
            //$ext=$this->getExt();
            //dump($_FILES["image"]);
            //dump($_FILES["image"]['name']);
            $ext=pathinfo($_FILES["image"]['name'])['extension'];//获得图片文件后缀名
            //dump($ext);
            $stored_path = ROOT_PATH.'public'.DS.'back_static'.DS.'pictures'.DS.basename($bookID.'.'.$ext);
            
            if(move_uploaded_file($_FILES['image']['tmp_name'],$stored_path)){
               
                echo "图片上传成功";
            }else{
                echo 'Stored failed:file save error';
            }
        }
     
    }
    
    public function picture_edit()
    {
        $date=input('post.');
        $bookID  = $date['bookID'];
    
        // 获取书本ID作为唯一图片名字
        $file = request()->file('image');
        //dump($file);
        //dump($file);echo '</br>';
        //校验器，判断图片格式是否正确
        if ($file){
            if (true !== $this->validate(['image' => $file], ['image' => 'require|image'])) {
                $this->error('请选择图像文件');
            } else {
                $ext=pathinfo($_FILES["image"]['name'])['extension'];
                $stored_path = ROOT_PATH.'public'.DS.'back_static'.DS.'pictures'.DS.basename($bookID.'.'.$ext);
            
                if(move_uploaded_file($_FILES['image']['tmp_name'],$stored_path)){
                    session('is_edit','1');
                    echo "图片上传成功";
                }else{
                    echo 'Stored failed:file save error';
                }
            }
              
        }
        
    }
    
    public function Add(){
       
        
        $date=input('post.');
       
        $validate = validate("Book");
       
        
        if(!$validate->check($date)){
            //dump($validate->getError());
            $this->error($validate->getError());
        }
        $this->picture();
        
      
        $book = new Book;
        $exist = Book::where('bookID', $date['bookID'])->find();
        if(!$exist){
            $ext=pathinfo($_FILES["image"]['name'])['extension'];
            $result=$book->save([
                'bookID'  => $date['bookID'],
                
                'bName'  => $date['bName'],
                'bAuthor'  => $date['bAuthor'],
                'bPublisher'  => $date['bPublisher'],
                'bPubTime'  => $date['bPubTime'],
                'bClass'  => $date['bClass'],
                'bPriceS'  => $date['bPriceS'],
                'bPriceB'  => $date['bPriceB'],
                'bContentInfo'  => $date['bContentInfo'],
                'bAuthorInfo'  => $date['bAuthorInfo'],
                'bPicture' => '/DangDangBook/public/back_static/pictures/'.$date['bookID'].'.'.$ext
                 
            ]);
            if($result){
                $this->success("添加成功",'bookmanager/booklist');
            }else{
                $this->error("添加失败");
            }  
        }else{
            $this->error("添加失败,图书编号不能重复");
        }
        
       
        return  $this->fetch();
    }
   
    //查看书详情
    
    public function bookInformationEdit($bookID){
        $this->assign('bookID',$bookID);
        $book = Book::where('bookID', $bookID)->find();
        
       /*  dump($book);
        die; */
        $this->assign([
            'bName'=>$book['bName'],
            'bAuthor'  => $book['bAuthor'],
            'bPublisher'  => $book['bPublisher'],
            'bPubTime'  => $book['bPubTime'],
            'bClass'  => $book['bClass'],
            'bPriceS'  => $book['bPriceS'],
            'bPriceB'  => $book['bPriceB'],
            'bContentInfo'  => $book['bContentInfo'],
            'bAuthorInfo'  => $book['bAuthorInfo'],
            'bPicture' => $book['bPicture']
        ]);
//         dump($book['bPicture']);
        
        return  $this->fetch();
    }
    
    //编辑
    public function Edit(){
        $date=input('post.');
         
        $validate = validate("Book");
         
        
        if(!$validate->check($date)){
            $this->error($validate->getError());
        }
        $this->picture_edit();
      
        $bookID=input('get.bookID');
        
        $book=Book::where('bookID',$bookID)->find();
      
        $book->bName=input('post.bName');
        $book->bAuthor=input('post.bAuthor');
        $book->bPublisher=input('post.bPublisher');
        $book->bPubTime=input('post.bPubTime');
        $book->bClass=input('post.bClass');
        $book->bPriceS=input('post.bPriceS');
        $book->bPriceB=input('post.bPriceB');
        $book->bContentInfo=input('post.bContentInfo');
        $book->bAuthorInfo=input('post.bAuthorInfo');
        if(session('?is_edit')){
            $ext=pathinfo($_FILES["image"]['name'])['extension'];
            $book->bPicture='/DangDangBook/public/back_static/pictures/'.$bookID.'.'.$ext;
        }
       
        $book->save();
        $this->success("修改成功",'bookmanager/booklist');
        return  $this->fetch();
    } 
    
    //删除
    function deleteBook(){
        $bookID=input('post.bookID');
        $book=Book::where('bookID',$bookID)->find();
        if(!empty($book)){
            $book->delete();
        }
            
    }
    
}