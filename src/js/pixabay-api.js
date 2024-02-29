// 1. Створюємо функцію для HTTP-запитів, яка створює запит на сервер
// 2. Створюємо константи зі всіма параметрами та ключем (буде export)

export function getPhotos() {
  fetch(LINK)
    .then(response => {
      if (!response.ok) {
      throw new Error('Image error!');
    }
    return response.json();
    })
    .then(data => {
      const images = data.hits.slice(0, 9);
  })
};
