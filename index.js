/* Слайдер кофе */
'use strict'
function Slider(btn, slide) {
  let buttons = document.querySelectorAll(btn);
  let slides = document.querySelectorAll(slide);
  let stepSize = slides[0].firstElementChild.clientWidth + 30;
  let step = 0;
  function getStep() {
      for (let elem of slides) elem.style.transform = `translateX(${-stepSize * step}px)`;
  }
  let removeClass = (n) => buttons[n].classList.remove('active');
  let addClass = (n) => buttons[n].classList.add('active');
  buttons[1].addEventListener('click', function () {
      if (step >= slides[0].children.length - 2) removeClass(1);
      step++;
      getStep();
      if (step >= 1) addClass(0);
  })
  buttons[0].addEventListener('click', function () {
      step--;
      getStep();
      if (step < slides[0].children.length) addClass(1);
      if (step == 0) removeClass(0);
  })
}
Slider('.coffee__slider-btn', '.coffee__top-shelf');
Slider('.coffee__slider-btn', '.coffee__bottom-shelf');
Slider('.combo__slider-btn', '.combo__slider');

/* Переключение табов Giftset */
function giftsetTabs() {
    let tabs = document.querySelectorAll('.giftset__item');
    let buttons = document.querySelectorAll('.giftset__tab-btn');
    function removeClass(elems) {
        for (let elem of elems) elem.classList.remove('active');
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            removeClass(tabs);
            removeClass(buttons);
            buttons[i].classList.add('active');
            tabs[i].classList.add('active');
        })
    }
}
giftsetTabs();