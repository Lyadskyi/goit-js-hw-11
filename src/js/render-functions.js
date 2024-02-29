// 1. Створюємо функцію для відображення елементів інтерфейсу, яка приймає параметром масив, який буде огортати бекенд
// 2. Пробігається методом map() або reduce(), повертає розмітку
// 3. За допомогою метода join() об'єднує в рядок

export function createMarkup(param) {
  
};

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
