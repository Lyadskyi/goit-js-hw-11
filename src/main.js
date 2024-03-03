import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhotos } from "./js/pixabay-api";

// import { createMarkup } from "./js/render-functions";

import octagon from "./img/x-octagon.svg"



// import octagon from '../img/octagon.png';
// import { gallery } from '../main';
// import { createMarkup } from '../js/pixabay-api';
// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';
// // Описаний у документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';


import { getImages } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input[name=message]');
export const gallery = document.querySelector('.image-gallery');

const request = {
  key: '42476589-1f9c9241784e75b96bc1ad3a5',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

let url = 'https://pixabay.com/api/?';

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '<span class="loader"></span>';
  request.q = input.value;
  url += new URLSearchParams(request);
  input.value = '';
  getImages(url);
});









// const KEY = "42641678-dfe8c371983b31bc21d252361";
// const BASE_URI = "https://pixabay.com/api/";
// const QUERY = "forest+mountains"
// const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}`;

// function getImages() {
//   return fetch(LINK)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Image error!")
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// getImages();


// Форма подія сабміт в мейні

const gallery = document.querySelector(".gallery");
console.log(gallery);






// const gallery = document.querySelector(".gallery");
// console.log(gallery)

// fetch("https://pixabay.com/api/")
//   .then(response => {
//     console.log(response)
//   })








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