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

//Callback

$(document).ready(function() {
  $(function(){
    $("#phone").mask("+7 (999) 999-99-99");
  });

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Я скоро свяжусь с вами!");
      $("#form").trigger("reset");
    });
    return false;
  });

});
