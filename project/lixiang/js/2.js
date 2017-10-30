/**
 * Created by Administrator on 2016-8-7.
 */
$(function () {
    $("#mr_frUl1 img").mouseenter(function () {
        $(this).css("opacity", "0.4");
    });
    $("#mr_frUl1 img").mouseleave(function () {
        $(this).css("opacity", "0.62");
    });
    var liWidth = $(".mr_frUl>ul>li").width() + 20;
    var count = $(".mr_frUl>ul>li").length;
    var index = 0;

    $(".mr_frUl>ul").css("left", -liWidth * 1);
    $(".mr_frUl>ul>li:last").after($(".mr_frUl>ul>li:eq(1)").clone());
    $(".mr_frUl>ul").width(liWidth * (count + 2));
    //3. µã»÷×ó¼ýÍ·£¬ulÍùÓÒÒÆ
    $("#left").click(function () {
        index--;
        $(".mr_frUl>ul").animate({
            left: -(index + 1) * liWidth
        }, 1000, function () {
            if (index == -1) {
                index = count - 1;
                $(".mr_frUl>ul").css("left", -(index + 1) * liWidth);
            }
        })
    });
    //4. µã»÷ÓÒ¼ýÍ·£¬ulÍù×óÒÆ
    $("#right").click(function () {
        /*if(index < count - 1){
         index++;
         $("#imgs").animate({
         left:-index*liWidth
         }, 1000);

         }*/
        index++;
        $(".mr_frUl>ul").animate({
            left:-(index+1)*liWidth
        }, 1000,function () {
            if(index == count){
                index = 0;
                $("#imgs").css("left",-(index+1)*liWidth);
            }
        });

    });
})
