$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     console.log("scroll",scroll)
    if (scroll >= 40) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        $(".navbar").removeClass("navbar-scrolled");
    }
});