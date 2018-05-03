/*
Övning: ev04
Förklaring:

*/
$("button").click(function (e) { 
    e.preventDefault();
    var div = "<div class=box></div>";
    $("button").after(div);
});