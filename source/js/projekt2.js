/*
Övning: projekt2
Förklaring:
faq
*/
$(function () {
    $("dt").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("minus");

        $(this).next().slideToggle(400);
    });
});