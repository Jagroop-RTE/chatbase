$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     console.log("scroll",scroll)
    if (scroll >= 40) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        $(".navbar").removeClass("navbar-scrolled");
    }
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