$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     console.log("scroll",scroll)
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

$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.change-bg');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height()/1.1);
  
    $panel.each(function () {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        // Add class of currently active div
        $body.addClass('bg-color-black');
      }else{
        $body.removeClass('bg-color-black');
      }
    });    
    
  }).scroll();

  $(function(){
    $("body").on("click",".accordion .btn-link",function(){
      let imgNo = $(this).attr("data-img");
      console.log("imgNo",imgNo)
      $(".hiw-img").addClass("inactive");
      $(".hiw-img-"+imgNo).removeClass("inactive");
    })
  })
