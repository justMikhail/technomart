'use strict';

// -modal btn-buy

const buyBtns = document.querySelectorAll(`.products-card__button--buy`);
const shopcartModal = document.querySelector(`.shopcart-modal`);
const shopcartModalCloseButton = shopcartModal.querySelector(`.modal__close`);
const shopcart = document.querySelector(`.header-top__link--shopcart`);
const shopcartNumber = document.querySelector(`.header-top__link--shopcart span`);
const continueButton = shopcartModal.querySelector(`.continue`);
let shopcartCount = shopcartNumber.innerHTML;

for (let i = 0; i < buyBtns.length; i++) {
  const buyBtn = buyBtns[i];
  buyBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    shopcartCount++;
    shopcartNumber.innerHTML = shopcartCount;
    if (shopcartCount > 0) {
      shopcart.classList.add(`filled`);
    };
    shopcartModal.classList.remove(`hidden`);
  })
}

shopcartModalCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  shopcartModal.classList.add(`hidden`);
});

continueButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  shopcartModal.classList.add(`hidden`);
});

window.addEventListener("keydown", function(evt){
      if (evt.keyCode === 27) {
          if(!shopcartModal.classList.contains('hidden')){
              evt.preventDefault();
              shopcartModal.classList.add('hidden');
          }
      }
  }
);


//for (le i = 0; i <buyBtn.length)


// bookmark

const bookmarkBtns = document.querySelectorAll(`.products-card__button--bookmark`);
const bookmark = document.querySelector(`.header-top__link--bookmark`);
const bookmarkNumber = document.querySelector(`.header-top__link--bookmark span`);
let bookmarkCount = bookmarkNumber.innerHTML;

for (let i = 0; i < bookmarkBtns.length; i++) {
  const bookmarkBtn = bookmarkBtns[i];
  bookmarkBtn.addEventListener("click", function (evt) {
    bookmarkCount++;
    bookmarkNumber.innerHTML = bookmarkCount;
    if (bookmarkCount > 0) {
      bookmark.classList.add(`filled`)
    };

  });
};
