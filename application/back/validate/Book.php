<?php
namespace app\back\validate;

use think\Validate;

class Book extends Validate
{
    protected $rule = [
        'bookID'  =>  'number|require',
        'bName'  =>  'require',
        'bPriceB'=>'number',
        'bPriceS'=>'number',
        'bPubTime'=>'date'
       /*  'bPubTime'=>'dateFormat:y-m-d' */
        
    ];
    
    protected $message = [
       'bookID.require'  =>  '图书编号不可为空',
        'bookID.number'  =>  '图书编号只可为数字',
       'bName.require'  =>  '书本名不可为空',
       'bPriceB'  =>  '价格只能为数字',
       'bPriceS'  =>  '价格只能为数字',
       'bPubTime'  =>  '时间格式为年-月-日',
    ];
    
    
}