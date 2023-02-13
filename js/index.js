$(document).ready(function(){

    //헤더
    $('#gnb>i').click(function(){
        $(this).parent().children('#lnb').toggle();        
    });
    // $('body').not('header').click(function(){
    //     $('#gnb').children('#lnb').hide();
    // });

    //비주얼-메인슬라이드
    var a=0;
    function slider(){
        a++;
        if(a > $('.slider li:last').index()){
            a=0;
        }
        $('.slider li').eq(a-1).stop().fadeOut(700);
        $('.slider li').eq(a).stop().fadeIn(1000);
        $('.visual_nav1 li').eq(a).css({'font-weight':'bold','border-bottom':'2px solid black'}).siblings().css({'font-weight':'normal','border-bottom':'none'});
    };
    setInterval(slider,4000);

    //비주얼-네비
    $('.prev_btn').click(function(){
        a--;
        $('.slider li').eq(a).stop().fadeIn(1000).siblings().fadeOut(700);
        $('.visual_nav1 li').eq(a).css({'font-weight':'bold','border-bottom':'2px solid black'}).siblings().css({'font-weight':'normal','border-bottom':'none'});
    })

    $('.next_btn').click(function(){
        a++;
        $('.slider li').eq(a).stop().fadeIn(1000).siblings().fadeOut(700);
        $('.visual_nav1 li').eq(a).css({'font-weight':'bold','border-bottom':'2px solid black'}).siblings().css({'font-weight':'normal','border-bottom':'none'});
    })

    $('.visual_nav1 li').click(function(){
        $(this).css({'font-weight':'bold','border-bottom':'2px solid black'}).siblings().css({'font-weight':'normal','border-bottom':'none'});
        var i=$(this).index();
        $('.slider li').eq(i).fadeIn().siblings().fadeOut();
        a=i;
    })
    

    $('.event_btn').click(function(){
        $('.visual_pop').toggle();
    })


    $('.visual_pop button').click(function(){
        $('.visual_pop').toggle();
    })

    //오늘의 선택-네비
    $('.today_menu li').eq(0).prepend('<span></span>');
    $('.today_menu li').click(function(){
        $(this).css({'font-weight':'bold','color':'#5055b1'}).prepend('<span></span>')
                .siblings().css({'font-weight':'normal','color':'#595959'}).find('span').remove();

    })
});

