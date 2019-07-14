//Убирает якорь из url

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
      if (direction > 0 && currentItemIndex <= itemsNumber) {
        currentItemIndex++;
        scroll = false;
      } else if (direction < 0 && currentItemIndex > 0) {
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
$('.owl-carousel').owlCarousel({
    items: 3,
    lazyLoad: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})