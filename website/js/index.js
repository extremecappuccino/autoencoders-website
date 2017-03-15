$(function() {
  $(".overview li a").mouseover(function(e) {
    $(".overview li a").removeClass("selected");
    $(e.target).addClass("selected");
    $(".description").html($(e.target).attr("description"));
  });
});