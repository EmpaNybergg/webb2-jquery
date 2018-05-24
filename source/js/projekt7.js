/*
Övning: projekt7
Förklaring:

*/
$(function () {
    var colors = {};
    var r, g, b;
    for(var i = 0; i < 300; i++){
        r = Math.floor((Math.random() * 256));
        g = Math.floor((Math.random() * 256));
        b = Math.floor((Math.random() * 256));
        
        colors[i] = 'rgb(' + r + ',' + g + ',' + b +')'
    }

    $(document).keyup(function(e){
        var key = e.keyCode;
        console.log(key);

        $('div').text(colors[key]).css({
            'color' : colors[key],
            'filter' : 'invert(100%)'
        });
        
        $('body').css({
        'background-color': colors[key]
    });



    })        
});