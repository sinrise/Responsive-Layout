$(function() {
    function a(a) {
        $(a).toggleClass("open");
    }
    $("body").on("click", "#nav_toggle", function(b) {
        b.preventDefault(), a("header"), a("#nav_toggle"), a("#nav_menu");
    }).on("click", ".mininav-dropdown > a", function(b) {
        b.preventDefault(), a($(this).attr("href"));
    });
});