$(function () {
  $(document).keypress(function (e) {
    var x = e.which;
    var out = $('#txt span').text(x);
  });
});
