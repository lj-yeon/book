$(window).scroll(function(){
    if($(window).scrollTop()>=100){
        $('#top').fadeIn(100).css({'display':'flex'})
        $('header').css({'position':'fixed','top':'0','height':'130px'}).children('nav').hide();
    }else{
        $('#top').fadeOut(100)
        $('header').css({'position' : 'inherit','height':'auto'}).children('nav').show();
    }



    if($(window).scrollTop()>=700){
        $('div.menu').css({'position':'fixed','top':'130px'});
    }else{
        $('div.menu').css({'position' : 'inherit','top':'0'})
    }

    if($(window).scrollTop()>700){
        $('.menu ul li').css({'color':'#767676;','border-bottom':'none','font-weight':'normal'})
    }
    else if($(window).scrollTop()>=700 && $(window).scrollTop()<900){
        $('.menu ul li').eq(0).css({'color':'#222','border-bottom':'2px solid #222','font-weight':'bold'})
        $('.menu ul li').eq(0).siblings().css({'color':'#767676;','border-bottom':'none','font-weight':'normal'})
    }else if($(window).scrollTop()>=900 && $(window).scrollTop()<9350){
        $('.menu ul li').eq(1).css({'color':'#222','border-bottom':'2px solid #222','font-weight':'bold'})
        $('.menu ul li').eq(1).siblings().css({'color':'#767676;','border-bottom':'none','font-weight':'normal'});
    }else if($(window).scrollTop()>=9350 && $(window).scrollTop()<10450){
        $('.menu ul li').eq(2).css({'color':'#222','border-bottom':'2px solid #222','font-weight':'bold'})
        $('.menu ul li').eq(2).siblings().css({'color':'#767676;','border-bottom':'none','font-weight':'normal'});
    }else{
        $('.menu ul li').eq(3).css({'color':'#222','border-bottom':'2px solid #222','font-weight':'bold'})
        $('.menu ul li').eq(3).siblings().css({'color':'#767676;','border-bottom':'none','font-weight':'normal'});
    }
    
})


$(document).ready(function(){

    $('#side_ad').css({'top':'280px'});

    $('#top').click(function(){
        $('html').animate({scrollTop:0},500)
    })

    $('.menu ul li').eq(0).click(function(){
        $('html').animate({scrollTop:700},500)
    })
    $('.menu ul li').eq(1).click(function(){
        $('html').animate({scrollTop:1000},500)
    })
    $('.menu ul li').eq(2).click(function(){
        $('html').animate({scrollTop:9350},500)
    })
    $('.menu ul li').eq(3).click(function(){
        $('html').animate({scrollTop:10450},500)
    })



    ///네비
    $('.small_nav>ul>li').hover(function(){
        $(this).find('div').show();
        $(this).find('img').css({'transform':'rotate(180deg)','border':'1px solid black'});
    },function(){
        $(this).find('div').hide();
        $(this).find('img').css({'transform':'rotate(0deg)','border':'none'});
    });

    //비주얼
    $('.img_box').hover(function(){
        $(this).find('.left_right').children().show();
    },function(){
        $(this).find('.left_right').children().hide();
    })
    var vcount=0;
    if(vcount<$('.img_boxy li').length){
        $('.img_boxy li:nth-last-of-type(1)').css({'display':'none'})
    };
    $('.img_box').find('.right_btn').click(function(){
        vcount++;
        if(vcount>=$('.img_boxy li').length-1){
            vcount=$('.img_boxy li').length-1
            $(this).css({'opacity':'0.5'});
        }
        $('.img_boxy li').eq(vcount).fadeIn().siblings().fadeOut();
        $(this).siblings().css({'opacity':'1'});
        $('.img_btn').find('span').eq(0).html(Number(vcount+1))

    })
    $('.img_box').find('.left_btn').click(function(){
        vcount--;
        if(vcount<=0){
            vcount=0;
            $(this).css({'opacity':'0.5'});
        }
        $('.img_boxy li').eq(vcount).fadeIn().siblings().fadeOut();
        $(this).siblings().css({'opacity':'1'});
        $('.img_btn').find('span').eq(0).html(Number(vcount+1))
    });

    $('.price>button').hover(function(){
        $(this).css({'background':'#f2f2f2'});
    },function(){
        $(this).css({'background':'white'});
    })

    //왼쪽//
    //북카드
    $('#bookcard').hover(function(){
        $(this).find('.left_right').children().fadeIn(300);
    },function(){
        $(this).find('.left_right').children().fadeOut(300);
    })
    
    var bookmove= $('#bookcard button').parent().siblings('.substance').find('ul');

    $('#bookcard').find('.left_btn').click(function(){
        bookmove.css({'margin-left':'-51%'});
        bookmove.children().last().prependTo(bookmove);
        bookmove.stop().animate({'margin-left':'0%'});
    })
    $('#bookcard').find('.right_btn').click(function(){
        bookmove.stop().animate({'margin-left':'-51%'},function(){
            $(this).children().first().appendTo(this);
            $(this).css({'margin-left':'0'});
       });
    })

    //펼치기 접기
    $('.infor_show').click(function(){
        if($(this).children('span').text()=='펼치기'){
            $(this).siblings('p').css({'height':'auto'});
            $(this).children('span').text('접기').siblings('img').css({'transform':'rotate(180deg)'})
        }else if($(this).children('span').text()=='접기'){
            $(this).siblings('p').css({'height':'70px','overflow':'hidden'});
            $(this).children('span').text('펼치기').siblings('img').css({'transform':'rotate(0deg)'})
        }
        
    });



    //오른쪽//
    //베스트
    $('#best ul div').prepend("<span></span><br>");
    for(var b_i=0; b_i<=10; b_i++){
        $(`#best ul li:nth-of-type(${b_i}) div`).children('span').eq(0).text(b_i)
    }

   



    //가격 buy
    var pirce_value=$('.howmany').find('input');
    var price_sum=$('.buy').find('.price h2');

    $('.howmany .plus').click(function(){
        if(pirce_value.val()>=100){
            pirce_value.val()=100
        }else{
            pirce_value.val(parseInt(pirce_value.val()) + 1);
            price_sum.html(Number(parseInt(pirce_value.val())*14400).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원')
        }
    });
    $('.howmany .minus').click(function(){
        if(pirce_value.val()<=1){
            pirce_value.val()=1
        }else{
            pirce_value.val(parseInt(pirce_value.val()) - 1);
            price_sum.html(Number(parseInt(pirce_value.val())*14400).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원')
        }
    })

    pirce_value.keyup(function (){
        if(pirce_value.val()<1){
            alert('1권 이상 구매가 가능합니다 ')
            pirce_value.val(1);
        }else if(pirce_value.val()>101){
            alert('100권 초과 구매가 불가능합니다')
            pirce_value.val(100);
        }else if((pirce_value.val() * 10) % 10 != 0){
            alert('정수를 입력하세요')
            pirce_value.val(1);
        }else{
            pirce_value.val(parseInt(pirce_value.val()));
            price_sum.html(Number(parseInt(pirce_value.val())*14400).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원')
        }
    });    
        // else if(pirce_value.val()>=100){
        //     pirce_value.val()=100;
        // }else if(isNaN(pirce_value.val())){
        //     alert('숫자를 입력하세요')
        // }
        // var pirce_total=Number(14400*$(this).val());
        // price.html(pirce_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원');
 

})