/**
 * Created by Administrator on 2016/8/5.
 */
$(function () {
    var flag = true;
    var cls=false;
    $("#canvers").mousemove(function (e) {
        // console.log($("#canvers").offset());
        //bject {top: 199, left: 769.59375}560 400
        //1329  599

        if ((e.clientY >= 170 && e.clientY < 306) && (e.clientX >= 769 && e.clientX < 875)) {//106
            $("#weapon").css({"backgroundPosition": "-984px 0px"});
            $("#player").css({"backgroundPosition": "-488px 0px", "bottom": "37px", "left": "75px"});//37 75
            $(".bullet").css({"background": "url(images/up.png) no-repeat", "width": "13px", "height": "58px"});

        }
        if ((e.clientY >= 170 && e.clientY < 306) && (e.clientX >= 875 && e.clientX < 981)) {//106
            $("#weapon").css({"backgroundPosition": "-861px 0px"});
            $("#player").css({"backgroundPosition": "-427px 0px", "bottom": "44px", "left": "67px"});//45 72
            $(".bullet").css({"background": "url(images/up.png) no-repeat", "width": "13px", "height": "58px"});
        }
        if ((e.clientY >= 170 && e.clientY < 306) && (e.clientX >= 981 && e.clientX < 1087)) {//106
            $("#weapon").css({"backgroundPosition": "-738px 0px"});
            $("#player").css({"backgroundPosition": "-366px 0px", "bottom": "38px", "left": "45px"});//45 67
            $(".bullet").css({"background": "url(images/up.png) no-repeat", "width": "13px", "height": "58px"});
        }
        if ((e.clientY >= 170 && e.clientY < 306) && (e.clientX >= 1087 && e.clientX < 1193)) {//106
            $("#weapon").css({"backgroundPosition": "-615px 0px"});//
            $("#player").css({"backgroundPosition": "-305px 0px", "bottom": "43px", "left": "35px"});//43 43  28  46
            $(".bullet").css({"background": "url(images/upr.png) no-repeat", "width": "45px", "height": "45px"});
        }
        if ((e.clientY >= 170 && e.clientY < 200) && (e.clientX >= 1193 && e.clientX < 1329)) {//106
            $("#weapon").css({"backgroundPosition": "-492px 0px"});
            $("#player").css({"backgroundPosition": "-244px 0px", "bottom": "28px", "left": "46px"});//43 36
            $(".bullet").css({"background": "url(images/upr.png) no-repeat", "width": "45px", "height": "45px"});
        }
        if ((e.clientY >= 200 && e.clientY < 306) && (e.clientX >= 1193 && e.clientX < 1329)) {//106
            $("#weapon").css({"backgroundPosition": "-369px 0px"});
            $("#player").css({"backgroundPosition": "-183px 0px", "bottom": "49px", "left": "24px"});//49 24
            $(".bullet").css({"background": "url(images/upr.png) no-repeat", "width": "45px", "height": "45px"});
        }
        if ((e.clientY >= 306 && e.clientY < 412) && (e.clientX >= 1193 && e.clientX < 1329)) {//106
            $("#weapon").css({"backgroundPosition": "-246px 0px"});
            $("#player").css({"backgroundPosition": "-122px 0px", "bottom": "54px", "left": "23px"});//54 23
            $(".bullet").css({"background": "url(images/image2403.png) no-repeat", "width": "58px", "height": "13px"});
        }
        if ((e.clientY >= 412 && e.clientY < 430) && (e.clientX >= 1193 && e.clientX < 1329)) {//106
            $("#weapon").css({"backgroundPosition": "-123px 0px"});
            $("#player").css({"backgroundPosition": "-61px 0px", "bottom": "67px", "left": "22px"});//67 22
            $(".bullet").css({"background": "url(images/image2403.png) no-repeat", "width": "58px", "height": "13px"});
        }
        if ((e.clientY >= 430 && e.clientY < 600) && (e.clientX >= 1193 && e.clientX < 1329)) {//106
            $("#weapon").css({"backgroundPosition": "0px 0px"});
            $("#player").css({"backgroundPosition": "0px 0px", "bottom": "67px", "left": "10px"});//69 10
            $(".bullet").css({"background": "url(images/image2403.png) no-repeat", "width": "58px", "height": "13px"});
        }
    });
    $("#canvers").click(function (e) {
        var $bullet = $("<div class='bullet'></div>");
        $("#bullet").append($bullet)
        $(".bullet").animate({"opacity": "0.9", "top": (e.clientY - 199), "left": (e.clientX - 769)}, 100, function () {
            $(this).removeClass("bullet").addClass("bullets");
            setTimeout(function () {
                $("#bullet div:not(.bullet)").remove();
            }, 50);
        });
    });
    $("#targetDown>span").mouseenter(function () {
        if (flag != false) {
            $(this).css({
                "background": "url(images/targets.png) no-repeat",
                "animation": "targets 1s steps(1) infinite"
            });
        }
    });
    $("#targetDown>span").mouseleave(function () {
        if (flag != false) {
            $(this).css({"background": "url('images/sta.png') no-repeat", "animation": "statics 1s steps(1) infinite"});
        }
    });
    $("#targetDown>span").click(function () {
        flag = false;
        $(this).css({"background": "url(images/break.png) no-repeat", "animation": "break 1s steps(1) infinite"});
        setTimeout(function () {
            $("#targetDown>span").css({
                "background": "url(images/gogogo.png) no-repeat",
                "animation": "gogogo 1s steps(1) infinite"
            });
            $("#targetDown").animate({"right": "555px"}, 3000, function () {
                $(this).remove();
            });
        }, 1000);
    });
    $("#targetUp").mouseenter(function () {
        if (flag != false) {
            $("#targetDown>span").css({
                "background": "url(images/leaves.png) no-repeat",
                "animation": "leaves 1s steps(1) infinite"
            });
        }

    });
    $("#targetUp").mouseleave(function () {
        if (flag != false) {
            $("#targetDown>span").css({
                "background": "url('images/sta.png') no-repeat",
                "animation": "statics 1s steps(1) infinite"
            });
        }
    });
    $("#targetUp").click(function () {
        $("#targetUp>span").css({
            "background": "url(images/down.png) no-repeat",
            "animation": "down 1s steps(1) infinite"
        });
        $("#targetUp>i").css({"display": "none"});
        $("#targetUp").animate({"top": "235px"}, 1000, function () {
            $("#targetUp>span").css({
                "background": "url(images/yessir.png) no-repeat",
                "animation": "yessir 1s steps(1) infinite"
            });
            setTimeout(function () {
                $("#targetUp>span").css({
                    "background": "url(images/gogogo.png) no-repeat",
                    "animation": "gogogo 1s steps(1) infinite"
                });
                $("#targetUp").animate({"right": "315px"}, 2000, function () {
                    $("#targetUp>span").css({
                        "background": "url(images/gift.png) no-repeat",
                        "animation": "gift 1s steps(1) infinite"
                    });
                    setTimeout(function () {
                        $("#gift").css({"display": "block"});
                    }, 1000);
                    setTimeout(function () {
                        $("#targetUp>span").css({
                            "background": "url(images/gogogo.png) no-repeat",
                            "animation": "gogogo 1s steps(1) infinite"
                        });
                        $("#targetUp").animate({"right": "555px"}, 1000, function () {
                            $("#targetUp").remove();
                        });
                    }, 2000);
                })
            }, 1200);
        });
    });
    $("#gift").click(function () {
        if(cls){
            $("#canversbox").css({"display": "none"});
            $("#bigmark").css({"display": "none"});
        }
        cls=true;
        $(this).animate({
            "width": "400px",
            "height": "100px",
            "top": "50%",
            "margin-top": "-50px",
            "left": "50%",
            "margin-left": "-200px"
        });
    });
    $("#closegame").click(function () {
        $("#canversbox").css({"display": "none"});
        $("#bigmark").css({"display": "none"});
    });
});