import { requestToServer } from "./js/pixabay-api";

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('input');
export const galleryImages = document.querySelector('.gallery-images');

const request = {
  key: '42641678-dfe8c371983b31bc21d252361',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

let url = 'https://pixabay.com/api/?';

formEl.addEventListener('submit', event => {
  event.preventDefault();
  galleryImages.innerHTML = '<span class="loader"></span>';
  request.q = inputEl.value;
  url += new URLSearchParams(request);
  inputEl.value = '';
  requestToServer(url);
});
