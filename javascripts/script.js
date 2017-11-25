/*
  Beginning Slider
  */

  //Variables
  var lastSlide = 0;
  var currentSlide = 0;
  var slides = 0;
  var duration = 400;

  function scrollSlide(action)
  {
    //If left
    if(action === 'left' && currentSlide > 0)
    {
      currentSlide--;
    }
    //If right
    else if(action === 'right'  && currentSlide < slides - 1)
    {
      currentSlide++;
    }
    
    //Hide left arrow if first
    if(currentSlide === 0)
    {
        $('#arrowLeft').hide();
    }
    //Else show left arrow
    else
    {
        $('#arrowLeft').show();
    }
    //Hide right arrow if last
    if(currentSlide === slides - 1)
    {
        $('#arrowRight').hide();
    }
    //Else show right arrow
    else
    {
        $('#arrowRight').show();
    }
    
    //Update slider
    if(currentSlide !== lastSlide || action === 'update')
    {
      //Set duration
      var dur = action === 'update' ? 0 : duration;
      
      //Fix size
      var w = $('.slides-wrapper');
      var width = w.outerWidth() + 5;
      var totWidth = width * currentSlide;
      w.animate({scrollLeft: totWidth}, dur);
      lastSlide = currentSlide;
    }
  }

  //Click left
  $(document).on("click touchstart","#arrowLeft",function(e) {
    e.preventDefault();
    //Scroll left
    scrollSlide('left');
  });

  //Click right
  $(document).on("click touchstart","#arrowRight",function(e) {
    e.preventDefault();
    //Scroll right
    scrollSlide('right');
  });

  //Document ready
  $( document ).ready(function() {
    slides = $('#slider > .slides-wrapper').children('.slide').length;
    if(slides > 0)
    {
      scrollSlide('update');
    }
  });

  //Window resize
  $( window ).resize(function() {
    //Update slider
    scrollSlide('update');
  });
  /*
  END Slider
  */



$( document ).ready(function() {
    $(".bildvisning").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600, 
        'speedOut'		:	200, 
        'overlayShow'	:	false
    });
});