/*
Övning: projekt5
Förklaring:

*/
$(function () {
    $(document).mousemove(function (e) {
        $('.main').prepend("<div class='boll'></div>");
        var denna = $('.boll').eq(0);
        var xkordinat = e.pageX;
        var ykordinat = e.pageY;

        var färg1 = Math.floor((Math.random() * 255) + 0);
        var färg2 = Math.floor((Math.random() * 255) + 0);
        var färg3 = Math.floor((Math.random() * 255) + 0);
        $(denna).css({
            'top': ykordinat,
            'left': xkordinat,
            'background-color': 'rgb(' +färg1 +',' +färg2 + ',' + färg3 +')'
        });
console.log(färg1)
    })
});