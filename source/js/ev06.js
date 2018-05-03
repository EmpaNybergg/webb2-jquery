/*
Övning: ev06
Förklaring:

*/
$(function () {
    $('p').hover(function() {
        $(this).addClass('webb');
        var text = $(this).text();
        $('#txt').text(text);
    }, function() {
        $(this).removeClass('webb');
        $('#txt').text('');
      });

});