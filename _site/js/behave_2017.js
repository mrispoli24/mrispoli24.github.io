
// check document ready first
$(document).ready(function(){

  //scrolling animation
  $('a[href^="#"]').click(function(event) {
    var target = $($(this).attr('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
  // end scrolling animation

});
// end document ready
