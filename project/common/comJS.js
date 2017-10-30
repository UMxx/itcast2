/**
 * Created by anxiang on 2016/8/6.
 */
$(function(){
    var names = ["何策","","安翔","","刘妍","","李想","","王丹","","丘凤茹"];
    var srcs =  ["../common/images/robot.PNG","",
        "../common/images/yaoming.jpg","",
        "../common/images/songxiaobao.jpg","",
        "../common/images/goudai.jpg","",
        "../common/images/fuerkang.jpg","",
        "../common/images/zhanghan.jpg"];
    var name = names[ $("#nav>ul>li.active").index()];
    $("#neirong img").attr("src",srcs[$("#nav>ul>li.active").index()]);
    var kefuheight = $(".neirong").height();
    console.log($("#nav>ul>li.active").index());
    ////顶部导航栏特效
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
    //点击客服出现特效
    $(".kefu_main").click(function(){
        $(".kefu_main").css("display","none");
        $(".kefu_fu").css("display","block");
        kefu();
    });

    function kefu(){
            $("#zhengzaidazi").text("在线客服 【"+name+"】 正在为您服务。");
            $(".kefu_fu").animate({right:0},2000,function(){
                $(".neirong").append('<div class="content"><div class="fl">在线客服 '+name+'：&nbsp;&nbsp;'+getTime()+'</div><br/><div class="content_div_kefu fl">您好，请问可以帮您什么？</div></div>');
                $(".neirong").scrollTop(kefuheight);
            });
    }
    //清除聊天记录
    function clearjilu(){
        $(".content").remove();
    }

    //在线客服打字发送
    var huifu=["长得丑的人没资格聊天，懂吗？","还想聊天，你怎么不上天？","傻逼","你知道你是在和空气说话吗？","我没有明白你的意思","呵呵。。。。","哈哈，你真逗！","有对象吗就在这嘚瑟","村里有个姑娘叫小芳"];

    $("#sendto").click(function(){
        kefuheight += $(".neirong .content").eq(0).height();
        $(".neirong").append('<div class="content"><div class="fr">我：&nbsp;&nbsp;'+getTime()+'</div><br/><div class="content_div fr">'+$("#contentarea").val()+'</div></div>');
        console.log($(".neirong .content").eq(0).height());
        $(".neirong").scrollTop(kefuheight);
        $("#contentarea").val("");
        var s2 = setTimeout(function(){
            $("#zhengzaidazi").html("在线客服 【"+name+"】 正在输入内容....");
        },1000);
        var t2 = setTimeout(function(){
            var ran = Math.floor(Math.random()*huifu.length);
            $(".neirong").append('<div class="content"><div class="fl">在线客服 '+name+'：&nbsp;&nbsp;'+getTime()+'</div><br/><div class="content_div_kefu fl">'+huifu[ran]+'</div></div>');
            $("#zhengzaidazi").html("在线客服 【"+name+"】 正在为您服务！");
            kefuheight += $(".neirong .content").eq(0).height();
            $(".neirong").scrollTop(kefuheight);
        },2000);
    });
    //结束客服对话
    $("#bottom_close").click(function(){
        $("#endtalk").click();
    });
    $("#endtalk").click(function(){
        $(".kefu_main").css("display","block");
        $(".kefu_fu").animate({
            right:"-400px"
        },1000,function(){
            clearjilu();
            $(".kefu_fu").css("display","none");
        });
    });
    //获取当前时间
    function getTime(){
        var date = new Date();
        var day = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if(h<10){
            h = "0"+h;
        }
        if(m<10){
            m = "0"+m;
        }
        if(s<10){
            s = "0"+s;
        }
        return h+":"+m+":"+s;
    }
//--------------------------------------顶部导航开始
    var timer = null;
    var index = 0;
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
        "url": "url('../common/images/1-160G91P32O59.jpg') no-repeat"
    }, {
        "url": "url('../common/images/1-1606201HR1L2.jpg') no-repeat"
    }, {
        "url": "url('../common/images/1-160609143KC62.jpg') no-repeat"
    }, {
        "url": "url('../common/images/1-160F1203I2223.jpg') no-repeat"
    }, {
        "url": "url('../common/images/1-1606091435311V.jpg') no-repeat"
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
    var r = setInterval(function () {
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
});