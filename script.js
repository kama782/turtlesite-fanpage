// Получаем элементы модального окна
const infoModal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFullDescription = document.getElementById('modalFullDescription');
const closeButton = document.querySelector('.close-button');

// Получаем все карточки персонажей
const cards = document.querySelectorAll('.card');

// Функция для открытия модального окна
function openModal(name, description, fullDescription) {
  modalTitle.textContent = name;
  modalDescription.textContent = description;
  modalFullDescription.textContent = fullDescription;
  infoModal.style.display = 'flex'; // Отображаем модальное окно (flex для центрирования)
  document.body.style.overflow = 'hidden'; // Запрещаем прокрутку основного контента
}

// Функция для закрытия модального окна
function closeModal() {
  infoModal.style.display = 'none'; // Скрываем модальное окно
  document.body.style.overflow = ''; // Восстанавливаем прокрутку основного контента
}

// Добавляем обработчик события клика на каждую карточку
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Получаем данные из data-атрибутов карточки
    const name = card.dataset.name;
    const description = card.dataset.description;
    const fullDescription = card.dataset.fullDescription;
    openModal(name, description, fullDescription);
  });
});

// Добавляем обработчик события клика на кнопку закрытия
closeButton.addEventListener('click', closeModal);

// Закрываем модальное окно при клике вне его содержимого
window.addEventListener('click', (event) => {
  if (event.target === infoModal) {
    closeModal();
  }
});

// Добавляем обработчик события для Esc-клавиши для закрытия модального окна
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && infoModal.style.display === 'flex') {
    closeModal();
  }
});
