import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhotos } from "./js/pixabay-api";

import { createMarkup } from "./js/render-functions";

const KEY = '42641678-dfe8c371983b31bc21d252361';
const BASE_URI = 'https://pixabay.com/api/';
const QUERY = 'forest+mountains'
const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}`;

function getImages() {
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!')
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

getImages();


// Форма подія сабміт в мейні







// Завдання 1 - Пошук зображень
/** Створи застосунок пошуку зображень за ключовим словом і їх перегляду в галереї.
* Додай оформлення елементів інтерфейсу згідно з макетом.
**/

// Завдання 2 - Форма пошуку
/** Форма пошуку міститься в HTML-документі. Користувач буде вводити рядок для пошуку в текстове поле,
* а за сабмітом форми необхідно виконувати HTTP-запит із цим пошуковим рядком.
* При натисканні на кнопку відправки форми, додайте перевірку вмісту текстового поля на наявність порожнього рядка,
* щоб користувач не міг відправити запит, якщо поле пошуку порожнє.
**/

// const loader = document.querySelector('.loader');
// console.log(loader);