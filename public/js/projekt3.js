/*
Övning: projekt3
Förklaring:
faq
*/
$(function () {
    $("dt").click(function (e) { 
        var $this = $(this);
        var $sib = $this.siblings('dt');

        $this.next().slideToggle();
        $this.toggleClass('minus');

        $sib.removeClass('minus');
        $sib.next().slideUp();
    });
});