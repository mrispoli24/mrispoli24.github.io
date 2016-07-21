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
  // sticky nav
  $(window).scroll(stickyAction);
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
  //contact form script modal fire
  $('#contact-popup').modal({show:false})
  //email address validator
  function isValidEmail(email, e){
  	   var is_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	   return is_email.test(email);
  };
  // post request for contact form
  function contactSubmit(message) {
  	$.ajax({
  	    url: "https://formspree.io/mrispoli24@gmail.com",
  	    method: "POST",
  	    data: message,
  	    dataType: "json"
  	}).done(function(){
  		$('#contact-form').hide();
  		$('#success-message').show();
  	});
  };
  //contact form event handler
  $('#contact-form').on('submit',function(e){
  	var data = {
  		name: $('#name').val(),
  		_replyto: $('#replyTo').val(),
  		subject: $('#subject').val(),
  		message: $('#message').val()
  	};
  	// check honeypot for bots
  	if (!$('#gotcha').val().length) {
  		// error handling
  		if (!data.name.length) {
  			$('#name-error').show();
  			$('#name-error').parent().addClass('has-error');
  		} else if (!isValidEmail(data._replyto)) {
  			$('#name-error').hide();
  			$('#name-error').parent().removeClass('has-error');
  			$('#email-error').show();
  			$('#email-error').parent().addClass('has-error');
  		} else if (!data.subject.length) {
  			$('#name-error').hide();
  			$('#name-error').parent().removeClass('has-error');
  			$('#email-error').hide();
  			$('#email-error').parent().removeClass('has-error');
  			$('#subject-error').show();
  			$('#subject-error').parent().addClass('has-error');
  		} else if (!data.message.length) {
  			$('#name-error').hide();
  			$('#name-error').parent().removeClass('has-error');
  			$('#email-error').hide();
  			$('#email-error').parent().removeClass('has-error');
  			$('#subject-error').hide();
  			$('#subject-error').parent().removeClass('has-error');
  			$('#message-error').show();
  			$('#message-error').parent().addClass('has-error');
  		} else {
  			contactSubmit(data);
  		}
  	}
  	e.preventDefault();
  });



});
