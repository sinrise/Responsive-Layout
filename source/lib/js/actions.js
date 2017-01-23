$(function(){
  
  function toggle_open(x) {
    $(x).toggleClass("open");
  }

  $("body")
    .on("click", "#nav_toggle", function(e){
      e.preventDefault();
      toggle_open("header");
      toggle_open("#nav_toggle");
      toggle_open("#nav_menu");
    })
    .on("click", ".mininav-dropdown > a", function(e) {
      e.preventDefault();
      toggle_open($(this).attr("href"));
    })
})