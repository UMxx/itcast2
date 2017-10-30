/**
 * Created by Ascend on 2016/6/6.
 */
$(function () {

    /*登陆界面及手机端导航*/
    var op = 0;
    $('.Btn').click(function () {

        if ($(window).width() >= 768) {

            $('#login').animate({top: '0px'}, 500)

        }
        if ($(window).width() < 768) {
            if (op == 0) {
                $('#nav').animate({right: '0px'}, 100);
                $('.Btn').css('transform', 'rotate(90deg)');
                op = 1
            }
            else {
                $('#nav').animate({right: '-120px'}, 100);
                $('.Btn').css({'transform': 'rotate(0deg)'
                });
                op = 0;
            }
        }

    });
    if($(window).width() < 768){
       $('.navBtn img').attr({'src':'images/navBtn.png','title':'点我 点我'})
    }


    $('.closeIcon').click(function () {
        $('#login').animate({top: '-600px'}, 500)
    });

    $('.con1').eq(0).show();
    $('.log_in').css('color','#2b2b2b');
    $('.register').click(function(){
        $('.con1').hide();
        $('.con1').eq(1).show();
        $(this).css('color','#2b2b2b');
        $('.log_in').css('color','#7f7f7f');
    });

    $('.log_in').click(function(){
        $('.con1').hide();
        $('.con1').eq(0).show();
        $(this).css('color','#2b2b2b');
        $('.register').css('color','#7f7f7f');
    });

    $('.carousel-caption').animate({
        top: "20%",
        opacity: "1"
    }, 1000);

    $('.facilityName a').eq(0).css('color','#caa342');
    $('.facilityName a i').eq(0).css('top','48px');
    $('.facilityImgShow ul').eq(0).show();
    $('.facilityName a').click(function(){
        var n=$(this).index();
        $('.facilityImgShow ul').hide();
        $('.facilityImgShow ul').eq(n).show();
        $('.facilityName a').css('color','#dedede');
        $(this).css('color','#caa342');
        $('.facilityName a i').css('top','-2px');
        $('.facilityName a i').eq(n).css('top','48px');
   });


    $('.main').hover(function(){
            $(this).find('.shadow').css({'transform':' scale(1)'});
            $(this).css('color','#ffffff')
        },
        function(){
            $(this).find('.shadow').css({'transform':' scale(0)'});
            $(this).css('color','#808080')
        })

});