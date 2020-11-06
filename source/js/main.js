'use strict';

// Блок Сервисы. Слайдер.----------------------------------------------------------------------

const services = document.querySelector(`.services`);
const servicesButtons = services.querySelectorAll(`.services-slider__btn`);
const servicesItems = services.querySelectorAll(`.services-slider__item`);

let currentButton = services.querySelector(`.services-slider__btn--current`);

const searchCurrentItem = () => {
  for (let i = 0; i < servicesItems.length; i++) {
    if (!servicesItems[i].classList.contains(`visually-hidden`)) {
      return servicesItems[i];
    }
  }
}

let currentItem = searchCurrentItem();

for (let i = 0; i < servicesButtons.length; i++) {
  servicesButtons[i].addEventListener("click", function () {
    if (servicesButtons[i].classList.contains(`services-slider__btn--current`)) {
      currentButton = servicesButtons[i];
    } else {
      currentButton.classList.remove(`services-slider__btn--current`);
      servicesButtons[i].classList.add(`services-slider__btn--current`);
      currentButton = servicesButtons[i];

      servicesItems[i].classList.remove(`visually-hidden`);
      currentItem.classList.add(`visually-hidden`);
      currentItem = servicesItems[i];
    }
  });
}

// Блок Сервисы. Слайдер.----------------------------------------------------------------------

// Блок Фичи Слайдер---------------------------------------------------------------------------
const catalogSlider = document.querySelector(`.slider-catalog`);

const arrowPrew = catalogSlider.querySelector(`.slider-catalog__arrow-prew`);
const arrowNext = catalogSlider.querySelector(`.slider-catalog__arrow-next`);

const slideOneDot = catalogSlider.querySelector(`.slider-catalog__dot--1`);
const slideTwoDot = catalogSlider.querySelector(`.slider-catalog__dot--2`);

const slideOne = catalogSlider.querySelector(`.slider-catalog__item--1`);
const slideTwo = catalogSlider.querySelector(`.slider-catalog__item--2`);

const getSlideOne = () => {
  slideOne.classList.remove(`hidden`);
  slideTwo.classList.add(`hidden`);

  slideOneDot.classList.add(`slider-catalog__dot--selected`);
  slideTwoDot.classList.remove(`slider-catalog__dot--selected`);

  arrowPrew.disabled = true;
  arrowNext.disabled = false;

  slideOneDot.disabled = true;
  slideTwoDot.disabled = false;
};

const getSlideTwo = () => {
  slideOne.classList.add(`hidden`);
  slideTwo.classList.remove(`hidden`);

  slideOneDot.classList.remove(`slider-catalog__dot--selected`);
  slideTwoDot.classList.add(`slider-catalog__dot--selected`);

  arrowPrew.disabled = false;
  arrowNext.disabled = true;

  slideOneDot.disabled = false;
  slideTwoDot.disabled = true;
};

arrowPrew.addEventListener("click", getSlideOne);

arrowNext.addEventListener("click", getSlideTwo);

slideOneDot.addEventListener("click", getSlideOne);

slideTwoDot.addEventListener("click", getSlideTwo);

// modal pop-up--------------------------------------------------------------------------------

// feedback-modal

const feedbackModal = document.querySelector(`.feedback-modal`);
const feedbackLink = document.querySelector(`.feedback-link`);

const feedbackCloseButton = feedbackModal.querySelector(`.modal__close`);
const feedbackForm = feedbackModal.querySelector(`.feedback-modal__form`);
const inputUserName = feedbackModal.querySelector('[name=user-name]');
const inputUserMail = feedbackModal.querySelector(`[name=user-mail]`);

let isLocalStorageSupported = true;

let savedUserName;
let savedUserMail;

//Проверяем наличие LocalStorage
try{
    savedUserName = localStorage.getItem(`userName`);
    savedUserMail = localStorage.getItem(`userMail`);
}
catch(error){
    isLocalStorageSupported = false;
};

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackModal.classList.remove(`hidden`);
  feedbackModal.classList.add(`show`);

  inputUserName.focus();
  if (savedUserName) {
    inputUserName.value = savedUserName;
  }
  if (savedUserMail) {
    inputUserMail.value = savedUserMail;
  }
});

feedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add(`hidden`);
  feedbackModal.classList.remove(`show`);
  feedbackModal.classList.remove(`form-error`);

  mapModal.classList.add(`hidden`);
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!inputUserName.value || !inputUserMail.value) {
    evt.preventDefault();
    feedbackModal.classList.remove(`form-error`);
    feedbackModal.ofsetWidth = feedbackModal.ofsetWidth;
    feedbackModal.classList.add(`form-error`);
  } else {
    if (isLocalStorageSupported) {
      localStorage.setItem(`userName`, userNameInput.value);
      localStorage.setItem(`userMail`, userMailInput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!feedbackModal.classList.contains(`hidden`)) {
      evt.preventDefault();
      feedbackModal.classList.add(`hidden`);
      feedbackModal.classList.remove(`show`);
      feedbackModal.classList.remove(`form-error`);
    }
  }
});

// map-modal

const mapLink = document.querySelector(`.map-link`);
const mapModal = document.querySelector(`.map-modal`);

const mapModalCloseButton = mapModal.querySelector(`.modal__close`);

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove(`hidden`);
});

mapModalCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add(`hidden`);
})

window.addEventListener("keydown", function (evt){
      if (evt.keyCode === 27) {
          if (!mapModal.classList.contains(`hidden`)) {
              evt.preventDefault();
              mapModal.classList.add(`hidden`);
          }
      }
  }
);


// modal pop-up-------------------------------------------------------------------------------


