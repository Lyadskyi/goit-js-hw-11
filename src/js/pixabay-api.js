// 1. Створюємо функцію для HTTP-запитів, яка створює запит на сервер

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryImages } from '../main';

import { createMarkup } from "../js/render-functions";

import octagon from "../img/x-octagon.svg"

const pick = {
  captionsData: 'alt',
  captionDelay: 250
};

const lightbox = new SimpleLightbox('.gallery-image a', pick);

export function requestToServer(link) {
  return fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          titleColor: '#fff',
          titleSize: '16px',
          titleLineHeight: '1.5',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',
          messageLineHeight: '1.5',
          backgroundColor: '#ef4040',
          theme: 'dark',
          iconUrl: octagon,
          iconColor: '#fafafb',
          closeOnEscape: true,
          maxWidth: '432px',
          position: 'topRight',
        });
        galleryImages.innerHTML = '';
      }
      createMarkup(data);
      return lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
}

// ---------- REMARKS OF THE MENTOR ---------- //

// ✅ Завдання #1 вирішено правильно

// Завдання #1 вирішено неправильно

// Improvement/Покращення //

// Модульність: логіка запиту, здається, відокремлена у модуль pixabay-api.js, але через неповний наданий код не зрозуміло,
// як цей модуль обробляє запит та відповідь. Належна модульність може бути покращенням, якщо вона буде впроваджена коректно.

// Очищення змінної вводу: код дійсно очищує поле вводу після подання форми, що є хорошою практикою з точки зору
// користувацького досвіду.

// Реалізація індикатора завантаження: є спроба показати індикатор завантаження (<span class="loader"></span>),
// що відповідає вимогам завдання, але дійсне поводження індикатора з показом та приховуванням не належним чином
// управляється.
