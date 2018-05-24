/*
Övning: projekt6
Förklaring:

*/
$(function () {
    $(document).keypress(function(e){
        var key = e.keyCode;
        var color;
        if(key == 97) color = 'green';
        else if(key == 98) color = 'blue';
        else if(key == 99) color = 'purple';
        else color = 'red'
        $('body').css({
            'background-color' : color,
        })
    })
});