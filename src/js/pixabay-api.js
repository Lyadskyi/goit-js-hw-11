// 1. Створюємо функцію для HTTP-запитів, яка створює запит на сервер
// 2. Створюємо константи зі всіма параметрами та ключем (буде export)

export function getPhotos() {
  fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!'); // response.statusText
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
   }) // const images = data.hits.slice(0, 9);
  
};


