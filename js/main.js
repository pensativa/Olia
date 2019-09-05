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

//Slider
$('.owl-carousel').owlCarousel({
  items: 3,
  lazyLoad: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    760: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: false
    }
  }
});

//Reviews


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
