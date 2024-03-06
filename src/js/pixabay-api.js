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
