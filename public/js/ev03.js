/*
Övning: ev03
Förklaring:

*/
$("h1").click(function (e) { 
    e.preventDefault();
    console.log("Du har klickat på h1:an")
});
$("p").dblclick(function (e) { 
    e.preventDefault();
    console.log("Du har klickar på p:et")
    
});