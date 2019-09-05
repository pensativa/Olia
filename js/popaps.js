//Открыть popap о себе

var buttonAbout = document.querySelector('.about__button');

buttonAbout.classList.remove('about__button--nojs');

buttonAbout.addEventListener('click', function() {
  event.preventDefault();
  if (buttonAbout.classList.contains('about__button--close')) {
    buttonAbout.classList.remove('about__button--close');
    buttonAbout.classList.add('about__button--open');
  } else {
    buttonAbout.classList.add('about__button--close');
    buttonAbout.classList.remove('about__button--open');
  }
});

//Popaps dj
