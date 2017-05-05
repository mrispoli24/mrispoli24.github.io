
// check document ready first
$(document).ready(function(){
  // nav toggle
  function toggleNav() {
    if ($('.js-fixed-sidebar')[0].classList.contains('open')) {
      $('.js-fixed-sidebar')[0].classList.remove('open');
    } else {
      $('.js-fixed-sidebar')[0].classList.add('open');
    }

  }

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

  //scrolling animation
  $('a[href^="#"]').click(function(e) {
    var target = $($(this).attr('href'));
    if( target.length ) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
  // end scrolling animation

  // mobile-nav-toggle

  $('.js-nav-toggle').click(function(e) {
    e.preventDefault();
    toggleNav();
  });

  $('.js-nav').click(function(e) {
    $('.js-fixed-sidebar')[0].classList.remove('open');
  });

  // end mobile-nav-toggle

  // extended resume toggle
  $('.js-extended-resume-toggle').click(function(e) {
    e.preventDefault();
    $('.js-extended-resume').toggle('active');
  });

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
// end document ready
