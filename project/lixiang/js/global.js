//探索唯一视觉全球旅拍部分
$(function () {
    $("#kcon .pre a").mouseenter(function () {
        //var span=$(this).children().children("span");
        $(this).stop(true, false).animate({"opacity": "1"}, 100);
        $(this).parent().siblings().children().stop(true, false).animate({"opacity": "0.3"}, 200);
        $(this).parent().parent().siblings().children().children().stop(true, false).animate({"opacity": "0.3"}, 200);
        /* $(this).css("opacity", "1");
         $(this).parent().siblings().children().css("opacity", "0.3");
         $(this).parent().parent().siblings().children().children().css("opacity", "0.3");*/
    })
    $("#kcon .pre").mouseleave(function () {
        $("#kcon .pre a").stop(true, false).animate({"opacity": "1"}, 200);
    })
});


//全球旅拍最新作品部分城市
$(function () {
    $(".dizhi span").mouseenter(function () {
        $(this).stop(true, false).animate({"top": "-12px"}, 300)
    });
    $(".dizhi span").mouseleave(function () {
        $(this).stop(true, false).animate({"top": "0px"}, 300)
    });
});


//全球旅拍最新作品部分图片
$(function () {
    //1.先找到li,然后注册鼠标滑过li事件

    $(".zxzp1>.scale>li").mouseenter(function () {
        //2.滑过当前li时，进行事件，即图片变大
        $(this).children().stop().animate({
            "height": "500px",
            "width": "322px",
            "top": "-21px",
            "left": "-15px",
            "z-index": "1"
        }, 400);
        $(this).children().children("img").stop().animate({
            "height": "79.2%",
            "width": "100%",
        }, 400);
        $(this).children().children(".pt10").stop().animate({
            "padding-left": "15px"
        }, 400);
        $(this).children().children(".pb30").stop().animate({
            "padding-left": "15px"
        }, 400);
    });
    $(".zxzp1>.scale>li").mouseleave(function () {
        //2.滑过当前li时，进行事件，即图片变大
        $(this).children().stop().animate({
            "height": "458px",
            "width": "292px",
            "top": "0",
            "left": "0",
            "z-index": "0"
        }, 400);
        $(this).children().children("img").stop().animate({
            "height": "360px",
            "width": "292px",
        }, 400);
        $(this).children().children(".pt10").stop().animate({
            "padding-left": "15px"
        }, 400);
        $(this).children().children(".pb30").stop().animate({
            "padding-left": "15px"
        }, 400);

    });
})

//用客照晒幸福
$(function () {
    //1.找到li注册鼠标进入事件
    $(".kezhao>.scale>li").mouseenter(function () {
        $(this).children("span").stop(false, true).slideDown(400);
    });
    $(".kezhao>.scale>li").mouseleave(function () {
        $(this).children("span").stop(false, true).slideUp(400);
    });
});

//微电影部分特效
$(function () {
    //鼠标进入img时，透明度发生变化
    $("#mr_frUl1 img").mouseenter(function () {
        $(this).css("opacity", "0.4");
        clearInterval(timer);

    });
    $("#mr_frUl1 img").mouseleave(function () {
        $(this).css("opacity", "0.62");
        timer = setInterval(playNext, 2400);
    });
    //轮播图
    var liWidth = $(".mr_frUl>ul>li").width() + 20;
    console.log(liWidth);
    var ulPos = $(".mr_frUl>ul").position().left;
    console.log(ulPos);
    //自动轮播
    //var timer=null;

    //var flag=false;// 开始时点击没有进行
    $("#right").mouseenter (function(){
        clearInterval(timer);
    });
    $("#right").mouseleave (function(){
        timer = setInterval(playNext, 2400);
    });
    $("#left").mouseenter (function(){
        clearInterval(timer);
    });
    $("#left").mouseleave (function(){
        timer = setInterval(playNext, 2400);
    });
    $("#right").click(function () {
        $(".mr_frUl>ul").animate({
            left: "+=456px"
        }, 1000, function () {


            $(".mr_frUl>ul").animate({left: "-=50px"}, 700, function () {
                $(".mr_frUl>ul>li:first").before($(".mr_frUl>ul>li:last"));
                $(".mr_frUl>ul").css("left", "-2436px")
            })

        })
    });
    $("#left").click(function () {
        clearInterval(timer);
        $(".mr_frUl>ul").animate({
            left: "-=456px"
        }, 1000, function () {
            $(".mr_frUl>ul").animate({left: "+=50px"}, 700, function () {
            $(".mr_frUl>ul>li:last").after($(".mr_frUl>ul>li:first"));
            $(".mr_frUl>ul").css("left", "-2436px")
            })
        })
    })
    //每隔一秒播放下一张
    var timer = setInterval(playNext, 2400);
    function playNext() {
        $("#right").click();
    }

});
