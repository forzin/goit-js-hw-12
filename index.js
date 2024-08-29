import{a as L,S as y,i}from"./assets/vendor-DOgVoBmD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const f=t=>`
    <li class="gallery-card">
       <a href="${t.largeImageURL}" title="${t.tags}">
           <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
       </a>
       <ul class="stat-img">
           <li class="img-stat-item">Likes <span class="number-of-stat">${t.likes}</span></li>
           <li class="img-stat-item">Views <span class="number-of-stat">${t.views}</span></li>
           <li class="img-stat-item">Comments <span class="number-of-stat">${t.comments}</span></li>
           <li class="img-stat-item">Downloads <span class="number-of-stat">${t.downloads}</span></li>
       </ul>
    </li>
    `,b="https://pixabay.com/api/",p=async(t,s)=>{try{const o={params:{q:t,orientation:"horizontal",page:s,per_page:15,key:"45497630-f588d73f1b1f7379927f92167"}};return await L.get(`${b}`,o)}catch{iziToast.show({message:"An error occurred while fetching images. Please try again.",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight",iconUrl:iconError})}},n="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89916%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89916%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80622C16.3037%206.76848%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76848%2016.7874%206.80622C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12152%2017.1938%207.21263C17.2315%207.30374%2017.2509%207.40139%2017.2509%207.5C17.2509%207.59862%2017.2315%207.69627%2017.1938%207.78738C17.156%207.87849%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30367%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e";let h,d=1,l="";const C=document.querySelector(".form"),w=document.querySelector('input[type="text"]'),m=document.querySelector(".ul-gallery"),u=document.querySelector(".loader-container"),c=document.querySelector(".load-more-button"),x=async t=>{try{if(t.preventDefault(),l=C.elements.user_value.value.trim(),l===""){i.show({message:"Error! Please enter a search term!",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight",iconUrl:n});return}d=1;const s=await p(l,d);if(s.data.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight",iconUrl:n});return}w.value="";const o=s.data.hits.map(r=>f(r)).join("");m.innerHTML=o,h.refresh(),u.classList.add("is-hidden"),c.classList.remove("is-hidden"),s.data.hits.length<15?(c.classList.add("is-hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:" #4e75ff",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight"})):c.classList.remove("is-hidden")}catch(s){i.show({message:"An error occurred while fetching images. Please try again.",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight",iconUrl:n}),u.classList.add("is-hidden"),console.log(s)}};document.addEventListener("DOMContentLoaded",function(){h=new y(".ul-gallery a",{captions:!0,captionDelay:250,animationSpeed:300,captionsData:"title"})});const v=async t=>{try{d++;const o=(await p(l,d)).data.hits.map(e=>f(e)).join("");m.insertAdjacentHTML("beforeend",o),h.refresh();const r=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}catch(s){i.show({message:"An error occurred while fetching images. Please try again.",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight",iconUrl:n}),console.log(s)}};C.addEventListener("submit",x);c.addEventListener("click",v);
//# sourceMappingURL=index.js.map
