/*
Övning: ef02
Förklaring:

*/
$(function () {
    $('#action').click(function (e) {
        e.preventDefault();
        $('.box').slideToggle();
    })
});