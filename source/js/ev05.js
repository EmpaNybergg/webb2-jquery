/*
Övning: ev05
Förklaring:

*/
$(function () {
    $(document).mousemove(function (e) {
        var xkordinat = e.pageX;
        var ykordinat = e.pageY;
        $('#koordinat').text('X:' + xkordinat + 'y:' + ykordinat);

    })
});