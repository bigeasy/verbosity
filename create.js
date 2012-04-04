$(function () {
  var host = location.protocol + "//" + location.host + "/?"
  var encoded; 
  $("#verbiage").keyup(function () {
    encoded = escape($(this).val());
    $("#preview").text(encoded);
  });
  $("#share").click(function () {
    url = "http://verbosity.github.com/?" + encoded
    location.href = "https://twitter.com/share?url=" + escape(url)
  });
});
