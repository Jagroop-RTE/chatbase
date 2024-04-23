$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //  console.log("scroll",scroll)
    if (scroll >= 40) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        $(".navbar").removeClass("navbar-scrolled");
    }
});


$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
  var changeBgSection = $('.change-bg');
  var changeBgSectionOffset = changeBgSection.offset().top;

  if (scrollPos >= changeBgSectionOffset - 100) {
    $('body').removeClass(function (index, css) {return (css.match (/(^|\s)color-\S+/g) || []).join(' ');});
        
  // Add class of currently active div
  $('body').addClass('bg-color-black');
  } else {
    $('body').removeClass('bg-color-black'); // Use jQuery to remove class from all sections
  }
});
});