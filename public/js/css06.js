/*
Övning: css06
Förklaring:

*/
$(function () {
    $('button').click(function () { 
        $('.test').css({
            'height': '+=10',
            'width': '+=10'
        });
    });
});
