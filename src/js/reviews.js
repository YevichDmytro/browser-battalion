// Ініціалізація Swiper
let swiper = new Swiper('.reviews-description', {
  effect: 'cards',
  grabCursor: true,
});

// Функція для перевірки ширини екрану та вмикання/вимикання Swiper
function toggleSwiper() {
  if (window.innerWidth >= 768) {
    // Вимикання Swiper якщо ширина екрану 768px або більше
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  } else {
    // Увімкнення Swiper якщо ширина екрану менше 768px
    if (!swiper) {
      swiper = new Swiper('.reviews-description', {
        effect: 'cards',
        grabCursor: true,
      });
    }
  }
}

// Викликаємо функцію для перевірки ширини екрану при завантаженні сторінки
toggleSwiper();

// Викликаємо функцію для перевірки ширини екрану при зміні розміру вікна
window.addEventListener('resize', toggleSwiper);
