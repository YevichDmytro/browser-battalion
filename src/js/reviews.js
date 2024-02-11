var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true, // Центрувати активний слайд
  loop: true, // Безкінечний цикл прокрутки
  autoplay: {
    delay: 500, // Затримка перед автоматичною прокруткою
    disableOnInteraction: false, // Залишити автоматичну прокрутку після взаємодії користувача
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
