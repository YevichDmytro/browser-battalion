// Отримуємо необхідні елементи з DOM
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var span = document.getElementsByClassName('close')[0];

// Коли користувач натискає на кнопку, відкривається модальне вікно з анімацією
btn.onclick = function () {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Вимкнути скролінг
  setTimeout(function () {
    modal.style.opacity = 1;
  }, 10); // Затримка для забезпечення відображення ефекту
};

// Коли користувач натискає на <span> (x), закривається модальне вікно з анімацією
span.onclick = function () {
  closeModal();
};

// Коли користувач клікає будь-де за межами модального вікна, воно також закривається з анімацією
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Функція для закриття модального вікна з анімацією
function closeModal() {
  modal.style.opacity = 0;
  setTimeout(function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Увімкнути скролінг при закритті
  }, 700); // Затримка для завершення анімації
}
