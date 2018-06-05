$(document).ready(function() {
    $('.galleri').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{enabled:true,
        tPrev: 'Föregående bild (Vänster piltangent)',
        tNext: 'Nästa bild (Höger pitangent)',
        tCounter: '<span class="mtp-counter">%curr% av %total%</span>'}
    });
});
