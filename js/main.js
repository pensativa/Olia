//Onepage scroll
(function() {
  const container = document.querySelector('.main_wrapper');
  const items = Array.from(container.querySelectorAll('.section'));
  let itemsNumber = items.length;
  const navLinks = Array.from(document.querySelectorAll('.menu_item_link'));
  let currentItemIndex = 0;
  let scroll = true;

  const moveSection = index => {
    let positionTop = (-index * 100) + '%';
    container.style.top = positionTop;
  };

  const setLocation = index => window.location = `#${items[index].id}`;

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
    setTimeout(() => scroll = true, 300);
    setLocation(currentItemIndex);
  });

})();

var header = document.getElementById("menu");
var btns = header.getElementsByClassName("menu_item_link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Accardion
$(function(){
//обрабатывем кликк по блоку с классом trigger
$('.trigger').on('click', function(e){
    e.preventDefault();
//получаем нужные нам данные
        var $this = $(this),
        //получаем всё блоки menu
        container = $this.closest('.accordeon'),
        //получаем li по которому кликнули
        item = $this.closest('.item'),
        //получаем все другие li
        items = container.find('.item'),
        //выбираем из li активный
        activeItem = items.filter('.active'),
        //выбираем из li по кторому кликнули блок контен
        content = item.find('.content'),
        //выбираем у li с классом active блок контент
        activeContent = activeItem.find('.content');

        //если нет li с классом active по которому кликнули
        if (!item.hasClass('active')) {
            //убираем класс active
            items.removeClass('active');
            //добавляем active кликнутому
            item.addClass('active');
            //у того у кого был active задаём ширину 0
            activeContent.animate({
                   'width' : '0px'
            });
            //кликнутому 530        
            content.animate({
                   'width' : '600px'
            });
        //иначе
        } else {
            item.removeClass('active');
            content.animate({
                   'width' : '0px'
            });

        }
});

// клик вне аккордеона
$(document).on('click', function (e) {
   var $this = $(e.target);
   if (!$this.closest('.accordeon').length) {
         $('.content').animate({
               'width' : '0px'
         });
         $('.item').removeClass('active');
   }
});
});

//Slider

'use strict';
    var slider = (function (config) {

      const ClassName = {
        INDICATOR_ACTIVE: 'slider__indicator_active',
        ITEM: 'slider__item',
        ITEM_LEFT: 'slider__item_left',
        ITEM_RIGHT: 'slider__item_right',
        ITEM_PREV: 'slider__item_prev',
        ITEM_NEXT: 'slider__item_next',
        ITEM_ACTIVE: 'slider__item_active'
      }

      var
        _isSliding = false, // индикация процесса смены слайда
        _interval = 0, // числовой идентификатор таймера
        _transitionDuration = 700, // длительность перехода
        _slider = {}, // DOM элемент слайдера
        _items = {}, // .slider-item (массив слайдов) 
        _sliderIndicators = {}, // [data-slide-to] (индикаторы)
        _config = {
          selector: '', // селектор слайдера
          isCycling: true, // автоматическая смена слайдов
          direction: 'next', // направление смены слайдов
          interval: 5000, // интервал между автоматической сменой слайдов
          pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
        };

      var
        // функция для получения порядкового индекса элемента
        _getItemIndex = function (_currentItem) {
          var result;
          _items.forEach(function (item, index) {
            if (item === _currentItem) {
              result = index;
            }
          });
          return result;
        },
        // функция для подсветки активного индикатора
        _setActiveIndicator = function (_activeIndex, _targetIndex) {
          if (_sliderIndicators.length !== _items.length) {
            return;
          }
          _sliderIndicators[_activeIndex].classList.remove(ClassName.INDICATOR_ACTIVE);
          _sliderIndicators[_targetIndex].classList.add(ClassName.INDICATOR_ACTIVE);
        },

        // функция для смены слайда
        _slide = function (direction, activeItemIndex, targetItemIndex) {
          var
            directionalClassName = ClassName.ITEM_RIGHT,
            orderClassName = ClassName.ITEM_PREV,
            activeItem = _items[activeItemIndex], // текущий элемент
            targetItem = _items[targetItemIndex]; // следующий элемент

          var _slideEndTransition = function () {
            activeItem.classList.remove(ClassName.ITEM_ACTIVE);
            activeItem.classList.remove(directionalClassName);
            targetItem.classList.remove(orderClassName);
            targetItem.classList.remove(directionalClassName);
            targetItem.classList.add(ClassName.ITEM_ACTIVE);
            window.setTimeout(function () {
              if (_config.isCycling) {
                clearInterval(_interval);
                _cycle();
              }
              _isSliding = false;
              activeItem.removeEventListener('transitionend', _slideEndTransition);
            }, _transitionDuration);
          };

          if (_isSliding) {
            return; // завершаем выполнение функции если идёт процесс смены слайда
          }
          _isSliding = true; // устанавливаем переменной значение true (идёт процесс смены слайда)

          if (direction === "next") { // устанавливаем значение классов в зависимости от направления
            directionalClassName = ClassName.ITEM_LEFT;
            orderClassName = ClassName.ITEM_NEXT;
          }

          targetItem.classList.add(orderClassName); // устанавливаем положение элемента перед трансформацией
          _setActiveIndicator(activeItemIndex, targetItemIndex); // устанавливаем активный индикатор

          window.setTimeout(function () { // запускаем трансформацию
            targetItem.classList.add(directionalClassName);
            activeItem.classList.add(directionalClassName);
            activeItem.addEventListener('transitionend', _slideEndTransition);
          }, 0);

        },
        // функция для перехода к предыдущему или следующему слайду
        _slideTo = function (direction) {
          var
            activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE), // текущий элемент
            activeItemIndex = _getItemIndex(activeItem), // индекс текущего элемента 
            lastItemIndex = _items.length - 1, // индекс последнего элемента
            targetItemIndex = activeItemIndex === 0 ? lastItemIndex : activeItemIndex - 1;
          if (direction === "next") { // определяем индекс следующего слайда в зависимости от направления
            targetItemIndex = activeItemIndex == lastItemIndex ? 0 : activeItemIndex + 1;
          }
          _slide(direction, activeItemIndex, targetItemIndex);
        },
        // функция для запуска автоматической смены слайдов в указанном направлении
        _cycle = function () {
          if (_config.isCycling) {
            _interval = window.setInterval(function () {
              _slideTo(_config.direction);
            }, _config.interval);
          }
        },
        // обработка события click
        _actionClick = function (e) {
          var
            activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE), // текущий элемент
            activeItemIndex = _getItemIndex(activeItem), // индекс текущего элемента
            targetItemIndex = e.target.getAttribute('data-slide-to');

          if (!(e.target.hasAttribute('data-slide-to') || e.target.classList.contains('slider__control'))) {
            return; // завершаем если клик пришёлся на не соответствующие элементы
          }
          if (e.target.hasAttribute('data-slide-to')) {// осуществляем переход на указанный сдайд 
            if (activeItemIndex === targetItemIndex) {
              return;
            }
            _slide((targetItemIndex > activeItemIndex) ? 'next' : 'prev', activeItemIndex, targetItemIndex);
          } else {
            e.preventDefault();
            _slideTo(e.target.classList.contains('slider__control_next') ? 'next' : 'prev   ');
          }
        },
        // установка обработчиков событий
        _setupListeners = function () {
          // добавление к слайдеру обработчика события click
          _slider.addEventListener('click', _actionClick);
          // остановка автоматической смены слайдов (при нахождении курсора над слайдером)
          if (_config.pause && _config.isCycling) {
            _slider.addEventListener('mouseenter', function (e) {
              clearInterval(_interval);
            });
            _slider.addEventListener('mouseleave', function (e) {
              clearInterval(_interval);
              _cycle();
            });
          }
        };

      // init (инициализация слайдера)
      for (var key in config) {
        if (key in _config) {
          _config[key] = config[key];
        }
      }
      _slider = (typeof _config.selector === 'string' ? document.querySelector(_config.selector) : _config.selector);
      _items = _slider.querySelectorAll('.' + ClassName.ITEM);
      _sliderIndicators = _slider.querySelectorAll('[data-slide-to]');
      // запуск функции cycle
      _cycle();
      _setupListeners();

      return {
        next: function () { // метод next 
          _slideTo('next');
        },
        prev: function () { // метод prev 
          _slideTo('prev');
        },
        stop: function () { // метод stop
          clearInterval(_interval);
        },
        cycle: function () { // метод cycle 
          clearInterval(_interval);
          _cycle();
        }
      }
    }({
      selector: '.slider',
      isCycling: true,
      direction: 'next',
      interval: 5000,
      pause: true
    }));
