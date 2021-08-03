/* Burger menu */
const burgerMenu = document.querySelector('.burger');
const allMobailMenu = document.querySelector('.header-menu');
const headerTabBox = document.querySelector('.header-tab-box');

burgerMenu.addEventListener('click', openMenu);
function openMenu() {
  burgerMenu.classList.toggle('_burger-animate');
  allMobailMenu.classList.toggle('_visibl');
  headerTabBox.classList.toggle('_visibl');
}

/* Input shadow first-screen */
const firstScreenInput = document.querySelector('.fs-js');
const wrapperSendEmail = document.querySelector('.se-js');

firstScreenInput.addEventListener('focus', addShadow);
function addShadow() {
  wrapperSendEmail.classList.add('_box-input-shadow');
}
firstScreenInput.addEventListener('blur', removeShadow);
function removeShadow() {
  wrapperSendEmail.classList.remove('_box-input-shadow');
}

/* Input shadow favorable-price */
const favorablePriceInput = document.querySelector('.favorable-price-input');
const favorablePriceSendEmail = document.querySelector('.favorable-price-wrapper-send-email');

favorablePriceInput.addEventListener('focus', addShadowFP);
function addShadowFP() {
  favorablePriceSendEmail.classList.add('_box-input-shadow');
}
favorablePriceInput.addEventListener('blur', removeShadowFP);
function removeShadowFP() {
  favorablePriceSendEmail.classList.remove('_box-input-shadow');
}

/* Coments animation */
let comentsCol = document.querySelectorAll('.coments-col');
let comentsStrucktur = document.querySelector('.coments-strucktur');
let btnComents = document.querySelector('.btn-coments');

btnComents.onclick = function () {

  comentsStrucktur.classList.toggle('coments-strucktur-js');
  comentsCol.forEach(i => i.classList.toggle("col-efect-js"));
}

/* Acordion */
const acordion = document.querySelectorAll('.questions-content-box');
for (let i = 0; i < acordion.length; i++) {
  acordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/* Scroll animste */
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight; //Получаем высоту элемента

      const animItemOffset = offset(animItem).top; //Позиция обекта

      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart; //Точка старта
      //window.innerHeight высота окна браузера
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (!animItem.classList.contains('_anim-no-hide')) {
        animItem.classList.remove('_active');
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }
    }
  }
  function offset(el) {
    let rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

/* Parallax animate First screen */
document.addEventListener('mousemove', parallax);

function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

/* -Modal- */
/* Registration + Mobail registration */
const modalUhon = document.querySelector('.modal-user');
const openModalUser = document.querySelector('.btn-registr');
const coloseModalUser = document.querySelector('.wrap-closes-user');
const mobailBtnRegistr = document.querySelector('.btn-mobail-registr');

openModalUser.onclick = function () {
  modalUhon.classList.add('modal-visibl');
}

/* Mobail registration */
mobailBtnRegistr.addEventListener('click', openModalRegistr);
function openModalRegistr() {
  modalUhon.classList.add('modal-visibl');
}

coloseModalUser.onclick = function () {
  modalUhon.classList.remove('modal-visibl');
}

/* Phon */
const modalPhon = document.querySelector('.modal-phon');
const openPhon = document.querySelector('.btn-order-call');
const colosePhon = document.querySelector('.wrap-closes-phon');

openPhon.onclick = function () {
  modalPhon.classList.add('modal-visibl');
}
colosePhon.onclick = function () {
  modalPhon.classList.remove('modal-visibl');
}

/* Scroll menu */
const anchors = document.querySelectorAll('a[href*="#id"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (eveniet) {
    eveniet.preventDefault();
    const blockId = anchor.getAttribute('href').substr(1);
    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}