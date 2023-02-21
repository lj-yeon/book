$(document).ready(function(){
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

    //북카드
    $('.bookcard').hover(function(){
        $(this).find('.left_right').children().fadeIn(300);
    },function(){
        $(this).find('.left_right').children().fadeOut(300);
    })
    
    var bookmove= $('.bookcard button').parent().siblings('.substance').find('ul');

    $('.bookcard').find('.left_btn').click(function(){
        bookmove.css({'margin-left':'-51%'});
        bookmove.children().last().prependTo(bookmove);
        bookmove.stop().animate({'margin-left':'0%'});
    })
    $('.bookcard').find('.right_btn').click(function(){
        bookmove.stop().animate({'margin-left':'-51%'},function(){
            $(this).children().first().appendTo(this);
            $(this).css({'margin-left':'0'});
       });
    })



   
    
})