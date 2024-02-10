// Ініціалізуємо Swiper при завантаженні сторінки
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000, // Затримка між автовідтворенням слайдів (в мілісекундах)
      disableOnInteraction: false, // Чи вимикати автовідтворення при взаємодії користувача (true/false)
    },
    speed: 2000, // Тривалість переходу між слайдами (в мілісекундах)
    loop: true, // Повторювати слайди по кінцевому слайду
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 26,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
  
  // Переініціалізуємо Swiper при зміні розміру вікна
  window.addEventListener("resize", function () {
    swiper.destroy(); // Спочатку знищуємо існуючий екземпляр Swiper
    swiper = new Swiper(".mySwiper", {
      // Потім ініціалізуємо новий екземпляр Swiper з новими налаштуваннями
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1000,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 26,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
  });
  