$(function () {
  var host, encoded;
  if (location.search.length) {
    var text = unescape(location.search.substring(1));
    converter = new Showdown.converter();
    $("#message").html(converter.makeHtml(text));
    $("#editor").hide();
  } else {
    $("#nav").hide();
    $("#message").remove();
    $("#editor").show();
  }
  if (location.port === 80) {
    host = location.protocol + "//" + location.host + "/?";
  } else {
    host = "http://bigeasy.github.com/verbosity/?";
  }
  $("#verbiage").keyup(function () {
    encoded = escape($(this).val());
  });
  $("#share").click(function () {
    url = escape(host + encoded);
    url = url.replace(/@/g, "%40");
    text = escape("** Put your summary message here **\n\n");
    location.href = "https://twitter.com/share?url=" + url + "&text=" + text;
  });
});
