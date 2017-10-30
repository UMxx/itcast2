/**
 * Created by anxiang on 2016/8/5.
 */
$(function(){
    //海外样片图片位置随机出现特效
    $(".chinacon>ul>li").mouseenter(function(){
        var ran = Math.floor(Math.random()*$(".chinacon>ul>li").length);
//                var ran = 1;
        if(ran==0){
            $(this).find("i").css({"top":"450px",left:0})
                .stop(false,true).animate({top:"0px",opacity:1},500);
        }
        if(ran==1){
            $(this).find("i").css({"top":"-450px",left:0})
                .stop(false,true).animate({top:"0px",opacity:1},500);
        }
        if(ran==2){
            $(this).find("i").css({"left":"-293px",top:0})
                .stop(false,true).animate({left:0,opacity:1},500);
        }
        if(ran==3){
            $(this).find("i").css({"left":"293px",top:0})
                .stop(false,true).animate({left:0,opacity:1},500);
        }
    });
    $(".chinacon>ul>li").mouseleave(function(){
        var ran = Math.floor(Math.random()*$(".chinacon>ul>li").length);
        if(ran==0){
            $(this).find("i")
                .stop(false,true).animate({top:"450px",left:0,opacity:0},500);
        }
        if(ran==1){
            $(this).find("i")
                .stop(false,true).animate({top:"-450px",left:0,opacity:0},500);
        }
        if(ran==2){
            $(this).find("i")
                .stop(false,true).animate({left:"293px",top:0,opacity:0},500);
        }
        if(ran==3){
            $(this).find("i")
                .stop(false,true).animate({left:"-293px",top:0,opacity:0},500);
        }
    });
    //点击随机生成五个数字特效
    $(".pre_iloft").click(function(){
        var spans = $(".pre_iloft>p>span");
        for(var i = 0;i<spans.length;i++){
            var ran = - Math.floor(Math.random()*50)*185+"px";
            $(".pre_iloft>p>span").eq(i).animate({top:ran},5000);
        }
    });
    //微博列表定时移动
    for(var i = 0;i<$(".weibo_wrap .bd>li").length;i++){
        $(".weibo_wrap .bd>li").eq(i).attr("jishu",i);
    }
    var timmer = setInterval(function(){
        $(".hd>li").eq($(".weibo_wrap .bd>li").eq(0).attr("jishu")).addClass("on")
            .siblings().removeClass("on");
        $(".weibo_wrap .bd").animate(
            {top:"-=110px"}
            ,1000,function(){
                $(".weibo_wrap .bd").append($(".weibo_wrap .bd>li").eq(0));
                $(".weibo_wrap .bd").css("top","0px");
            })
    },1500);
    //最新活动特效
    $(".soul>li").mouseenter(function(){
        var index = $(this).index();
        $(".sobox1>a").eq(index).stop(true,true).animate({opacity:1},500)
            .siblings("a").animate({opacity:0},1500);
        $(this).find(".soul_li_b").stop(true,false).animate({width:"100%",opacity:1},500)
            .find(".jiage").animate({width:0},500);
    });
    $(".soul>li").mouseleave(function(){
        $(this).find(".soul_li_b").stop(true,false).animate({width:"0",opacity:0},500);
    });
    //鼠标滑动到五数字开始执行
    var flag = true;
    window.addEventListener("scroll",function(e){
        var top = $(this).scrollTop();
        console.log(top);
        if(top>1100&&top<1400&&flag==true){
            $(".pre_iloft").click();
            flag = false;
        }
    });
    //荷尔蒙系列特效-美女图li特效
    var timmer0 = 0;
    timmer0 = setInterval(function(){
        $(".right").click();
    },2000);
    $(".zidingyi_t>ul>li").mouseenter(function(){
        clearInterval(timmer0);
        $(this).find(".shuffer-line").stop().animate({height:"120px",opacity:"0.7"},500);
        $(this).find(".stars-info").stop(false,true).animate({bottom:"-=20px"},500);
        $(this).animate({opacity:"1"},500);
        $(this).stop(false,true);
    });
    $(".zidingyi_t>ul>li").mouseleave(function(){
        $(this).find(".shuffer-line").stop().animate({height:"6px",opacity:"1"},500);
        $(this).find(".stars-info").stop(false,true).animate({bottom:"+=20px"},500);
        $(this).animate({opacity:"0.7"},500);
        $(this).stop(false,true);
    });
    //荷尔蒙系列-箭头显示隐藏
    $(".zidingyi_t").mouseenter(function(){
        clearInterval(timmer0);
        $(".jiantou").show();
    });
    $(".zidingyi_t").mouseleave(function(){
        timmer0 = setInterval(function(){
            $(".right").click();
        },2000);
        $(".jiantou").hide();
    });
    //荷尔蒙系列-点击箭头
    var left = 0;
    $(".left").click(function(){
        $(".zidingyi_t>ul").animate({left:"-=240px"},1000,function(){
            $(".zidingyi_t>ul").append($(".zidingyi_t>ul>li").eq(0));
            $(".zidingyi_t>ul").css("left","-240px");
        });
    });
    var right =$(".zidingyi_t>ul>li").length-1;
    $(".right").click(function() {
        $(".zidingyi_t>ul").animate({left:"+=240px"},1000,function(){
            $(".zidingyi_t>ul").prepend($(".zidingyi_t>ul>li").eq($(".zidingyi_t>ul>li").length-1));
            $(".zidingyi_t>ul").css("left","-240px");
        });
    });
    //底部图片可拖拉换位置特效
    $(".ulL>li>.newcon").mousedown(function(){
        //console.log($(this).position());
        $(document).mousemove(function(){
            alert(2);
        });
    });
    //热门城市特效
    $(".soul_ta .soul>li").mouseenter(function(){
        var left_a =  $(".twoToone>a.left_a").eq($(this).index());
        var right_a = $(".twoToone>a.right_a").eq($(this).index());
        left_a.stop().animate({left:"0px",opacity:1},500,function(){
            $(this).parent().siblings(".twoToone").find(".left_a").stop().animate({left:"-600px",opacity:"0"},500);
        });
       right_a.stop().animate({right:"0px",opacity:1},500,function(){
           $(this).parent().siblings(".twoToone").find(".right_a").stop().animate({right:"-600px",opacity:"0"},500);
        });
    });

    //----------------------------

});