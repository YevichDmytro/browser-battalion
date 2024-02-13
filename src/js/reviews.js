let swiper2;

function toggleSwiper() {
  if (window.innerWidth >= 768) {
    // Вимкнення Swiper при ширині екрану 768px або більше
    if (swiper2) {
      swiper2.destroy();
      swiper2 = null;
    }
  } else {
    // Увімкнення Swiper при ширині екрану менше 768px
    if (!swiper2) {
      swiper2 = new Swiper('.mySwiper2', {
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        },
        loop: true, // Додано параметр loop: true для безкінечних слайдів
        autoplay: {
          delay: 3000, // Збільшено затримку автопрокрутки до 3 секунд
          disableOnInteraction: false, // Вимкнення автопрокрутки після взаємодії користувача
        },
        speed: 2000, // Додано плавну зміну слайдів за 2 секунду
      });
    }
  }
}

// Викликаємо функцію при завантаженні сторінки
toggleSwiper();

// Викликаємо функцію при зміні розміру вікна
window.addEventListener('resize', toggleSwiper);
