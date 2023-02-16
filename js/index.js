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
        $(this).parents('section').find('.content>li').eq(b).show().siblings().hide();
        $(this).parents('section').find('.content>li').eq(b).addClass('showshow').siblings().removeClass('showshow')
        $('.today').find('.content>li').removeClass('showshow');
    });

    //공통-랭킹 좌우 버튼//
    $('.content_box .next_btn').click(function () {
        $(this).parent().parent('.content_box').find('.showshow').children('ul').animate({ 'margin-left': '-20%' }, 350, function () {
            $(this).children('li').first().appendTo(this);
            $(this).css("margin-left", "0");
        });
    })

    $('.content_box .prev_btn').click(function () {
        var hihi = $(this).parent().parent('.content_box').find('.showshow ul')
        hihi.find('li').last().prependTo(hihi);
        hihi.parent().css("margin-left", "-20%");
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


    //베스트&스테디//
    $('.best .section_menu h2').eq(0).click(function(){
        $(this).css({'color':'#222'}).siblings('h2').css({'color':'#ddd'});
        $('.best .content').eq(0).show().siblings().hide();
        $('.best .section_menu ul').eq(0).show().siblings('ul').hide();

    })
    $('.best .section_menu h2').eq(1).click(function(){
        $(this).css({'color':'#222'}).siblings('h2').css({'color':'#ddd'});

        $('.best .content').eq(1).show().siblings().hide();

        $('.best .section_menu ul').eq(1).show().siblings('ul').hide();
    })

    $('.best .section_menu ul:nth-of-type(2)>li').click(function(){
        var b = $(this).index();
        $('.best .content:nth-of-type(2)>li').eq(b).show().siblings().hide();
    })

    $('.best .content ul li').prepend("<span></span>");
    for(var b_i=0; b_i<=10; b_i++){
        $(`.best .content li li:nth-of-type(${b_i})`).find('span').text(b_i)
    }

    var today=new Date();
    $('.best>p').html(today.getFullYear()+'.'+ Number(today.getMonth()+1) +'.'+ today.getDate()+' 기준')

    //CASTing//
    //좌우버튼
    var c_i=0;
   
    $('.casting .prev_btn').click(function(){
        c_i--;
        $(this).siblings().css({'opacity':'1'});
        if(c_i<=0){
            $(this).css({'opacity':'0.5'});
            c_i=0;
        }
        var c_back=$('.casting ul li').eq(c_i).find('.play img:nth-of-type(2)').attr('src');
        var c_go='"'+'../'+c_back+'"';
        console.log(c_back);
        console.log(c_go);

        $('.casting ul li').eq(c_i).fadeIn().siblings().fadeOut();
        $('.casting').css({'background-image':`url(${c_go})`})
    })
    $('.casting .next_btn').click(function(){
        c_i++;
        $(this).siblings().css({'opacity':'1'});
        if(c_i>=$('.casting ul li').length-1){
            $(this).css({'opacity':'0.5'});
            c_i=$('.casting ul li').length-1
        }
        console.log(c_i)
        var c_back=$('.casting ul li').eq(c_i).find('.play img:nth-of-type(2)').attr('src');
        var c_go='"'+'../'+c_back+'"';
        console.log(c_back);
        console.log(c_go);

       
        
        $('.casting ul li').eq(c_i).fadeIn().siblings().fadeOut();
        $('.casting').css({'background-image':`url(${c_go})`});
    })


    //CASTing-other//
    $('.casting_other li').hover(function(){
        $(this).find('p').show();
        $(this).find('img').before('<span></span>')
    },function(){
        $(this).find('p').hide()
        $(this).find('span').hide();
    })
    var c_o=0;
    $('.casting_other .prev_btn').click(function(){
        $('.casting_other ul li').last().prependTo('.casting_other ul');
        $('.casting_other ul').css({'margin-left':'-25%'});
        $('.casting_other ul').animate({'margin-left':'0'});
    })
    $('.casting_other .next_btn').click(function(){
        $('.casting_other ul').animate({'margin-left':'-25%'},function(){
            $('.casting_other ul li').first().appendTo('.casting_other ul');
            $('.casting_other ul').css({'margin-left':'0%'});
        });

    })

    //event//
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 3000,
          },
      });
    
    $('.event .section_menu li').click(function(){
        var e_i=$(this).index();
        $('.event .swiper').eq(e_i).show().siblings('.swiper').hide();
    })


});

