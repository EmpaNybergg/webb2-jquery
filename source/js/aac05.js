/*
Övning: aac05
Förklaring:
före och efter
*/
$(function () {
    var före = $('p').prepend("WEUWEB02 ")
    var efter = $('p').append(" En rolig kurs")

    console.log(före + efter);
});