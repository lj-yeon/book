$(document).ready(function () {

    //헤더//
    // $('#gnb>i').click(function () {
    //     $(this).parent().children('#lnb').toggle();
    // });


    //비주얼//
    //메인슬라이드
    var a = 0;
    function slider() {
        a++;
        if (a > $('.slider li:last').index()) {
            a = 0;
        }
        $('.slider li').eq(a - 1).stop().fadeOut(700);
        $('.slider li').eq(a).stop().fadeIn(1000);
        $('.visual_nav1 li').eq(a).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
    };
    setInterval(slider, 4000);

    //네비
    $('.visual .prev_btn').click(function () {
        a--;
        $('.slider li').eq(a).stop().fadeIn(1000).siblings().fadeOut(700);
        $('.visual_nav1 li').eq(a).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
    })

    $('.visual .next_btn').click(function () {
        a++;
        $('.slider li').eq(a).stop().fadeIn(1000).siblings().fadeOut(700);
        $('.visual_nav1 li').eq(a).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
    })

    $('.visual_nav1 li').click(function () {
        $(this).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
        var i = $(this).index();
        $('.slider li').eq(i).fadeIn().siblings().fadeOut();
        a = i;
    })

    $('.event_btn').click(function () {
        $('.visual_pop').toggle();
    })

    $('.visual_pop button').click(function () {
        $('.visual_pop').toggle();
    })



    //공통-섹션메뉴//
    $(".section_menu").find("li:nth-of-type(1)").prepend('<span></span>');
    $('.section_menu li').click(function () {
        //스타일
        $(this).css({ 'font-weight': 'bold', 'color': '#5055b1' }).prepend('<span></span>')
            .siblings().css({ 'font-weight': 'normal', 'color': '#595959' }).find('span').remove();

        //페이지넘김
        var b = $(this).index();
        console.log(b);
        $(this).parents('section').find('.content>li').eq(b).show().siblings().hide();
        $(this).parents('section').find('.content>li').eq(b).addClass('showshow').siblings().removeClass('showshow')
        $('.today').find('.content>li').removeClass('showshow');
    });

    //모든 랭킹 좌우 버튼//
    $('.content_box .next_btn').click(function () {
        $(this).parent().parent('.content_box').find('.showshow').children('ul').animate({ 'margin-left': '-25%' }, 350, function () {
            $(this).children('li').first().appendTo(this);
            $(this).css("margin-left", "0");
        });
    })

    $('.content_box .prev_btn').click(function () {
        var hihi = $(this).parent().parent('.content_box').find('.showshow ul')
        hihi.find('li').last().prependTo(hihi);
        hihi.parent().css("margin-left", "-25%");
        hihi.parent().animate({ 'margin-left': '0' }, 350);
    })



    //오늘의 선택//
    //좌우버튼
    $('.today .next_btn').click(function () {
        $('.other ul').animate({ 'margin-left': '-69%' }, 350, function () {
            $(this).children('li').first().appendTo(this);
            $(this).css("margin-left", "-34.5%");
        });
        $('.content>li:visible .detail>li:nth-of-type(1)').siblings().css({'opacity':'0'});
        $('.content>li:visible .detail>li:nth-of-type(1)').appendTo('.content>li:visible .detail')
        $('.content>li:visible .detail>li:nth-of-type(1)').animate({'opacity':'1'},300);
    })

    $('.today .prev_btn').click(function () {
        $('.content>li:visible .other').find('li').last().prependTo('.content>li:visible .other ul');
        $('.other ul').css({ 'margin-left': '-69%' });
        $('.other ul').animate({ "margin-left": "-34.5%" }, 350);

        $('.content>li:visible .detail>li:nth-of-type(1)').siblings().css({'opacity':'0'});
        $('.content>li:visible .detail>li:nth-last-of-type(1)').prependTo('.content>li:visible .detail');
        $('.content>li:visible .detail>li:nth-of-type(1)').animate({'opacity':'1'},300);
    })

    //히트//
    $('.hit li').hover(function (){
        $(this).find('div').show().after('<span></span>');
    },function(){
        $(this).find('div').hide();
        $(this).find('span').remove();
    })
    $('.hit .prev_btn').click(function(){
        if($('.hit ul li').eq(0)){}
        $('.hit ul li').last().prependTo('.hit ul');
        $('.hit ul').css({'margin-left':'-33.333%'});
        $('.hit ul').animate({'margin-left':'0'});
    })
    $('.hit .next_btn').click(function(){
        $('.hit ul').animate({'margin-left':'-33.333%'},function(){
            $('.hit ul li').first().appendTo('.hit ul');
            $('.hit ul').css({'margin-left':'0%'});
        });

    })
    



});

