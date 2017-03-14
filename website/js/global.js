$(function() {
  $(".hamburger").click(function() {
    $(".hamburger").fadeOut(200, function() {
      $("nav, .overlay").fadeIn(200);
    });
  });

  $(".close").click(function() {
    $("nav, .overlay").fadeOut(200, function() {
      $(".hamburger").fadeIn(200);
    });
  });

  $(".overview li a").mouseover(function(e) {
    $(".overview li a").removeClass("selected");
    $(e.target).addClass("selected");
    $(".description").html($(e.target).attr("description"));
  });
});