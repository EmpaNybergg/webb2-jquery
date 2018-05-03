$(function () {
  var button = $('button');
  var win = $(window);

  button.click(function (e) {
    console.log(e.type);
  });

  button.mouseover(function (e) {
    console.log(e.type);
  });

  win.resize(function (e) {
    console.log(e.type);
    console.log(win.width());
  });
});
