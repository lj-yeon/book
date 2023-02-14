$(document).ready(function () {


//////오늘의 선택///////////////////////////////////////////////////////
    //1

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var today1 = $('.today .content1 .other li')
            var today11 = $('.today .content1 .detail li')
            for (var i = 0; i < today1.length; i++) {


                $(today1).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today1).eq(i).children('h4').html(msg.documents[i].title);
                $(today1).eq(i).find('span').html(msg.documents[i].authors);
                $(today1).eq(i).children('p').html(msg.documents[i].contents);

   
                $(today11).eq(i).find('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today11).eq(i).find('h3').html(msg.documents[i].title);
                $(today11).eq(i).find('p').eq(0).html(msg.documents[i].authors);
                $(today11).eq(i).find('span').html(msg.documents[i].price+'원');
                $(today11).eq(i).find('p').eq(1).html(msg.documents[i].contents.substring(0, 200));
                
            }


        });


    //2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "국내" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var today2 = $('.today .content2 .other li')
            var today22 = $('.today .content2 .detail li')
            for (var i = 0; i < today2.length; i++) {

                $(today2).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today2).eq(i).children('h4').html(msg.documents[i].title);
                $(today2).eq(i).find('span').html(msg.documents[i].authors);
                $(today2).eq(i).children('p').html(msg.documents[i].contents);

   
                $(today22).eq(i).find('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today22).eq(i).find('h3').html(msg.documents[i].title);
                $(today22).eq(i).find('p').eq(0).html(msg.documents[i].authors);
                $(today22).eq(i).find('span').html(msg.documents[i].price+'원');
                $(today22).eq(i).find('p').eq(1).html(msg.documents[i].contents.substring(0, 200));
                
            }
        });
    //3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "외국" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var today3 = $('.today .content3 .other li')
            var today33 = $('.today .content3 .detail li')
            for (var i = 0; i < today3.length; i++) {

                $(today3).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today3).eq(i).children('h4').html(msg.documents[i].title);
                $(today3).eq(i).find('span').html(msg.documents[i].authors);
                $(today3).eq(i).children('p').html(msg.documents[i].contents);

   
                $(today33).eq(i).find('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today33).eq(i).find('h3').html(msg.documents[i].title);
                $(today33).eq(i).find('p').eq(0).html(msg.documents[i].authors);
                $(today33).eq(i).find('span').html(msg.documents[i].price+'원');
                $(today33).eq(i).find('p').eq(1).html(msg.documents[i].contents.substring(0, 200));
                
            }
        });
    //4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "인터넷" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var today4 = $('.today .content4 .other li')
            var today44 = $('.today .content4 .detail li')
            for (var i = 0; i < today4.length; i++) {

                $(today4).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today4).eq(i).children('h4').html(msg.documents[i].title);
                $(today4).eq(i).find('span').html(msg.documents[i].authors);
                $(today4).eq(i).children('p').html(msg.documents[i].contents);

   
                $(today44).eq(i).find('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today44).eq(i).find('h3').html(msg.documents[i].title);
                $(today44).eq(i).find('p').eq(0).html(msg.documents[i].authors);
                $(today44).eq(i).find('span').html(msg.documents[i].price+'원');
                $(today44).eq(i).find('p').eq(1).html(msg.documents[i].contents.substring(0, 200));
                
            }
        });

    //5
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "에세이" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var today5 = $('.today .content5 .other li')
            var today55 = $('.today .content5 .detail li')
            for (var i = 0; i < today5.length; i++) {

                $(today5).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today5).eq(i).children('h4').html(msg.documents[i].title);
                $(today5).eq(i).find('span').html(msg.documents[i].authors);
                $(today5).eq(i).children('p').html(msg.documents[i].contents);

   
                $(today55).eq(i).find('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today55).eq(i).find('h3').html(msg.documents[i].title);
                $(today55).eq(i).find('p').eq(0).html(msg.documents[i].authors);
                $(today55).eq(i).find('span').html(msg.documents[i].price+'원');
                $(today55).eq(i).find('p').eq(1).html(msg.documents[i].contents.substring(0, 200));
                
            }
        });
    //6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "핫" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var today6 = $('.today .content6 .other li')
            var today66 = $('.today .content6 .detail li')
            for (var i = 0; i < today6.length; i++) {

                $(today6).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today6).eq(i).children('h4').html(msg.documents[i].title);
                $(today6).eq(i).find('span').html(msg.documents[i].authors);
                $(today6).eq(i).children('p').html(msg.documents[i].contents);

   
                $(today66).eq(i).find('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today66).eq(i).find('h3').html(msg.documents[i].title);
                $(today66).eq(i).find('p').eq(0).html(msg.documents[i].authors);
                $(today66).eq(i).find('span').html(msg.documents[i].price+'원');
                $(today66).eq(i).find('p').eq(1).html(msg.documents[i].contents.substring(0, 200));
                
            }
        });
    //7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "교보" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var today7 = $('.today .content7 .other li')
            var today77 = $('.today .content7 .detail li')
            for (var i = 0; i < today7.length; i++) {

                $(today7).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today7).eq(i).children('h4').html(msg.documents[i].title);
                $(today7).eq(i).find('span').html(msg.documents[i].authors);
                $(today7).eq(i).children('p').html(msg.documents[i].contents);

   
                $(today77).eq(i).find('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(today77).eq(i).find('h3').html(msg.documents[i].title);
                $(today77).eq(i).find('p').eq(0).html(msg.documents[i].authors);
                $(today77).eq(i).find('span').html(msg.documents[i].price+'원');
                $(today77).eq(i).find('p').eq(1).html(msg.documents[i].contents.substring(0, 200));
                
            }
        });


        

//////급상승도서///////////////////////////////////////////////////////

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "에세이" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            console.log(msg)
            var jump1 = $('.jump .content1 li')
            for (var i = 0; i < jump1.length; i++) {
                $(jump1).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(jump1).eq(i).children('h3').html('<a href="#">' + msg.documents[i].title + "</a>");
                $(jump1).eq(i).children('p').html(msg.documents[i].authors);
            }
        });

//////화제의 신상//////////////////////////////////////////////////////
    //1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var hot_issue1 = $('.hot_issue .content1 li')
            for (var i = 0; i < hot_issue1.length; i++) {
                $(hot_issue1).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(hot_issue1).eq(i).children('h3').html(msg.documents[i].title);
                $(hot_issue1).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "국내" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var hot_issue2 = $('.hot_issue .content2 li')
            for (var i = 0; i < hot_issue2.length; i++) {
                $(hot_issue2).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(hot_issue2).eq(i).children('h3').html(msg.documents[i].title);
                $(hot_issue2).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "외국" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var hot_issue3 = $('.hot_issue .content3 li')
            for (var i = 0; i < hot_issue3.length; i++) {
                $(hot_issue3).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(hot_issue3).eq(i).children('h3').html(msg.documents[i].title);
                $(hot_issue3).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "인터넷" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var hot_issue4 = $('.hot_issue .content4 li')
            for (var i = 0; i < hot_issue4.length; i++) {
                $(hot_issue4).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(hot_issue4).eq(i).children('h3').html(msg.documents[i].title);
                $(hot_issue4).eq(i).children('p').html(msg.documents[i].authors);
            }
        });

    //5
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "에세이" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var hot_issue5 = $('.hot_issue .content5 li')
            for (var i = 0; i < hot_issue5.length; i++) {
                $(hot_issue5).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(hot_issue5).eq(i).children('h3').html(msg.documents[i].title);
                $(hot_issue5).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "핫" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var hot_issue6 = $('.hot_issue .content6 li')
            for (var i = 0; i < hot_issue6.length; i++) {
                $(hot_issue6).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(hot_issue6).eq(i).children('h3').html(msg.documents[i].title);
                $(hot_issue6).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "교보" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var hot_issue7 = $('.hot_issue .content7 li')
            for (var i = 0; i < hot_issue7.length; i++) {
                $(hot_issue7).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(hot_issue7).eq(i).children('h3').html(msg.documents[i].title);
                $(hot_issue7).eq(i).children('p').html(msg.documents[i].authors);
            }
        });



//////이주의 책///////////////////////////////////////////////////////

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "에세이" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            console.log(msg)
            var week1 = $('.week .content1 li')
            for (var i = 0; i < week1.length; i++) {
                $(week1).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(week1).eq(i).children('h3').html('<a href="#">' + msg.documents[i].title + "</a>");
                $(week1).eq(i).children('p').html(msg.documents[i].authors);
            }
        });

//////베스트//////////////////////////////////////////////////////
    //1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best1 = $('.best .content1 li')
            for (var i = 0; i < best1.length; i++) {
                $(best1).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best1).eq(i).children('h3').html(msg.documents[i].title);
                $(best1).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "국내" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best2 = $('.best .content2 li')
            for (var i = 0; i < best2.length; i++) {
                $(best2).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best2).eq(i).children('h3').html(msg.documents[i].title);
                $(best2).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "외국" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best3 = $('.best .content3 li')
            for (var i = 0; i < best3.length; i++) {
                $(best3).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best3).eq(i).children('h3').html(msg.documents[i].title);
                $(best3).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "인터넷" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best4 = $('.best .content4 li')
            for (var i = 0; i < best4.length; i++) {
                $(best4).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best4).eq(i).children('h3').html(msg.documents[i].title);
                $(best4).eq(i).children('p').html(msg.documents[i].authors);
            }
        });

    //5
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "에세이" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best5 = $('.best .content5 li')
            for (var i = 0; i < best5.length; i++) {
                $(best5).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best5).eq(i).children('h3').html(msg.documents[i].title);
                $(best5).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //6
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "핫" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best6 = $('.best .content6 li')
            for (var i = 0; i < best6.length; i++) {
                $(best6).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best6).eq(i).children('h3').html(msg.documents[i].title);
                $(best6).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //7
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "교보" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best7 = $('.best .content7 li')
            for (var i = 0; i < best7.length; i++) {
                $(best7).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best7).eq(i).children('h3').html(msg.documents[i].title);
                $(best7).eq(i).children('p').html(msg.documents[i].authors);
            }
        });

//////가장 잘 팔리는 중//////////////////////////////////////////////////////
    //1
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best_selling1 = $('.best_selling .content1 li')
            for (var i = 0; i < best_selling1.length; i++) {
                $(best_selling1).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best_selling1).eq(i).children('h3').html(msg.documents[i].title);
                $(best_selling1).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //2
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "국내" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best_selling2 = $('.best_selling .content2 li')
            for (var i = 0; i < best_selling2.length; i++) {
                $(best_selling2).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best_selling2).eq(i).children('h3').html(msg.documents[i].title);
                $(best_selling2).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //3
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "인문" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best_selling3 = $('.best_selling .content3 li')
            for (var i = 0; i < best_selling3.length; i++) {
                $(best_selling3).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best_selling3).eq(i).children('h3').html(msg.documents[i].title);
                $(best_selling3).eq(i).children('p').html(msg.documents[i].authors);
            }
        });
    //4
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "경제 경영" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })

        .done(function (msg) {
            var best_selling4 = $('.best_selling .content4 li')
            for (var i = 0; i < best_selling4.length; i++) {
                $(best_selling4).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best_selling4).eq(i).children('h3').html(msg.documents[i].title);
                $(best_selling4).eq(i).children('p').html(msg.documents[i].authors);
            }
        });

    //5
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "어린이" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })
        .done(function (msg) {
            var best_selling5 = $('.best_selling .content5 li')
            for (var i = 0; i < best_selling5.length; i++) {
                $(best_selling5).eq(i).children('picture').html('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(best_selling5).eq(i).children('h3').html(msg.documents[i].title);
                $(best_selling5).eq(i).children('p').html(msg.documents[i].authors);
            }
        });






















});