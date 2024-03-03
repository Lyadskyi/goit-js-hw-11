// 1. Створюємо функцію для HTTP-запитів, яка створює запит на сервер
// 2. Створюємо константи зі всіма параметрами та ключем (буде export)

const KEY = "42641678-dfe8c371983b31bc21d252361";
const BASE_URI = "https://pixabay.com/api/";
const QUERY = "forest+mountains"
const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}`;








import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import octagon from "../img/x-octagon.svg"

import { gallery } from '../main';

const pick = {
  captionsData: 'alt',
  captionDelay: 250
};

const lightbox = new SimpleLightbox('.image-gallery a', pick);

export function requestToServer(link) {
  return fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Image error with status ${response.statusText}`);
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
        gallery.innerHTML = '';
      }
      createMarkup(data);
      return lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
};