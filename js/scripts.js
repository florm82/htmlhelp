$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I told you, This is a header.");
  });
  $("p").click(function() {
    alert("This is a paragraph.");
  });
  $("img").click(function() {
    alert("This is an image.");
  });
  $(".clickable").click(function() {
    $("#Walrus-showing").slideToggle();
    $("#Walrus-hidden").slideToggle();
  });
});
