//轮播图特效
$(function () {
    $("#mr_frUl1 img").mouseenter(function () {
        $(this).css("opacity", "0.4");
    });
    $("#mr_frUl1 img").mouseleave(function () {
        $(this).css("opacity", "0.62");
    });
    //当点击右键时，向右运动
    var liWeight = $(".mr_frUl>ul>li").width() + 20;
    //$(".mr_frUl>ul>li").length;
    var ulPos=$(".mr_frUl>ul").position().left;
    var i=0;
    console.log(ulPos);
    //var i=0;
    $(".mr_frBtnR ").click(function () {



    });
    //当点击左键时，向左运动
    $(".mr_frBtnL").click(function () {
        if(i<12){
            i++;
            $(".mr_frUl>ul").animate({"left":ulPos-liWeight*i+"px"},1000);
        }else{

        }
    });
    function changeTo(num) {

        $(".mr_frUl>ul").animate({"left": ulPos+liWeight*i+"px"}, 500)
    }
    /*if(i<6){
        i++;
        $(".mr_frUl>ul").animate({"left":ulPos+liWeight*i+"px"},1000);
    }else{
*/
    //}
});












//何策版
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
