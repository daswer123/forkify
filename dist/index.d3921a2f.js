function e(e,n,r,t){Object.defineProperty(e,n,{get:r,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=n.parcelRequire3a11;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},n.parcelRequire3a11=i),i.register("c5HCY",(function(n,r){var t,i;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};t=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)a[n[r]]=e[n[r]]},i=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("c5HCY").register(JSON.parse('{"1GqKL":"index.d3921a2f.js","7jJ3d":"icons.9801e6f1.svg"}'));var a;a=new URL(i("c5HCY").resolve("7jJ3d"),import.meta.url).toString();const s=new URL(a),o=function(e){return new Promise((function(n,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},c=async e=>{const n=await Promise.race([fetch(e),o(10)]);if(!n.ok)throw new Error(n.statusText);return await n.json()},d={recipe:{},search:[],bookmarks:[],page:0},u=()=>d.search.slice(15*d.page,15*(d.page+1)),l=e=>{d.bookmarks.push(e),d.recipe.bookmarked=!0},p=e=>{e.bookmarked?(e=>{const n=d.bookmarks.findIndex((n=>n.id===e.id));d.bookmarks=[...d.bookmarks.slice(0,n),...d.bookmarks.slice(n+1)],d.recipe.bookmarked=!1})(e):l(e)},h=async e=>{try{const{cookingTime:n,image:r,publisher:t,servings:i,sourceUrl:a,title:s}=e,c={title:s,source_url:a,image_url:r,cooking_time:n,publisher:t,servings:i,ingredients:Object.entries(e).filter((([e,n])=>e.includes("ingredient")&&""!==n)).map((([,e])=>{const n=e.split(",").map((e=>e.trim()));if(3!==n.length)throw new Error("Wrong Ingridient format! Please use the correct Format :)");const[r,t,i]=n;return{quantity:Number.isFinite(+r)&&""!==r?+r:null,unit:t,description:i}}))},{recipe:u}=(await(async(e,n)=>{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},t=await Promise.race([fetch(`${e}?key=daed302b-f036-411b-9618-d5e212f17989`,r),o(10)]);if(!t.ok)throw new Error(t.statusText);return await t.json()})("https://forkify-api.herokuapp.com/api/v2/recipes/",c)).data;l(u),u.bookmarked=!0,d.recipe=u}catch(e){throw console.log(e),e}};var m,g,v;Fraction=function(e,n){if(void 0!==e&&n)"number"==typeof e&&"number"==typeof n?(this.numerator=e,this.denominator=n):"string"==typeof e&&"string"==typeof n&&(this.numerator=parseInt(e),this.denominator=parseInt(n));else if(void 0===n)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,t,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(t=i[1]),r%1==0&&t&&t.match("/"))return new Fraction(r).add(new Fraction(t));if(!r||t)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),n=this.numerator%this.denominator,r=this.denominator,t=[];return 0!=e&&t.push(e),0!=n&&t.push((0===e?n:Math.abs(n))+"/"+r),t.length>0?t.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var n=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=n.denominator,n.rescale(e.denominator),e.rescale(td),n.numerator+=e.numerator,n.normalize()},Fraction.prototype.subtract=function(e){var n=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=n.denominator,n.rescale(e.denominator),e.rescale(td),n.numerator-=e.numerator,n.normalize()},Fraction.prototype.multiply=function(e){var n=this.clone();if(e instanceof Fraction)n.numerator*=e.numerator,n.denominator*=e.denominator;else{if("number"!=typeof e)return n.multiply(new Fraction(e));n.numerator*=e}return n.normalize()},Fraction.prototype.divide=function(e){var n=this.clone();if(e instanceof Fraction)n.numerator*=e.denominator,n.denominator*=e.numerator;else{if("number"!=typeof e)return n.divide(new Fraction(e));n.denominator*=e}return n.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var n=this.clone().normalize();e=e.clone().normalize();return n.numerator===e.numerator&&n.denominator===e.denominator},Fraction.prototype.normalize=(g=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},v=function(e,n){if(n){var r=Math.pow(10,n);return Math.round(e*r)/r}return Math.round(e)},function(){if(g(this.denominator)){var e=v(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}g(this.numerator)&&(e=v(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*n),this.denominator*=n);var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,n){var r=[],t=Fraction.primeFactors(e),i=Fraction.primeFactors(n);return t.forEach((function(e){var n=i.indexOf(e);n>=0&&(r.push(e),i.splice(n,1))})),0===r.length?1:function(){var e,n=r[0];for(e=1;e<r.length;e++)n*=r[e];return n}()},Fraction.primeFactors=function(e){for(var n=Math.abs(e),r=[],t=2;t*t<=n;)n%t==0?(r.push(t),n/=t):t++;return 1!=n&&r.push(n),r},m=Fraction;var f=class{update(e){this.data=e;const n=this.generateMarkup(),r=document.createRange().createContextualFragment(n),t=Array.from(r.querySelectorAll("*")),i=Array.from(this.parentEl.querySelectorAll("*"));t.forEach(((e,n)=>{var r;const t=i[n];e.isEqualNode(t)||""===(null===(r=e.firstChild)||void 0===r?void 0:r.nodeValue.trim())||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach((e=>{t.setAttribute(e.name,e.value)}))}))}renderSpiner(){const e=`\n        <div class="spinner">\n        <svg>\n          <use href="${s.pathname}#icon-loader"></use>\n        </svg>\n      </div>`;this.parentEl.innerHTML="",this.parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this.errorMsg){this.parentEl.innerHTML="",this.parentEl.innerHTML=`\n        <div class="error">\n          <div>\n            <svg>\n              <use href="${s}}#icon-alert-triangle"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n              `}renderSuccesses(){this.parentEl.innerHTML="",this.parentEl.innerHTML=`\n      <div class="error">\n          <div>\n            <svg>\n              <use href="${s}}#icon-smile"></use>\n            </svg>\n          </div>\n          <p>${this.successesMsg}</p>\n        </div>\n`}constructor(e,n,r){this.parentEl=e,this.errorMsg=n,this.successesMsg=r}};var _=new class extends f{_generateIngMarkup(){return this.data.ingredients.reduce(((e,{quantity:n,unit:r,description:t})=>e+`<li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${s.pathname}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${n?new m(+n,2).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${r}</span>\n        ${t}\n      </div>\n    </li>`),"")}generateMarkup(){return`\n    <figure class="recipe__fig">\n    <img src="${this.data.image_url}" alt="${this.data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this.data.title}</span>\n    </h1>\n    </figure>\n\n    <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${s.pathname}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this.data.cooking_time}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${s.pathname}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this.data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--update-servings" data-update-to = ${this.data.servings-1}>\n          <svg>\n            <use href="${s.pathname}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--update-servings" data-update-to = ${this.data.servings+1}>\n          <svg>\n            <use href="${s.pathname}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    ${"daed302b-f036-411b-9618-d5e212f17989"===this.data.key?`\n      <div class="recipe__user-generated">\n        <svg>\n          <use href="${s.pathname}#icon-user"></use>\n        </svg>\n      </div>\n      `:""}\n    \n    <button class="btn--round">\n      <svg class="">\n        <use href="${s.pathname}#icon-bookmark${this.data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n    </div>\n\n    <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n    ${this._generateIngMarkup()}\n\n    </ul>\n    </div>\n\n    <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this.data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this.data.source_url}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="img/icons.svg#icon-arrow-right"></use>\n      </svg>\n    </a>\n    </div>`}render(e){this.data=e,this.parentEl.innerHTML="",this.parentEl.insertAdjacentHTML("beforeend",this.generateMarkup())}addEventHandlerSevings(e){this.parentEl.addEventListener("click",(n=>{const r=n.target.closest(".btn--update-servings");if(!r)return;console.log(r);const{updateTo:t}=r.dataset;0!=+t&&e(+t)}))}addBookmarkHandler(e){this.parentEl.addEventListener("click",(n=>{n.target.closest(".btn--round")&&e()}))}addEventHandler(e){window.addEventListener("hashchange",e),window.addEventListener("load",e)}renderSuccsses(e=this.succsessMsg){this.parentEl.innerHTML="",this.parentEl.innerHTML=`\n    <div class="error">\n      <div>\n        <svg>\n          <use href="${s}}#icon-smile"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>\n          `}constructor(){super(document.querySelector(".recipe"),"No recipes found for your query. Please try again!","Congrat you cool cheaf")}};var b=new class{addEventHandlers(e){this.searchForm.addEventListener("submit",(n=>{n.preventDefault(),e(this.searchInput.value),this.searchInput.value=""}))}constructor(){this.searchForm=document.querySelector(".search"),this.searchInput=document.querySelector(".search__field")}};var k=new class extends f{setData(e){this.data=e}render(){this.parentEl.innerHTML="",this.parentEl.innerHTML=this.generateMarkup()}createSearchItemMarkup(e){const n=window.location.hash.slice(1);return`\n    <li class="preview">\n            <a class="preview__link ${e.id===n?"preview__link--active":""}" href="#${e.id}">\n              <figure class="preview__fig">\n                <img src="${e.image_url}" alt="${e.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${e.title}</h4>\n                <p class="preview__publisher">${e.publisher}</p>\n                ${"daed302b-f036-411b-9618-d5e212f17989"===e.key?`\n                  <div class="recipe__user-generated">\n                    <svg>\n                      <use href="${s.pathname}#icon-user"></use>\n                    </svg>\n                  </div>\n                  `:""}\n              </div>\n            </a>\n          </li>\n      `}generateMarkup(){return this.data.reduce(((e,n)=>e+this.createSearchItemMarkup(n)),"")}constructor(){super(document.querySelector(".results"),"No recipes found for your query. Please try again!","Congrat you cool cheaf")}};var w=new class{nextPage(e){e.page++,this.render(e)}prevPage(e){e.page--,this.render(e)}addEventHandlers(e,n){this.parentEl.addEventListener("click",(r=>{r.target.closest(".pagination__btn--prev")&&(this.prevPage(n),e()),r.target.closest(".pagination__btn--next")&&(this.nextPage(n),e())}))}render(e){this.parentEl.innerHTML="",this.parentEl.insertAdjacentHTML("beforeend",this.generateMarkup(e))}generateMarkup(e){return`\n        ${0===e.page?"":`<button class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="img/icons.svg#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e.page}</span>\n           </button>`}\n            \n        ${e.search.length<=15*(e.page+1)?"":`\n        <button class="btn--inline pagination__btn--next">\n            <span>Page ${e.page+2}</span>\n            <svg class="search__icon">\n              <use href="img/icons.svg#icon-arrow-right"></use>\n            </svg>\n          </button>\n        `}\n          \n        </div>`}constructor(){this.parentEl=document.querySelector(".pagination")}};var y=new class{render(e){this.data=e,this.parentEl.innerHTML="",this.parentEl.insertAdjacentHTML("beforeend",this.generateMarkup()),0===this.data.length&&(this.parentEl.innerHTML=this.errorMsg)}createSearchItemMarkup(e){return`\n    <li class="preview">\n            <a class="preview__link" href="#${e.id}">\n              <figure class="preview__fig">\n                <img src="${e.image_url}" alt="${e.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${e.title}</h4>\n                <p class="preview__publisher">${e.publisher}</p>\n                ${"daed302b-f036-411b-9618-d5e212f17989"===e.key?`\n                  <div class="recipe__user-generated">\n                    <svg>\n                      <use href="${s.pathname}#icon-user"></use>\n                    </svg>\n                  </div>\n                  `:""}\n              </div>\n            </a>\n          </li>\n      `}generateMarkup(){return this.data.reduce(((e,n)=>e+this.createSearchItemMarkup(n)),"")}uploadBookmarsFromLocalStorage(){console.log(this.data),window.localStorage.setItem("bookmarks",JSON.stringify(this.data))}loadBookmarsFromLocalStorage(){const e=window.localStorage.getItem("bookmarks");if(e&&"undefined"!==e)return this.data=JSON.parse(e),this.render(this.data),this.data}constructor(){this.parentEl=document.querySelector(".bookmarks__list"),this.errorMsg=`<div class="message">\n    <div>\n      <svg>\n        <use href="${s}#icon-smile"></use>\n      </svg>\n    </div>\n    <p>\n      No bookmarks yet. Find a nice recipe and bookmark it :)\n    </p>\n  </div>\n  `}};var E=new class extends f{render(){}addHanlderToggleWindow(){this.overlay.addEventListener("click",this.toggleForm.bind(this)),this.addBtn.addEventListener("click",this.toggleForm.bind(this)),this.closeBtn.addEventListener("click",this.toggleForm.bind(this))}addHanlderUpload(e){this.parentEl.addEventListener("submit",(function(n){n.preventDefault();const r=[...new FormData(this)],t=Object.fromEntries(r);e(t)}))}toggleForm(){this.overlay.classList.toggle("hidden"),this.window.classList.toggle("hidden")}constructor(){super(document.querySelector(".upload"),"Something get wrong","Successes Your recipy was uploaded"),this.overlay=document.querySelector(".overlay"),this.window=document.querySelector(".add-recipe-window"),this.addBtn=document.querySelector(".nav__btn--add-recipe"),this.closeBtn=document.querySelector(".btn--close-modal"),this.addHanlderToggleWindow()}};const F=async()=>{try{const e=window.location.hash.slice(1);if(!e)return;_.renderSpiner(),k.update(u()),await(async e=>{try{const n=`https://forkify-api.herokuapp.com/api/v2/recipes//${e}?daed302b-f036-411b-9618-d5e212f17989`,{recipe:r}=(await c(n)).data;d.recipe=r,d.bookmarks.some((e=>e.id===r.id))?d.recipe.bookmarked=!0:d.recipe.bookmarked=!1}catch(e){throw new Error(e)}})(e),_.render(d.recipe)}catch(e){console.log(e),_.renderError()}},$=()=>{k.setData(u()),k.render()},M=async e=>{try{if(k.renderSpiner(),await(async e=>{try{const n=`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=daed302b-f036-411b-9618-d5e212f17989`,{recipes:r}=(await c(n)).data;d.search=r}catch(e){throw new Error(e)}})(e),!d.search.length)throw new Error("No match result");k.setData(d.search),k.render(),d.page=0,w.render(d),$()}catch(e){console.log(e),k.renderError()}},S=e=>{(e=>{d.recipe.ingredients.forEach((n=>{n.quantity&&(n.quantity=Math.round(n.quantity/d.recipe.servings*e*100)/100)})),d.recipe.servings=e})(e),_.update(d.recipe)},H=()=>{p(d.recipe),_.update(d.recipe),y.render(d.bookmarks),y.uploadBookmarsFromLocalStorage()},L=async e=>{try{E.renderSpiner(),await h(e),_.render(d.recipe),y.uploadBookmarsFromLocalStorage(d.bookmarks),y.render(d.bookmarks),E.renderSuccesses("Your recept successes was upload, GOOD ✨✨✨"),window.location.hash=d.recipe.id,setTimeout((()=>location.reload()),1e3)}catch(e){E.renderError("Opps, something get wrong try again"),setTimeout((()=>location.reload()),1e3)}};_.addEventHandler(F),_.addEventHandlerSevings(S),_.addBookmarkHandler(H),b.addEventHandlers(M),w.addEventHandlers($,d),E.addHanlderUpload(L),d.bookmarks=y.loadBookmarsFromLocalStorage();
//# sourceMappingURL=index.d3921a2f.js.map
