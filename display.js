$(function () {
  var text = unescape(location.search.substring(1));
  converter = new Showdown.converter();
  $("#message").html(converter.makeHtml(text));
});
