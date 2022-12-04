
const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger');
const burgerImage = document.querySelector('#burger-img');

burger.onclick = () => {
  if (nav.classList.toggle('active')) {
    burgerImage.src = './img/header/close-btn.svg';
  } else {
    burgerImage.src = './img/header/open-btn.svg';
  }
}