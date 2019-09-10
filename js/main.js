//Mobile menu

jQuery(function ($) {
  $(function(){
    $('#menu__toggle').on('click', function(){
      $('.menu').slideToggle(300, function(){
          if($(this).css('display') === 'none'){
              $(this).removeAttr('style');
          }
      });
    });
  });
});

var navToggle = document.querySelector('.menu__item--explosion');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('menu__item--close')) {
    navToggle.classList.remove('menu__item--close');
    navToggle.classList.add('menu__item--open');
  } else {
    navToggle.classList.add('menu__item--close');
    navToggle.classList.remove('menu__item--open');
  }
});

//to top

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#to-top').fadeIn();
    } else {
      $('#to-top').fadeOut();
    }
  });
  $('#to-top').click(function() {
    $('body, html').animate({scrollTop:0},800);
  });
});
