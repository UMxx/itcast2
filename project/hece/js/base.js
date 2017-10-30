//顶部导航
$(function () {
    var timer = null;
    var index = 0;

    //顶部导航栏特效
    $("#nav>ul>li").mouseenter(function(){
        $(this).find("a").stop().animate({
            top: "12px"
        }, 300)
            .find("span").stop().animate({
                top: "-30px"
            }, 300);
        $(this).addClass("sfhover");
    });
    $("#nav>ul>li").mouseleave(function(){
        $('.active').siblings("li").find("a").stop().animate({
            top: "0px"
        }, 300)
            .find("span").stop().animate({
                top: "0px"
            }, 300);
        $(this).removeClass("sfhover");
    });
    //回到顶部特效
    $(".top").click(function(){
        $("html,body").animate({scrollTop:0}, 1000);
    });
    //banner
    timer = setInterval(function () {
        if (index < 4) {
            index++;
        } else {
            index = 0;
        }
        $(".clipped-box div").animate({"opacity": "0.3"}, function () {
            $(".clipped-box div").css({"background": arr[index].url}).stop(false, true).animate({"opacity": "1"});
        });
    }, 5000);
    $(".banner,.smImgBox").mouseenter(function () {
        $(".prev").css({"display": "block"});
        $(".next").css({"display": "block"});
        clearInterval(timer);
    });

    $(".banner,.smImgBox").mouseleave(function () {
        $(".prev").css("display", "none");
        $(".next").css("display", "none");
        timer = setInterval(function () {
            if (index < 4) {
                index++;
            } else {
                index = 0;
            }
            $(".clipped-box div").animate({"opacity": "0.3"}, function () {
                $(".clipped-box div").css({"background": arr[index].url}).stop(false, true).animate({"opacity": "1"});
            });
        }, 5000);
    });
    var arr = [{
        "url": "url('images/1-160G91P32O59.jpg') no-repeat"
    }, {
        "url": "url('images/1-1606201HR1L2.jpg') no-repeat"
    }, {
        "url": "url('images/1-160609143KC62.jpg') no-repeat"
    }, {
        "url": "url('images/1-160F1203I2223.jpg') no-repeat"
    }, {
        "url": "url('images/1-1606091435311V.jpg') no-repeat"
    }];
    $(".clipped-box div").css({"background": arr[index].url});
    $("#prevBanner").click(function () {

        if (index > 0) {
            index--;
        } else {
            index = 4;
        }
        $(".clipped-box div").animate({"opacity": "0.3"}, function () {
            $(".clipped-box div").css({"background": arr[index].url}).stop(false, true).animate({"opacity": "1"});
        });
    });
    $("#nextBanner").click(function () {
        if (index < 4) {
            index++;
        } else {
            index = 0;
        }
        $(".clipped-box div").animate({"opacity": "0.3"}, function () {
            $(".clipped-box div").css({"background": arr[index].url}).stop(false, true).animate({"opacity": "1"});
        });
    });
    //大工程——爆炸特效第一次！开拍！Pa!
    function genClips() {
        var $t = $('.clipped-box');
        var amount = 5;
        var width = $t.width() / amount;
        var height = $t.height() / amount;
        var y = 0;
        for (var z = 0; z <= (amount * width); z = z + width) {
            $('<div class="clipped" style="clip: rect(' + y + 'px, ' + (z + width) + 'px, ' + (y + height) + 'px, ' + z + 'px)"></div>').appendTo($t);
            if (z === (amount * width) - width) {
                y = y + height;
                z = -width;
            }
            if (y === (amount * height)) {
                z = 9999999;
            }
        }
    }

    // genClips();
    var first = false,
        clicked = false;
    $('.clipped-box div').on('click', function () {
        genClips();
        if (clicked === false) {
            $(".clipped-box div").css({"background": arr[index].url});
            clicked = true;
            $('.clipped-box .content').css({'display': 'none'});
            $('.clipped-box div:not(.content)').each(function () {
                var v = rand(120, 90),
                    angle = rand(80, 89),
                    theta = (angle * Math.PI) / 180,
                    g = -9.8;
                var self = $(this);
                var t = 0,
                    z, r, nx, ny,
                    totalt = 15;
                var negate = [1, -1, 0],
                    direction = negate[Math.floor(Math.random() * negate.length)];
                var randDeg = rand(-5, 10),
                    randScale = rand(0.9, 1.1),
                    randDeg2 = rand(30, 5);
                $(this).css({
                    'transform': 'scale(' + randScale + ') skew(' + randDeg + 'deg) rotateZ(' + randDeg2 + 'deg)'
                });
                z = setInterval(function () {
                    var ux = ( Math.cos(theta) * v ) * direction;
                    var uy = ( Math.sin(theta) * v ) - ( (-g) * t);
                    nx = (ux * t);
                    ny = (uy * t) + (0.5 * (g) * Math.pow(t, 2));
                    $(self).css({'bottom': (ny) + 'px', 'left': (nx) + 'px'});
                    t = t + 0.10;
                    if (t > totalt) {
                        clicked = false;
                        first = true;
                        $('.clipped-box').css({'top': '-1000px', 'transition': 'none'});
                        $(self).css({
                            'left': '0',
                            'bottom': '0',
                            'opacity': '1',
                            'transition': 'none',
                            'transform': 'none'
                        });
                        clearInterval(z);
                    }
                }, 10);
            });
        }
    });
    r = setInterval(function () {
        if (first === true) {
            if (index < 4) {
                index++;
            } else {
                index = 0;
            }
            $('.clipped-box').css({'top': '0', 'transition': ''});
            $(".clipped-box div").css({"background": arr[index].url});
            $('.content').css({'display': 'block'});
            $('.clipped-box>div.clipped').remove();
            first = false;
        }
    }, 300);
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $("#jdAdBtn>a").click(function () {
        $("#jdAdBtn>a").eq(this.text - 1).addClass("active").siblings().removeClass("active");
        $("#jdAdSlide>img").eq(this.text - 1).fadeTo(500, .9).css({"display": "block"}).siblings("img").css({"display": "none"});
    });

    var dir = null;
    var bgasindexs=0;
    $(".major-list>li").mouseenter(function () {
        bgasindexs=$(this).index();
    });
    var bgas = $(".major-list>li");
    bgas.on("mouseenter mouseleave", function (e) {
        var w = bgas.eq(bgasindexs).width();
        var h = bgas.eq(bgasindexs).height();
        var x = (e.pageX - bgas.eq(bgasindexs).offset().left - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - bgas.eq(bgasindexs).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
        // dir=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
        var eventType = e.type;
        if (e.type == "mouseenter") {
            dir = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            switch (dir) {//in
                case 0:
                    $(".mark").eq(bgasindexs).css({"top": "-100%", "left": "0"}).animate({"top": "0"});
                    // $("#mark1").animate({"top":"-100%","left":"0"},1,function () {
                    //     $("#mark1").stop(false,true)
                    // });
                    break;
                case 1:
                    $(".mark").eq(bgasindexs).css({"top": "0", "right": "-100%"}).animate({"right": "0"});
                    break;
                case 2:
                    $(".mark").eq(bgasindexs).css({"bottom": "-100%", "left": "0"}).animate({"bottom": "0"});
                    break;
                case 3:
                    $(".mark").eq(bgasindexs).css({"top": "0", "left": "-100%"}).animate({"left": "0"});
                    break;
            }
        } else if (e.type == 'mouseleave') {
            dir = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            switch (dir) {//out
                case 0:
                    $(".mark").eq(bgasindexs).stop(false,true).animate({"top": "-100%"}, function () {
                        $(".mark").eq(bgasindexs).removeAttr("style");
                    });
                    break;
                case 1:
                    $(".mark").eq(bgasindexs).stop(false,true).removeAttr("style").css({
                        "right": "0",
                        "top": "0"
                    }).animate({"right": "-100%"}, function () {
                        $(".mark").eq(bgasindexs).removeAttr("style");
                    });
                    break;
                case 2:
                    $(".mark").eq(bgasindexs).stop(false, true).removeAttr("style").css("bottom", "0").animate({"bottom": "-100%"}, function () {
                        $(".mark").eq(bgasindexs).removeAttr("style");
                    });
                    break;
                case 3:
                    $(".mark").eq(bgasindexs).stop(false,true).animate({"left": "-100%"}, function () {
                        $(".mark").eq(bgasindexs).removeAttr("style");
                    });
                    break;
                case 4:
                    break;
            }
        }
    });

    var speed = 40;
    var ZJJDemo = document.getElementById('demo');
    var ZJJDemo1 = document.getElementById('demo1');
    var ZJJDemo2 = document.getElementById('demo2');
    ZJJDemo2.innerHTML = ZJJDemo1.innerHTML
    function Marquee1() {
        if (ZJJDemo2.offsetHeight - ZJJDemo.scrollTop <= 0)
            ZJJDemo.scrollTop -= ZJJDemo1.offsetHeight
        else {
            ZJJDemo.scrollTop++
        }
    }

    var MyMar1 = setInterval(Marquee1, speed);

    ZJJDemo.onmouseover = function () {
        clearInterval(MyMar1)
    }
    ZJJDemo.onmouseout = function () {
        MyMar1 = setInterval(Marquee1, speed)
    }

    $("._big").click(function () {
        if ($(this).hasClass("tobig")) {
            $(this).animate({"display": "none"}, 1).removeClass("tobig");
            $(this).children("img").animate({"width": "233px", "height": "350px"}).removeClass("tobigImg");
        } else {
            $(this).addClass("tobig").animate({"display": "block", "top": "0", "left": "0"});
            $(this).children("img").addClass("tobigImg").animate({"opacity":"0"},500, function () {
                $(this).animate({"width": "466px", "height": "700px","opacity":"1"});
            });
        }
    });

    var indexs = 0;
    var left = 0;
    function nextM() {
            if (indexs < 5) {
                indexs++;
                left = -975 * indexs;
            } else {
                indexs = 0;
                left = -975 * indexs;
                $("#picBox>ul").css({"left": left + "px"});
                indexs = 1;
                left = -975 * indexs;
            }
            $("#picBox>ul").animate({"left": left + "px"});
            if (indexs == 5) {
                $("#listBox>ul>li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $("#listBox>ul>li").eq(indexs).addClass("on").siblings().removeClass("on");
            }
    }
    var timer2=null;
    timer2=setInterval(nextM,5000);
    $("#prev").click(function () {
        if (indexs > 0) {
            indexs--;
            left = -975 * indexs;
        } else {
            indexs = 5;
            left = -975 * indexs;
            $("#picBox>ul").css({"left": left + "px"});
            indexs = 4;
            left = -975 * indexs;
        }
        $("#picBox>ul").animate({"left": left + "px"});
        $("#listBox>ul>li").eq(indexs).addClass("on").siblings().removeClass("on");
    });
    $("#next").click(function () {
        nextM();
    });
    $("#listBox>ul>li").click(function () {
        indexs=$(this).index();
        left = -975 * indexs;
        $("#picBox>ul").animate({"left": left + "px"});
        $("#listBox>ul>li").eq(indexs).addClass("on").siblings().removeClass("on");
    });

    $("#timer2box").mouseenter(function () {
        clearInterval(timer2);
    });
    $("#timer2box").mouseleave(function () {
        timer2=setInterval(nextM,5000);
    });
$("#showgame").click(function () {
    $("#canversbox").css({"display":"block"});
    $("#bigmark").css({"display":"block"});
})
});