"use strict";(self.webpackChunkhtml_css_advenced=self.webpackChunkhtml_css_advenced||[]).push([[582],{222:(e,s,n)=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,s){for(var n=0;n<s.length;n++){var o=s[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,s){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}n.r(s),n.d(s,{default:()=>i});const i=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHMTL(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var s,n;return s=e,(n=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){return e.closeModal()})),document.addEventListener("keyup",(function(s){return e.keyPressHandle(s)}))}},{key:"keyPressHandle",value:function(e){27==e.keyCode&&this.closeModal()}},{key:"openModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHMTL",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="modal">\n      <div class="modal__inner">\n        <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Хамт <strong>Аялах</strong></h2>\n        <div class="wrapper wrapper--narrow">\n          <p class="modal__description">Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох боломжтой!</p>\n        </div>\n\n        <div class="social-icons">\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n          <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n        </div>\n      </div>\n      <div class="modal__close">X</div>\n    </div>\n    ')}}])&&o(s.prototype,n),Object.defineProperty(s,"prototype",{writable:!1}),e}()}}]);