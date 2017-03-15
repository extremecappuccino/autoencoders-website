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

  $("nav ul li a[content]").click(function(e) {
    $("nav ul li").removeClass("selected");
    $("nav ul li a[content]:last").parent().addClass("last");
    $(e.target).parent().addClass("selected");
    $("nav ul li[content]").stop().slideUp(200);
    $("nav ul li[content=" + $(e.target).attr("content") + "]").stop().slideDown(200);
  });

  $("nav ul li a[content]:last").click(function(e) {
    $("nav ul li a[content]:last").parent().removeClass("last");
  });
});