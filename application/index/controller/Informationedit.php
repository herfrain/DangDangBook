<?php
namespace app\index\controller;
use think\Controller;
use app\index\model\Member as memberModel;
class Informationedit extends Controller
{
    //显示个人信息
    public function informationEdit()
    {
        $email=session('userEmail');
        if(empty($email)){
            $this->error('请先登录!','login/login');
        }
        $user=memberModel::where('userEmail',$email)->find();
        $this->assign('user', $user);
        
        return $this->fetch();
    }
    
    //编辑
    public function edit(){
        $email=session('userEmail');
        $userName=input('post.userName');
        $userMobile=input('post.userMobile');
        $userAddress=input('post.userAddress');
        
        $user=memberModel::where('userEmail',$email)->find();
        $user->userName=$userName;
        $user->userMobile=$userMobile;
        $user->userAddress=$userAddress;
    }
    
}