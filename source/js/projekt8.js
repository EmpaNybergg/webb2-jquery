/*
Övning: projekt8
Förklaring:

*/
$(document).ready(function() {
    var movementStrength = 1005;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("header").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 55;
              var newvalueY = height * pageY * -1 - 50;
              $('header').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
    });