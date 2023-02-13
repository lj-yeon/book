$(document).ready(function () {
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "" },
    headers: { Authorization: "KakaoAK 602679a60c7a58cbf3cb9fc730890aaa" }
  })
  
    .done(function (msg) {
        console.log(msg);
      var boxs = document.getElementsByClassName('box');

      for (var i = 0; i < boxs.length; i++) {

        $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_a >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


        var str = msg.documents[i].contents;
        var str2 = str.substring(0, 60);

        $("#list_a >.box").eq(i).append("<p>" + '<a href="sub2.html">' + str2 + "</a>" + "</p>");
        $("#list_a >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

      }

    });
});