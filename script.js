document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".menu__body");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev__controlls");
  const nextButton = document.querySelector(".next__controlls");
  const slider = document.querySelector(".slider");
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll(".slider__card").length;

  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSliderPosition();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.querySelector(".btn");
  const modal = document.querySelector(".popup");
  const closeModalBtn = document.querySelector("#close-my-modal-btn");

  // Открытие модального окна
  modalBtn.addEventListener("click", function () {
    modal.classList.add("open");
  });

  // Закрытие модального окна при клике на кнопку закрытия
  closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");

  tabsBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");

      // Скрыть все элементы с классом .tabs__item
      tabsItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Найти элемент с соответствующим ID и добавить ему класс .active
      const tabContent = document.querySelector(tabId);
      tabContent.classList.add("active");

      // Убрать класс .active со всех кнопок и добавить его только к нажатой кнопке
      tabsBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.selector__btn');
  const cards = document.querySelectorAll('.filter__grid div');

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const floor = this.getAttribute('data-floor');

          buttons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');

          if (floor === 'all') {
              cards.forEach(card => card.style.display = 'block');
          } else {
              cards.forEach(card => {
                  if (card.classList.contains(`filter__floor${floor}`)) {
                      card.style.display = 'block';
                  } else {
                      card.style.display = 'none';
                  }
              });
          }
      });
  });

  // Trigger the "All" button by default
  buttons[0].click();
});



document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion__header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
          const item = header.parentElement;
          const arrow = header.querySelector('.accordion__arrow'); // Находим стрелочку внутри заголовка

          item.classList.toggle('accordion__item_show');
          arrow.classList.toggle('accordion__arrow_rotate'); // Переключаем класс для поворота стрелочки
      });
  });
});