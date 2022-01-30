const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const burgerButton = page.querySelector('.header__menu-burger');
const popupCloseButton = page.querySelector('.popup__close-button');
const mailForm = page.querySelector('.form');
const mailInput = mailForm.querySelector('.form__input');
const mailFormButton = mailForm.querySelector('.form__btn');

burgerButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

popupCloseButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

mailFormButton.addEventListener('click', function () {
  if (mailInput.value !== '') {
    mailFormButton.textContent = 'Спасибо!';
  } else {
    return;
  }
});