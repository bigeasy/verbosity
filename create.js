$(function () {
  var host = location.protocol + "//" + location.host + "/?"
  var encoded; 
  $("#verbiage").keyup(function () {
    encoded = escape($(this).val());
    $("#preview").text(encoded);
  });
  $("#share").click(function () {
    url = "http://bigeasy.github.com/verbosity/?" + encoded
    location.href = "https://twitter.com/share?url=" + escape(url)
  });
});
