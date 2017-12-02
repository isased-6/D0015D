$( document ).ready(function() {
    //Konfiguration för bildgalleri
    $(".bildvisning").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600, 
        'speedOut'		:	200, 
        'overlayShow'	:	false
    });
    //Startar bildgalleri
    $(".bildvisning").fancybox();
});