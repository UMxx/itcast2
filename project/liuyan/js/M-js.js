$(function () {

    //热门活动
    $(".hobox1 a").mouseenter(function () {
        $(this).children("img").stop().animate({
            "width": "110%",
            "top": "-5%",
            "left": "-5%",
        }, 500)
        $(".hobox1 a").mouseleave(function () {
            $(this).children("img").stop().animate({
                "width": "100%",
                "top": "0",
                "left": "0",
            }, 500)
        })
    })


    //高端定制
    $(".sypic .bd li").eq(1).hide();
    $(".sypic .bd li").eq(2).hide();
    $(".sypic .hd li").eq(0).css("backgroundColor", "#383b4a");
    $(".sypic .hd li").mouseenter(function () {
        var index = $(this).index();
        $(this).css(
            "backgroundColor", "#383b4a"
        ).animate({
                "width": "28%"
            }
            , 500).siblings()
            .css("backgroundColor", "#7edab2")
            .animate({
                "width": "33%"
            }, 500);
        $(".sypic .bd li").eq(index).fadeIn(800)
            .siblings().hide();
    })
    $(".sypic .box").mouseleave(function () {
        $(".sypic .hd li").css({"backgroundColor": "#7edab2", "width": "33%"})
        $(".sypic .bd li").hide();
        $(".sypic .bd li").eq(0).fadeIn(800);
        $(".sypic .hd li").eq(0).css({"backgroundColor": "#383b4a"});
    })

    //客片大赏
    $(".hobox2 .vo").mouseenter(function () {
        $(this).children("div").stop().animate({
            top: "0%",
        })
    })
    $(".hobox2 .vo").mouseleave(function () {
        $(this).children("div").stop().animate({
            top: "-100%",
        }, 50)
    })

    //开始 蜂窝图片
    var flag = true
    $(document).scroll(function () {
        var top = $(document).scrollTop();
        console.log(top);
        if (flag) {
            if (top >= 600) {
                $("#albumIndex .li_1").animate({
                    top: "186px",
                    left: "473px",
                })
                $("#albumIndex .li_2").animate({
                    top: "186px",
                    left: "605px",
                })
                $("#albumIndex .li_3").animate({
                    top: "301px",
                    left: "668px",
                })
                $("#albumIndex .li_4").animate({
                    top: "416px",
                    left: "605px",
                })
                $("#albumIndex .li_5").animate({
                    top: "416px",
                    left: "473px",
                })
                $("#albumIndex .li_6").animate({
                    top: "301px",
                    left: "407px",
                })
                flag = false;
            }
        }

    });


    $("#albumBg .cover li").eq(0).show();
    $("#albumBg .cover li").eq(1).hide();
    $("#albumBg .cover li").eq(2).hide();
    $("#albumBg .cover li").eq(3).hide();
    $("#albumBg .cover li").eq(4).hide();
    $("#albumBg .cover li").eq(5).hide();

    $("#albumBg .init li").mouseenter(function () {
        var index = $(this).index();
        $("#albumBg .cover li").eq(index).fadeIn().siblings().hide();
    })
    $("#albumBg .cover").mouseleave(function () {
        $("#albumBg .cover li").eq(0).fadeIn().siblings().hide();
    })


    var data = [
        {
            top: "186px",
            left: "605px",
        },
        {
            top: "301px",
            left: "668px",
        },
        {
            top: "416px",
            left: "605px",
        },
        {
            top: "416px",
            left: "473px",
        },
        {
            top: "301px",
            left: "407px",
        },
        {
            top: "186px",
            left: "473px",
        }
    ]

    function assign() {
        $("#albumIndex li").each(function (i) {
            $(this).animate(data[i])

        })
    }

    $(".bl_logo").stop().click(function () {
        assign()
        data.push(data.shift());
    })
//开始 行程报价

    $(".screen-pic li").mouseenter(function () {
        $(this).stop().animate({
            width: "25.36%",
        }, 500).siblings().stop().animate({
            width: "14.86%",
        }, 500)
        $(this).find(".photo-mask").css({
            "opacity": 0
        }).parent().siblings().children(".photo-mask").css({
            "opacity": 0.4

        })
        $(this).find(".photo-text-mask").stop().animate({
            height: "50%",
        }).parent().siblings().children(".photo-text-mask").stop().animate({
            height: 0,
        })
    })
    $(".screen-pic li").mouseleave(function () {
        $(this).stop().animate({
            width: "16.66%",
        }, 500).siblings().stop().animate({
            width: "16.66%",
        }, 500)
        $(this).find(".photo-mask").css({
            "opacity": 0.2
        }).parent().siblings().children(".photo-mask").css({
            "opacity": 0.2

        })
        $(this).find(".photo-text-mask").stop().animate({
            height: 0,
        }).parent().siblings().children(".photo-text-mask").stop().animate({
            height: 0,
        })
    })
    //map
    $(".map-big").hide();
    $(".cris-li a").mouseenter(function () {
        // var index=$(this).index
        $(".cris-li .map-small").stop().fadeOut(200)
        $(".cris-li .map-small").siblings("a").fadeOut(200);
        $(this).siblings("p").stop().fadeIn(300)
        $(this).stop().fadeIn(300)
        // $(".cris-li a").hide()
    })
    $(".cris-li a").mouseleave(function () {
        // $(this).siblings("a").show(400)

        $(".cris-li .map-small").stop().fadeIn(300)
        $(".cris-li .map-small").siblings("a").fadeIn(300);
        $(this).siblings("p").stop().fadeOut(200)
    })
    $(".cris-li .point1").mouseenter(function () {
        $("#p").removeClass()
        $("#p").addClass("mapfloor1")
    })
    $(".cris-li .point2").mouseenter(function () {
        $("#p").removeClass()
        $("#p").addClass("mapfloor2")
    })
    $(".cris-li .point3").mouseenter(function () {
        $("#p").removeClass()
        $("#p").addClass("mapfloor3")
    })
    $(".cris-li .point4").mouseenter(function () {
        $("#p").removeClass()
        $("#p").addClass("mapfloor4")
    })
    $(".cris-li .point5").mouseenter(function () {
        $("#p").removeClass()
        $("#p").addClass("mapfloor5")
    })
    $(".cris-li .point6").mouseenter(function () {
        $("#p").removeClass()
        $("#p").addClass("mapfloor6")
    })

})