/*
Övning: css05
Förklaring:

*/
$(function () {
    $('button').click(function (e) { 
        e.preventDefault();
        $(".test").width(400),
        $(".test").height(500)
    });
});