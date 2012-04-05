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
  if (location.protocol.indexOf("http") != -1) {
    host = location.protocol + "//" + location.host + "/?";
  } else {
    host = "http://bigeasy.github.com/verbosity/?";
  }
  $("#verbiage").keyup(function () {
    encoded = escape($(this).val());
    encoded = encoded.replace(/@/g, '%40');
  });
  $("#share").click(function () {
    url = escape(host + encoded);
    text = escape("** Put your summary message here **\n\n");
    location.href = "https://twitter.com/share?url=" + url + "&text=" + text;
  });
});
