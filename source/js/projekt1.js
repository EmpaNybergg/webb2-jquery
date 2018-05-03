/*
Övning: projekt1
Förklaring:
bygg en sida som ser ut som vecka.se
*/
$(function () {
    var date = new Date();
    var dateNumber = date.getDate();
    var weekday = date.getDay();
    var month = date.getMonth();
  
    var week = [
      'söndag',
      'måndag',
      'tisdag',
      'onsdag',
      'torsdag',
      'fredag',
      'lördag'
    ];
  
    var months = [
      'januari',
      'februari',
      'mars',
      'april',
      'maj',
      'juni',
      'juli',
      'augusti',
      'september',
      'oktober',
      'november',
      'december'
    ];
  
    console.table(week);
    console.table(months);
    console.log(months[month]);
    $("#dag").text(week[weekday]);
    $("#datum").text(dateNumber)
    $("#månad").text(months[month])
  });
