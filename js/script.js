
const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger');
const burgerImage = document.querySelector('#burger-img');
const body = document.querySelector('body');                //! выборка элемента

burger.onclick = () => {
  if (nav.classList.toggle('active')) {                 //! переключает класс на селекторе nav
    burgerImage.src = './img/header/close-btn.svg';
    body.classList.add('no-scroll');                    //! добавляет класс к селектору body
  } else {
    burgerImage.src = './img/header/open-btn.svg';
    body.classList.remove('no-scroll');                  //! удаляет класс с body
  }
}