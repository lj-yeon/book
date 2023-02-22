$(document).ready(function () {

    
    $.get("common_text/header.txt", function (data) {
        $(data).prependTo('body')
    })
    $.get("common_text/footer.txt", function (data) {
        $(data).appendTo('body')
    })

});
