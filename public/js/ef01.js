/*
Övning: ef01
Förklaring:

*/
$('#show').click(function(e) {
    e.preventDefault();
    $('.box').show();
  });
$('#hide').click(function(e) {
    e.preventDefault();
    $('.box').hide();
})