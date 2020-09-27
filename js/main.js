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

// Анимация сообщения о результате
var showmsg = new TimelineMax();
showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 1,y: -40,ease: Expo.easeOut}));
showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 0,y: 0,ease: Expo.easeOut,delay: 2}));
showmsg.pause();

// Анимация плашки слова "подождите"
var loadanim = TweenLite.to(".loading", 1, {autoAlpha: 0.8});
loadanim.pause();

// Отправка данных на сервер
$('#form').trigger('reset');
$(function() {
  'use strict';
  $('#form').on('submit', function(e) {
    $('.msg').removeClass('error success');
    $('input').removeClass('inputerror');
    loadanim.play();
    e.preventDefault();
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {
          $('#form').trigger('reset');
          $('.msg').text('Сообщение успешно отправлено').addClass('success');
          showmsg.restart();loadanim.duration(0.3).reverse();
        } else {
          if (msg == 'mailerror') {
            $("#email").addClass('inputerror');
          }
          $('.msg').text('Ошибка. Сообщение не отправлено').addClass('error');
          showmsg.restart();loadanim.duration(0.3).reverse();
        }
      }
    });
  });
});
