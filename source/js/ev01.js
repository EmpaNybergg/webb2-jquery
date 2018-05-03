/*
Övning: ev01
Förklaring:

*/
$(function () {
    $('#textinput').keyup(function (e) { 
        var a = $(this).val();
        
        $('#textoutput').text(a);
        
    });

$('button').click(function (e) { 
        e.preventDefault();
        $('#textinput').val('');
        $('#textoutput').empty();
    });
});