const images = document.querySelectorAll('.slides img');
    let currentIndex = 0;

    function nextSlide() {
        // Убираем видимость у текущего фото
        images[currentIndex].classList.remove('active');
        
        // Переходим к следующему индексу (после последнего идет первый)
        currentIndex = (currentIndex + 1) % images.length;
        
        // Добавляем видимость следующему фото
        images[currentIndex].classList.add('active');
    }

    // Менять фото каждые 3 секунды
    setInterval(nextSlide, 4000);

    // Элементы
const menu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const openBtn = document.querySelector('.menu-open-btn');
const closeBtn = document.querySelector('.menu-close-btn');

// Функция открытия
function openMenu() {
  menu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Запрещаем прокрутку сайта под меню
}

// Функция закрытия
function closeMenu() {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = ''; // Возвращаем прокрутку
}

// Обработчики событий
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // Закрытие при клике на пустое место

// Дополнительно: закрытие по кнопке Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});