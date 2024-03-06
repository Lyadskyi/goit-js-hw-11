import{S as p,i as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function d(s){let t=s.hits.map(({webformatURL:o,largeImageURL:a,tags:e,likes:i,views:r,comments:g,downloads:u})=>`<li class="gallery-image">
  <div class="wrapper-image">
    <a href="${a}"
      ><img
        class="image"
        src="${o}"
        alt="${e}"
        width="360"
        height="200"
    /></a>
  </div>
  <div class="wrapper-description">
    <ul class="list-image">
      <li class="list-image-item">
        <h3 class="list-image-heading">Likes</h3>
        <p class="list-image-desc">${i}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Views</h3>
        <p class="list-image-desc">${r}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Comments</h3>
        <p class="list-image-desc">${g}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Downloads</h3>
        <p class="list-image-desc">${u}</p>
      </li>
    </ul>
  </div>
</li>`).join("");return l.innerHTML=t}const h="/goit-js-hw-11/assets/x-octagon-d0a00fcf.svg",y={captionsData:"alt",captionDelay:250},L=new p(".gallery-image a",y);function b(s){return fetch(s).then(t=>{if(!t.ok)throw new Error("Image error");return t.json()}).then(t=>(t.hits.length===0&&(f.error({title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",theme:"dark",iconUrl:h,iconColor:"#fafafb",closeOnEscape:!0,maxWidth:"432px",position:"topRight"}),l.innerHTML=""),d(t),L.refresh())).catch(t=>{console.log(t)})}const v=document.querySelector(".form"),n=document.querySelector("input[name=message]"),l=document.querySelector(".gallery-images"),c={key:"42641678-dfe8c371983b31bc21d252361",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let m="https://pixabay.com/api/?";v.addEventListener("submit",s=>{s.preventDefault(),l.innerHTML='<span class="loader"></span>',c.q=n.value,m+=new URLSearchParams(c),n.value="",b(m)});
//# sourceMappingURL=commonHelpers.js.map
