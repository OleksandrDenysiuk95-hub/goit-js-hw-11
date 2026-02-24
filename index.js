/* empty css                      */import{a as f,S as p,i as c}from"./assets/vendor-0GZvjN0G.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="54780103-b22ef04994d9984d9528d48dd",h="https://pixabay.com/api/";function y(s){return f.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const d=document.querySelector(".gallery"),n=document.querySelector(".loader"),v=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:o,comments:u,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img src="${i}" alt="${e}" />
          <div class="info">
            <div class="info-item"><b>Likes</b><p>${t}</p></div>
            <div class="info-item"><b>Views</b><p>${o}</p></div>
            <div class="info-item"><b>Comments</b><p>${u}</p></div>
            <div class="info-item"><b>Downloads</b><p>${m}</p></div>
          </div>
        </a>
      </li>`).join("");d.innerHTML=r,v.refresh()}function b(){d.innerHTML=""}function S(){n.classList.add("is-active"),n.classList.remove("is-hidden")}function q(){n.classList.remove("is-active"),n.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){c.error({message:"Please enter a search term"});return}b(),S(),y(r).then(i=>{i.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(i.hits)}).catch(i=>{console.log(i),c.error({message:"Something went wrong!"})}).finally(()=>{q(),l.reset()})});
//# sourceMappingURL=index.js.map
