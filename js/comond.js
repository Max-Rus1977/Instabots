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

/* Input shadow */
const inputs = document.querySelectorAll('.input-focus-js');

for (let input of inputs) {
  input.addEventListener('focus', () => {
    input.closest('.form-shadow-js').classList.add('_box-input-shadow');
  })

  input.addEventListener('blur', () => {
    input.closest('.form-shadow-js').classList.remove('_box-input-shadow');
  })

}


/* Coments animation */
const comentsCol = document.querySelectorAll('.coments-col');
const comentsStrucktur = document.querySelector('.coments-strucktur');
const btnComents = document.querySelector('.btn-coments');

btnComents.onclick = function () {

  comentsStrucktur.classList.toggle('coments-strucktur-js');
  comentsCol.forEach(i => i.classList.toggle("col-efect-js"));
  if (btnComents.innerText === 'Структурировать отзывы') {
    btnComents.innerText = 'Разбросать отзывы'
  }
  else if (btnComents.innerText === 'Разбросать отзывы') {
    btnComents.innerText = 'Структурировать отзывы'
  }

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

/* Modail registration */
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

/* Tarif plans */
const openModalPlans = document.querySelectorAll('.open-modal-plans');

for (let onePlan of openModalPlans) {
  onePlan.addEventListener('click', (event) => {
    event.preventDefault();

    modalPhon.classList.add('modal-visibl');
  })
}

/* Sticky menu */
const geniralWrapper = document.querySelector('.geniral-wrapper');
const boxBtn = document.querySelector('.sticky__box-btn');
const navTeg = document.getElementsByTagName('nav');
const div = document.getElementsByClassName('_slick');

boxBtn.addEventListener('click', function () {
  boxBtn.classList.toggle('_active');

  if (navTeg.length == 1) {
    const cloneNavTeg = navTeg[0].cloneNode(true);
    cloneNavTeg.classList.remove('bg-section', 'col-nav');
    cloneNavTeg.classList.add('_slick');
    geniralWrapper.prepend(cloneNavTeg);
  }
  else {
    navTeg[0].remove();
  }

});
/*
Появление кнопки Меню и Исчезновение меню с кнопки выше 450px 
*/
window.addEventListener('scroll', function () {

  let offsetYInPx = pageYOffset;
  if (offsetYInPx > 450) {
    boxBtn.classList.add('_visibl');
  }
  else {
    boxBtn.classList.remove('_visibl');
  }

  if (navTeg.length == 2 && offsetYInPx < 450) {
    navTeg[0].remove();
    if (boxBtn.classList.contains('_active'))
      boxBtn.classList.remove('_active');
  }
});

/* Smooth Scroll menu */

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

boxBtn.addEventListener('click', () => {
  if (navTeg.length == 2) {
    const anchors2 = document.querySelectorAll('a[href*="#id"]');

    for (let anchor2 of anchors2) {
      anchor2.addEventListener('click', function (eveniet) {
        eveniet.preventDefault();
        const blockId = anchor2.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }

})

/* Forms */
const allForms = document.querySelectorAll('form');

for (let thisForm of allForms) {
  if (thisForm.id !== 'id-form-registret') {
    thisForm.addEventListener('submit', formSend)
  }
}

function formSend(event) {
  event.preventDefault();
  const focusForm = event.target;

  let error = formValidate(focusForm);

  if (error === 0) {
    focusForm.classList.add('_sending-js');
    setTimeout(removeSending, 1000);
    setTimeout(focusForm.reset(), 1000);
    setTimeout(addVisblThanks, 1100);
  }

  else if (error === 1 && focusForm.length === 2) {
    alert('Введён некоректный email');
  }
  else {
    alert('Заполните оязательные поля!');
  }

  function removeSending() {
    focusForm.classList.remove('_sending-js');
  }
}

const modalThanks = document.querySelector('.modal-thanks');
function addVisblThanks() {
  modalThanks.classList.add('modal-visibl');
}

const coloseModalThanks = document.querySelector('.wrap-closes-thanks');
coloseModalThanks.addEventListener('click', removeVisblThanks);
function removeVisblThanks() {
  modalThanks.classList.remove('modal-visibl');
}

const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
function formValidate(thisForm) {
  let error = 0;
  const formInputs = thisForm.querySelectorAll('input');

  for (let formInput of formInputs) {
    if (formInput.name === 'userName') {
      inputRemoveError(formInput);
      if (formInput.value === '') {
        inputAddError(formInput);
        error++;
      }
    }

    if (formInput.name === 'phonNumber') {
      inputRemoveError(formInput);
      console.log(formInput.value.length)
      if (formInput.value.length !== 17 || formInput.value === '') {
        inputAddError(formInput);
        error++;
      }
    }

    if (formInput.name === 'email') {
      inputRemoveError(formInput);
      if (formInput.classList.contains('one-email-js')) {
        inputClosestRemoveError(formInput);
      }
      if (!regExpEmail.test(formInput.value) || formInput.value === '') {
        inputAddError(formInput);
        error++;
        if (formInput.classList.contains('one-email-js')) {
          inputRemoveError(formInput);
          inputClosestAddError(formInput);
        }
      }
    }
  }
  return error;
}

function inputAddError(formInput) {
  formInput.classList.add('_error-js')
}

function inputRemoveError(formInput) {
  formInput.classList.remove('_error-js')
}

function inputClosestAddError(formInput) {
  formInput.closest('.wrapper-send-email').classList.add('_error-js')
}

function inputClosestRemoveError(formInput) {
  formInput.closest('.wrapper-send-email').classList.remove('_error-js')
}


/* Mask phone */
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
