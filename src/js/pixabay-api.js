// 1. Створюємо функцію для HTTP-запитів, яка створює запит на сервер
// 2. Створюємо константи зі всіма параметрами та ключем (буде export)

const KEY = "42641678-dfe8c371983b31bc21d252361";
const BASE_URI = "https://pixabay.com/api/";
const QUERY = "forest+mountains"
const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}`;


export function getPhotos() {
  fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response error with status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {

      let html = '';
      for (let { hits } of data) {
  
}




    })
    .catch(error => {
      alert("Incorrect request :(")
  });
};

getPhotos();




// const request = {
//   key: "42641678-dfe8c371983b31bc21d252361",
//   q: "",
//   image_type: "photo",
//   orientation: "horizontal",
//   safesearch: true,
// };
