$(document).ready(function() {
  $("#carouselIndicators").carousel({ interval: 2000 });

  $("#login").click(function() {
    $("#loginModal").modal("toggle");
  });
});
