// 1. Створюємо функцію для відображення елементів інтерфейсу, яка приймає параметром масив, який буде огортати бекенд
// 2. Пробігається методом map() або reduce(), повертає розмітку
// 3. За допомогою метода join() об'єднує в рядок






export function createMarkup(data) {
  let markupImages = data.hits
    .map(({ webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads, }) => {
    return ``
  })
};


// import { gallery } from '../main';

// export function createMarkup(data) {
//   let markup = data.hits
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `<li class="gallery-item">
//       <div class="image-wrapper"><a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags}" width="360"
//                     height="200"></a></div>
//       <div class="text-wrapper">
//         <ul class="text-list">
//           <li class="text-list-item">
//             <h3 class="text-list-title">Likes</h3>
//             <p class="text-list-param">${likes}</p>
//           </li>
//           <li class="text-list-item">
//             <h3 class="text-list-title">Views</h3>
//             <p class="text-list-param">${views}</p>
//           </li>
//           <li class="text-list-item">
//             <h3 class="text-list-title">Comments</h3>
//             <p class="text-list-param">${comments}</p>
//           </li>
//           <li class="text-list-item">
//             <h3 class="text-list-title">Downloads</h3>
//             <p class="text-list-param">${downloads}</p>
//           </li>
//         </ul>
//       </div>
//     </li>`;
//       }
//     )
//     .join('');

//   return (gallery.innerHTML = markup);
// }


//<div class="gallery">
    //<a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    //<a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
//</div>






























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

// const select = {
//   captionsData: 'alt',
//   captionDelay: 250,
// };
// const lightbox = new SimpleLightbox('.image-gallery a', select);

// export function getImages(link) {
//   return fetch(link)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Image error!');
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.hits.length === 0) {
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           messageColor: '#fafafb',
//           backgroundColor: '#ef4040',
//           theme: 'dark',
//           iconUrl: octagon,
//           iconColor: '#fafafb',
//           messageSize: '16',
//           closeOnEscape: true,
//           maxWidth: '432',
//           position: 'topRight',
//         });
//         gallery.innerHTML = '';
//       }
//       createMarkup(data);
//       return lightbox.refresh();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
























// function appendArticlesMarkup(articles) {
//   const markup = articles
//     .map(
//       ({ url, urlToImage, title, author, description }) => `
//     <li>
//       <a href="${url}" target="_blank" rel="noopener noreferrer">
//         <article>
//           <img src="${urlToImage}" alt="" width="480">
//           <h2>${title}</h2>
//           <p>Posted by: ${author}</p>
//           <p>${description}</p>
//         </article>
//       </a>
//     </li>`
//     )
//     .join("");

//   articlesContainer.insertAdjacentHTML("beforeend", markup);
// };












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