const page = document.querySelector('.page');
const navPopup = page.querySelector('.popup');

const burgerButton = page.querySelector('.header__menu-burger');
const navPopUpCloseButton = page.querySelector(".popup__close-button");

const mailForm = page.querySelector('.form');
const mailInput = mailForm.querySelector('.form__input');
const mailFormButton = mailForm.querySelector('.form__btn');

burgerButton.addEventListener('click', function () {
  navPopup.classList.add('popup_opened');
});

navPopUpCloseButton.addEventListener('click', function () {
  navPopup.classList.remove('popup_opened');
});

mailFormButton.addEventListener('click', function () {
  if (mailInput.value !== '') {
    mailFormButton.textContent = 'Спасибо!';
  } else {
    return;
  }
});