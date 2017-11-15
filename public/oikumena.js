// ISOTOPE
$(function(){
  $('#container').isotope({
    // options
    itemSelector : '.item',
    layoutMode   : 'masonry',
    masonry: {
      columnWidth: 220
    },
    animationEngine : 'best-available',
    animationOptions: {duration: 750, easing: 'linear', queue: false}
  });
});

// AJAX
$(document).ready(function(){
  /*
     here can be fetched and applied data/data.json
     
     NOW it's already done with the Perl script and served statically
  */

  $('#container').isotope('reLayout');
});
