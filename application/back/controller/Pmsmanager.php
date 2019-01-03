<?php
namespace app\back\controller;
use app\back\model\Member;
use think\Controller;
use think\Db;
use think\console\input\Option;
use think\Session;

class Pmsmanager extends Base{
    protected $fun=['2'];
    public function memberList(){
    
        
        $list = Member::paginate(8);
        $page=$list->render();
        $this->assign('list',$list);
        $this->assign('page',$page);
        
        return  $this->fetch();
    }
    public function change($email) {
       
       $userEmail=$email;
       dump($email);
       $member=Member::where('userEmail',$userEmail)->find();
       /* dump('permission'.$email); */
       $date=input('post.');
       dump($date);
       
       /* str_replace('_','.' ,$date['permission'.$email]); */
       $result=$member->save([
           'permission'=> $date['permission']]);
       
        //$this->success("修改成功","pmsmanager/memberlist",null,1);
        return  $this->redirect("memberlist");
       
    }
    
    }

