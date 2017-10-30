/**
 * Created by Administrator on 2016/8/5.
 */

$(function () {

    //$(function() {
        //$("#nav>ul>li").hover(function() {
        //        $(this).addClass("sfhover");
        //        $("#nav ul ul").slideUp("fast");
        //        $(this).find("a:first").animate({"top": "12px"},"fast");
        //        $(this).find("span").animate({"top": "-30px"},"fast");
        //        if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideDown("fast")
        //    },
        //    function() {
        //        $(this).removeClass("sfhover");
        //        $(this).find("a:first").animate({"top": "0px"},"fast");
        //        $(this).find("span").animate({"top": "0px"},"fast");
        //        if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideUp("fast");
        //        $("#nav ul ul").slideUp("fast")
        //    })
//Q
//        SexyLightbox.initialize({color:'white',dir: '/z/theme/images/'});
//    });

    $("#new a").mouseenter(function(){
        $(this).css("opacity","0.6")
            .siblings()
            .css("opacity","1")
    })
    $("#new").mouseleave(function(){
        $(this).find("a")
            .css("opacity","1")
    })

    $("#hpc>ul>li").mouseenter(function () {

        $(this).css("opacity", "1")
            .siblings()
            .css("opacity", "0.6");

    });
    $("#hpc").mouseleave(function () {

        $(this).find("li").css("opacity", 1);


    });
    $("#psmain>ul>li").mouseenter(function () {
        $(this).find("span>img")
            .fadeIn(500);
    });
    $("#psmain>ul>li").mouseleave(function () {
        $(this).find("span>img")
            .css("display","none")
    });
})
$(function () {

    $("#imagegallery a").click(function () {

        var picSrc = $(this).attr("href");

        $("#image").attr("src",picSrc);


        return false;
    });
    $("#imagegallery a").mouseenter(function () {
        $(this).css("opacity","0.6")

    });
    $("#imagegallery a").mouseleave(function () {
        $(this).css("opacity","1")

    });
});