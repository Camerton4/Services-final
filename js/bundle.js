!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t){var n=document.querySelector(".navigation__burger"),o=document.querySelector(".mobile-menu"),r=o.querySelector(".icon-back"),i=document.querySelector(".container"),c=document.querySelector(".main");n.addEventListener("click",(function(){o.classList.add("visible"),i.classList.add("blur")})),r.addEventListener("click",(function(){o.classList.remove("visible"),i.classList.remove("blur")})),c.addEventListener("click",(function(){o.classList.remove("visible"),i.classList.remove("blur")}))},function(e,t){var n,o,r,i=document.querySelector(".swiper-container"),c=document.querySelector(".swiper-container2"),s=document.querySelector(".swiper-container3");function a(){window.innerWidth<=768&&"false"==i.dataset.mobile&&(n=new Swiper(i,{direction:"horizontal",loop:!0,pagination:{el:".pag",clickable:!0},width:240,spaceBetween:16,slidesPerView:"auto"}),o=new Swiper(c,{direction:"horizontal",loop:!0,pagination:{el:".pag2",clickable:!0},width:240,slidesPerView:"auto"}),r=new Swiper(s,{direction:"horizontal",loop:!0,pagination:{el:".pag2",clickable:!0},width:240,slidesPerView:"auto"}),i.dataset.mobile="true"),window.innerWidth>=768&&(i.dataset.mobile="false",i.classList.contains("swiper-initialized")&&(n.destroy(),o.destroy(),r.destroy()))}a(),window.addEventListener("resize",(function(){a()}));var l=document.querySelector(".swiper_button-1"),d=document.querySelector(".swiper-wrapper"),u=document.querySelector(".sw_arrow1");l.addEventListener("click",(function(){d.classList.toggle("swiper-wrapper-open"),d.classList.contains("swiper-wrapper-open")?(l.textContent="Скрыть",u.classList.add("sw_arrow1_reverse")):(l.textContent="Показать все",u.classList.remove("sw_arrow1_reverse"))}));var m=document.querySelector(".swiper_button-2"),p=document.querySelector(".sw_arrow2"),f=document.querySelector(".swiper-flex-2");m.addEventListener("click",(function(){f.classList.toggle("swiper-flex-2-open"),f.classList.contains("swiper-flex-2-open")?(m.textContent="Скрыть",p.classList.toggle("sw_arrow2_reverse")):(m.textContent="Показать все",p.classList.remove("sw_arrow2_reverse"))}))},function(e,t){var n=document.querySelector(".message"),o=document.querySelector(".navigation__chat-icon"),r=document.querySelector(".modal__feedback"),i=document.querySelector(".modal_feedback_close"),c=document.querySelector(".mobile-menu"),s=document.querySelector(".container"),a=document.querySelector("main"),l=document.querySelector(".phone"),d=document.querySelector(".navigation__call-icon"),u=document.querySelector(".modal__call"),m=document.querySelector(".modal_call_close");a.addEventListener("click",(function(){u.classList.remove("modal__feedback_open"),r.classList.remove("modal__feedback_open"),s.classList.remove("blur")})),l.addEventListener("click",(function(){u.classList.add("modal__feedback_open"),c.classList.remove("visible"),s.classList.add("blur")})),d.addEventListener("click",(function(){u.classList.add("modal__feedback_open"),c.classList.remove("visible"),s.classList.add("blur")})),m.addEventListener("click",(function(){u.classList.remove("modal__feedback_open"),s.classList.remove("blur")})),n.addEventListener("click",(function(){r.classList.add("modal__feedback_open"),c.classList.remove("visible"),s.classList.add("blur")})),o.addEventListener("click",(function(){r.classList.add("modal__feedback_open"),s.classList.add("blur")})),i.addEventListener("click",(function(){r.classList.remove("modal__feedback_open"),s.classList.remove("blur")}))}]);
//# sourceMappingURL=bundle.js.map