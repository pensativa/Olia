//Loader
/*
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded__hiding');
  }, 2);
}
*/
//Onepage scroll
jQuery(function ($) {
  if ($(window).width() > 992 ) {
(function (e) {
  var container = document.querySelector('.main_wrapper');
  var items = Array.from(container.querySelectorAll('.section'));
  let itemsNumber = items.length;
  var navLinks = Array.from(document.querySelectorAll('.menu__link'));
  let currentItemIndex = 0;
  let scroll = true;

  var moveSection = index => {
    let positionTop = (-index * 100) + '%';
    container.style.top = positionTop;

    if (container.style.top === '0%') {
      $('.main_wrapper').addClass('about');
      $('.main_wrapper').removeClass('contacts');
      $('.menu__link').removeClass('active');
      $('.menu__item:first-of-type').children('.menu__link').addClass('active');
    } else if (container.style.top === '-100%') {
      $('.main_wrapper').removeClass('contacts');
      $('.main_wrapper').removeClass('about');
      $('.menu__link').removeClass('active');
      $('.menu__item:nth-of-type(2)').children('.menu__link').addClass('active');
    } else if (container.style.top === '-200%') {
      $('.main_wrapper').removeClass('contacts');
      $('.main_wrapper').removeClass('about');
      $('.menu__link').removeClass('active');
      $('.menu__item:nth-of-type(3)').children('.menu__link').addClass('active');
    } else if (container.style.top === '-300%') {
      $('.main_wrapper').removeClass('contacts');
      $('.main_wrapper').removeClass('about');
      $('.menu__link').removeClass('active');
      $('.menu__item:nth-of-type(4)').children('.menu__link').addClass('active');
    } else if (container.style.top === '-400%') {
      $('.main_wrapper').removeClass('contacts');
      $('.main_wrapper').removeClass('about');
      $('.menu__link').removeClass('active');
      $('.menu__item:nth-of-type(5)').children('.menu__link').addClass('active');
    } else if (container.style.top === '-500%') {
      $('.main_wrapper').addClass('contacts');
      $('.main_wrapper').removeClass('about');
      $('.menu__link').removeClass('active');
      $('.menu__item:nth-of-type(6)').children('.menu__link').addClass('active');
    }
  };

  var setLocation = index => window.location = `#${items[index].id}`;

  // Set strart params
  container.style.top = 0;
  setLocation(currentItemIndex);
  itemsNumber--;

  // Scrolling section by navigation.
  navLinks.forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      let sectionID = element.getAttribute('href').slice(1);

      currentItemIndex = items.findIndex(element => {
        return element.id === sectionID;
      });

      moveSection(currentItemIndex);
    });
  });

  // Scrolling sections by mouse/touchpad.
  window.addEventListener('wheel', event => {
    event.preventDefault();
    event.stopPropagation();

    let direction = event.deltaY;

    if (scroll) {
      if (direction > 0 && currentItemIndex < itemsNumber) {
        currentItemIndex++;
        scroll = false;
      } else if (direction < 0 && currentItemIndex !== 0) {
        currentItemIndex--;
        scroll = false;
      }
      moveSection(currentItemIndex);
    }

  });

  container.addEventListener('transitionend', () => {
    setTimeout(() => scroll = true, 200);
    setLocation(currentItemIndex);
  });

})();

  }
});

jQuery(function ($) {
   $('.menu__link').on('click', function(evet){
    $('.menu__link').removeClass('active');
    $(this).addClass('active');
  });
});

//Services

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
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//Callback popap

jQuery(function ($) {
  $(function(){
    $('.button--contacts').on('click', function(evet){
      evet.preventDefault();
      $('.callback--contacts').addClass('open');
    });

    $('.callback__clouse').on('click', function(evet){
      evet.preventDefault();
      $('.callback--contacts').removeClass('open');
    });
  });
});
