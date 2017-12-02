
  //Variabler
  var lastSlide = 0;
  var currentSlide = 0;
  var slides = 0;
  var duration = 400;

  function scrollSlide(action)
  {
    //If vänster
    if(action === 'left' && currentSlide > 0)
    {
      currentSlide--;
    }
    //If höger
    else if(action === 'right'  && currentSlide < slides - 1)
    {
      currentSlide++;
    }
    
    //Dölj vänster pil if först
    if(currentSlide === 0)
    {
        $('#arrowLeft').hide();
    }
    //Annars visa vänster pil
    else
    {
        $('#arrowLeft').show();
    }
    //Dölj höger pil if sist
    if(currentSlide === slides - 1)
    {
        $('#arrowRight').hide();
    }
    //Annars visa höger pil
    else
    {
        $('#arrowRight').show();
    }
    
    //Uppdatera slider
    if(currentSlide !== lastSlide || action === 'update')
    {
      //Sätt duration vid bläddring
      var dur = action === 'update' ? 0 : duration;
      
      //Bläddra
      var w = $('.slides-wrapper');
      var width = w.outerWidth() + 5;
      var totWidth = width * currentSlide;
      w.animate({scrollLeft: totWidth}, dur);
      lastSlide = currentSlide;
    }
  }

  //Klicka vänster
  $(document).on("click touchstart","#arrowLeft",function(e) {
    e.preventDefault();
    //Scroll left
    scrollSlide('left');
  });

  //Klicka höger
  $(document).on("click touchstart","#arrowRight",function(e) {
    e.preventDefault();
    //Scroll right
    scrollSlide('right');
  });

  //Startar slider
  $( document ).ready(function() {
    slides = $('#slider > .slides-wrapper').children('.slide').length;
    if(slides > 0)
    {
      scrollSlide('update');
    }
  });

  //Window resize
  $( window ).resize(function() {
    //Anppasar slider
    scrollSlide('update');
  });

