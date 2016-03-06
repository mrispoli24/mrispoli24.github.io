$(document).ready(function(){
  function toggleNext(){
      $(".active").removeClass('active').next('#bg-slider .slide').add("#bg-slider .slide:first").last().addClass("active");
      setTimeout(function(){
        $('.animate').removeClass('animate');
        $('.active').addClass('animate');
      },500);
  };
  var startTimer = setInterval(toggleNext, 6500);

});
