/*
Övning: projekt4
Förklaring:

*/
$(function () {
    $(document).mousemove(function (e) {
        var xkordinat = e.pageX;
        var ykordinat = e.pageY;
        $('.ruta').css({
            'top': ykordinat,
            'left': xkordinat
        });
    })
});