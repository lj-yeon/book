$(document).ready(function () {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "정지아" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var writer = $('#writer .writerbook>div')
            for (var i = 0; i < writer.length; i++) {
                $(writer).eq(i).find('picture').html('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(writer).eq(i).find('h5').html(msg.documents[i].title);
            }
        });



        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "소설" },
            headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
        })
    
            .done(function (msg) {
                var best = $('#content_right #best ul li')
                for (var i = 0; i < best.length; i++) {
                    $(best).eq(i).find('picture').html('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                    $(best).eq(i).find('h5').html(msg.documents[i].title);
                    $(best).eq(i).find('p').eq(0).html(msg.documents[i].authors);

                    var pri=msg.documents[i].price;
                    var sal_pri=msg.documents[i].sale_price;
                    var total_pri=pri-sal_pri;
                    var sal=parseInt(Number(pri/total_pri)) 
                    $(best).eq(i).find('p').eq(1).html(sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'% ');
                    $(best).eq(i).find('p').eq(2).children('span').html(sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

                }
            });

            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "에세이" },
                headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
            })
        
                .done(function (msg) {
                    var tnew = $('#content_right #tnew ul li')
                    for (var i = 0; i < tnew.length; i++) {
                        $(tnew).eq(i).find('picture').html('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                        $(tnew).eq(i).find('h5').html(msg.documents[i].title);
                        $(tnew).eq(i).find('p').eq(0).html(msg.documents[i].authors);
    
                        var pri=msg.documents[i].price;
                        var sal_pri=msg.documents[i].sale_price;
                        var total_pri=pri-sal_pri;
                        var sal=parseInt(Number(pri/total_pri)) 
                        $(tnew).eq(i).find('p').eq(1).html(sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'% ');
                        $(tnew).eq(i).find('p').eq(2).children('span').html(sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    
                    }
                });


            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "에세이" },
                headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
            })
        
                .done(function (msg) {
                    var together = $('#together ul li')
                    for (var i = 0; i < together.length; i++) {
                        $(together).eq(i).find('picture').html('<a href="sub.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                        $(together).eq(i).find('h5').html(msg.documents[i].title);
                        $(together).eq(i).find('span').html(msg.documents[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    }
                });
        
})
