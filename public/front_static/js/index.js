var startScroll=setInterval(moveR,3000);
	
    /*当鼠标进入盒子，盒子两边的圆形显示效果*/
    function $(id){return document.getElementById(id);}
    $("box").onmouseover=function () {
        $("round").style.display="block";
        clearInterval(startScroll);
//        console.log(1);
    }
    $("box").onmouseout=function () {
        $("round").style.display="none";
       	startScroll=setInterval(moveR,3000);
    }
    
    var image = $("image").getElementsByTagName("li");
    var list =$("list").getElementsByTagName("li");
    for (var i = 0; i < image.length; i++) {
        list[i].index = i;
        /*当鼠标放在图片下方小圆点上时图片自动切换*/
        list[i].onclick = function(){
            for(var j = 0;j<list.length;j++){
                list[j].className="";
                image[j].className="";
            }
            this.className="list_show";
            image[this.index].className="image_show";
        }
    }
    
    //左右箭头按钮
    var round_r = $("round_r");
    var round_l = $("round_l");
    round_r.onclick=moveR;
    round_l.onclick=moveL;
    function moveR(){
        move(false);
    }
    function moveL(){
        move(true);
    }
    
    function move(boolean){
        for(var i = 0;i<list.length;i++){
            if(list[i].className=="list_show"){
                var index = i;
                break;
            }
        }
        boolean ?(index == 0? index= list.length-1:index--):(index == list.length-1? index= 0:index++);
        for(var j = 0;j<list.length;j++){
            list[j].className="";
            image[j].className="";
        }
        list[index].className="list_show";
        image[index].className="image_show";
    }