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
    var count=0;
    $('.img_box').find('.right_btn').click(function(){
        count++;
        console.log(count)
        if(count>=$('.img_boxy li').length){
            count=$('.img_boxy li').length-1;
            $(this).css({'opacity':'0.5'});
        }
        $('.img_boxy li').eq(count).fadeIn().siblings().fadeOut();
        $(this).siblings().css({'opacity':'1'});
        $('.img_btn').find('span').eq(0).html(Number(count+1))

    })
    $('.img_box').find('.left_btn').click(function(){
        count--;
        if(count<0){
            count=0;
            $(this).css({'opacity':'0.5'});
        }
        $('.img_boxy li').eq(count).fadeIn().siblings().fadeOut();
        $(this).siblings().css({'opacity':'1'});
        $('.img_btn').find('span').eq(0).html(Number(count+1))
    });
})