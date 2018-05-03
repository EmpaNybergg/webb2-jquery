/*
Övning: dom05
Förklaring:

*/
$('button').click(function (e) { 
    e.preventDefault();
    $('ol').children().eq(0).remove();
});
