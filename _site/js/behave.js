$(document).ready(function(){
  // header slideshow
  function toggleNext(){
      $(".active").removeClass('active').next('#bg-slider .slide').add("#bg-slider .slide:first").last().addClass("active");
      setTimeout(function(){
        $('.animate').removeClass('animate');
        $('.active').addClass('animate');
      },500);
  };
  var startTimer = setInterval(toggleNext, 6500);

  // scroll zoom effect
  // var prevScrollTop = 0;
  // $(window).scroll(function() {
  //   var currScrollTop = $(this).scrollTop();
  //   if (currScrollTop > prevScrollTop) {
  //     $('.slide').css('width', '-=10');
  //   } else {
  //     $('.slide').css('width', '+=10');
  //   }
  //
  //   prevScrollTop = currScrollTop;
  // })
  function unstick(el) {
    el.removeClass('sticky');
    el.next('.section').css('margin-top', '0');
  };

  function stick(el) {
    el.addClass('sticky');
    el.next('.section').css('margin-top', el.height());
  };

  function stickyAction() {
      var scrollTop = $(window).scrollTop() + $('#header-details').height();
      var $this = $('.is-sticky');
      var offsetTop = $('#sticky-anchor').offset().top;

      if (scrollTop > offsetTop) {
        stick($this);
      } else {
        unstick($this);
      }
  }

  $(window).scroll(stickyAction);

  $('a[href^="#"]').click(function(event) {
    var target = $($(this).attr('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
});
