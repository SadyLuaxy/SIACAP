(function($){
  "use strict";


  /* Tabs
  -------------------------------------------------------*/
  $('.tabs__trigger').on('click', function(e) {
    var currentAttrValue = $(this).attr('href');
    $('.tabs__content-trigger ' + currentAttrValue).stop().fadeIn(1000).siblings().hide();
    $(this).parent('li').addClass('tabs__item--active').siblings().removeClass('tabs__item--active');
    e.preventDefault();
  }); 

})(jQuery);