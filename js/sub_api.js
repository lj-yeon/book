$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설" },
        headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
    })
})