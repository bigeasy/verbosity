$(function () {
  var host, encoded, text;
  if (location.search.length) {
    text = unescape(location.search.substring(1));
    converter = new Showdown.converter();
    $("#message").html(converter.makeHtml(text));
    $("#editor").hide();
    $("#preview").hide();
    $("#edit").show();
  } else {
    $("#nav").hide();
    $("#edit").hide();
    $("#message").hide();
    $("#editor").show();
  }
  if (location.protocol.indexOf("http") != -1) {
    host = location.protocol + "//" + location.host + location.pathname + "?";
  } else {
    host = "http://bigeasy.github.com/verbosity/?";
  }
  $("#verbiage").keyup(function () {
    text = $(this).val()
  });
  $("#preview").click(function () {
    encoded = escape(text || "");
    encoded = encoded.replace(/@/g, '%40');
    location.href = host + encoded
    return false;
  });
  $("#edit").click(function () {
    $("#nav").hide();
    $("#message").hide();
    $("#editor").show();
    $("#preview").show();
    $("#edit").hide();
    $("textarea").text(text);
    return false;
  });
  $("#share").click(function () {
    encoded = escape(text || "");
    encoded = encoded.replace(/@/g, '%40');
    url = escape(host + encoded);
    text = escape("** Put your summary message here **\n\n");
    location.href = "https://twitter.com/share?url=" + url + "&text=" + text;
  });
});
