const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-mobile');
const menuLink = document.querySelectorAll('.menu-mobile ul li a');
const scrollTop = document.querySelector('.scrollTop');
burger.addEventListener('click', () => {
  burger.classList.toggle('isOpen');
  menuMobile.classList.toggle('isOpen');
  body.classList.toggle('lock');
});
menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('isOpen');
    menuMobile.classList.remove('isOpen');
    body.classList.remove('lock');
  });
});
const bannerSwiper = new Swiper('.banner-swiper', {
  loop: true,
  effect: 'fade',
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const partnersSwiper = new Swiper('.partners-swiper', {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
const reviewsSwiper = new Swiper('.reviews-swiper', {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTop.classList.add('show');
  } else {
    scrollTop.classList.remove('show');
  }
});

scrollTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

const productSwiper2 = new Swiper('.product__swiper2', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,
});
const productSwiper = new Swiper('.product__swiper', {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productSwiper2,
  },
});
const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tabs-content');
const openTabs = (el) => {
  const btnTarget = el.currentTarget;
  const title = btnTarget.dataset.title;

  tabsContent.forEach((el) => el.classList.remove('active'));

  tabs.forEach((el) => el.classList.remove('active'));

  document.querySelector('#' + title).classList.add('active');

  btnTarget.classList.add('active');
};

tabs.forEach((el) => el.addEventListener('click', openTabs));

const overlay = document.querySelector('.overlay');
const btnBackToCall = document.querySelector('.back-call');
const modalBackToCallClose = document.querySelector('.modal-call .close');
const modalBackToCall = document.querySelector('.modal-call');
const btnLogin = document.querySelector('.login');
const btnMobLogin = document.querySelector('.menu-mobile .login');
const modalLogin = document.querySelector('.modal-login');
const modalLoginClose = document.querySelector('.modal-login .close');

btnBackToCall.addEventListener('click', () => {
  overlay.classList.add('active');
  modalBackToCall.classList.add('active');
});
modalBackToCallClose.addEventListener('click', () => {
  overlay.classList.remove('active');
  modalBackToCall.classList.remove('active');
});
btnLogin.addEventListener('click', () => {
  overlay.classList.add('active');
  modalLogin.classList.add('active');
});
modalLoginClose.addEventListener('click', () => {
  overlay.classList.remove('active');
  modalLogin.classList.remove('active');
});
btnMobLogin.addEventListener('click', () => {
  overlay.classList.add('active');
  modalLogin.classList.add('active');
});
