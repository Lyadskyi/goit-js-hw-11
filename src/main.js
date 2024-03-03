

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { requestToServer } from "./js/pixabay-api"; // import { getImages } from './js/render-functions';

import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.form');
const input = document.querySelector('input[name=message]');
export const gallery = document.querySelector('.image-gallery');

const request = {
  key: '42641678-dfe8c371983b31bc21d252361',
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
  requestToServer(url);
});
