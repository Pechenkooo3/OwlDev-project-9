function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("31u3U");const a=document.querySelector(".card");let s;function o(e){e.results.map((e=>{let t=new Date(e.release_date).getFullYear(),n=function(e){let t=[];return e.forEach((e=>{t.push(s.find((t=>t.id===e)).name)})),t}(e.genre_ids);return a.innerHTML+=`<li class="card__item item">\n\n                  <a class="card__link link" href="#" id="${e.id}" data-id="${e.id}" data-film-open>\n                    <div class="card__thumb">\n                      <img class="card__img"                      \n                        sizes="(min-width: 1200px) 370px, (min-width: 768px) 354px, (max-width: 767px) 450px, 100vw"\n                        src='https://www.themoviedb.org/t/p/w500/${e.poster_path}'\n                        alt="tehnocryak"\n                        width="100%"\n                        class="card__img"\n                      />\n                    </div>\n                    <div class="card__meta">\n                      <h2 class="card__title">${e.original_title}</h2>\n                      <p class="card__info">${n} | ${t}</p>\n                    </div>\n                  </a>\n                </li>`}))}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=177f83f5259c7f846e561f4715bd03a4&language=en-US").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>(s=e.genres,s))).catch((e=>console.log(e))),i("KVL8z"),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)},i("4MLyg"),i("krGWQ");var l=i("eWCmQ"),c=i("krGWQ"),d=i("7me8F");d=i("7me8F");const u=document.querySelector("input"),f=document.querySelector("button");const p=new class{fetchPopularMovies(){const e=`${d.BASE_URL}/trending/movie/day?api_key=${d.API_KEY}&page=${this.page}`;return fetch(e).then((e=>e.json()))}fetchMoviesByRequest(){const e=`${d.BASE_URL}/search/movie?api_key=${d.API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return fetch(e).then((e=>e.json()))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}clearInput(){this.searchQuery.innerHTML=""}pagination(e){this.page=e}constructor(){this.page=1,this.searchQuery=""}};let g,h=1;function y(){p.fetchMoviesByRequest().then((t=>{console.log(t),0==t.total_results&&(e(l).Notify.failure('"Sorry, there are no film with this name. Please try again."'),p.query="",m()),g=t.total_pages,c.refs.lastBtn.textContent=g,o(t),_()})).catch((e=>console.log(e)))}function m(){p.fetchPopularMovies().then((e=>{g=e.total_pages,c.refs.lastBtn.textContent=g,_(),o(e)})).catch((e=>console.log(e)))}function _(){c.refs.prevBtn.disabled=1===h,c.refs.nextBtn.disabled=h===g,c.refs.firstPage.hidden=h<4,c.refs.lastPage.hidden=h>g-3,function(){const e=h+2;for(let t=h-2;t<=e;t+=1)t>0&&t<=g&&c.refs.pageList.insertAdjacentHTML("beforeend",`<li class="pages-item"><button type="button" class="pagination-btn">${t}</button></li>`)}(),function(){let e=c.refs.pageList.querySelectorAll("button");for(let t=0;t<e.length;t+=1)Number(e[t].textContent)===h&&e[t].classList.add("active-btn")}()}f.addEventListener("click",(function(t){if(t.preventDefault(),p.query=u.value.trim(),""===p.query.trim())return void e(l).Notify.failure("Please enter the text in search field");c.refs.gallery.innerHTML="",u.value="",c.refs.pageList.innerHTML="",p.resetPage(),h=1,y()})),c.refs.paginationList.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;c.refs.gallery.innerHTML="",c.refs.pageList.innerHTML="",h=Number(e.target.textContent),p.pagination(h),p.query?y():m()})),c.refs.prevBtn.addEventListener("click",(function(e){e.preventDefault(),h>1&&(h-=1);c.refs.gallery.innerHTML="",c.refs.pageList.innerHTML="",p.pagination(h),p.query?y():m()})),c.refs.nextBtn.addEventListener("click",(function(e){e.preventDefault(),h!==g&&(h+=1);c.refs.gallery.innerHTML="",c.refs.pageList.innerHTML="",p.pagination(h),p.query?y():m()})),p.pagination(h),m(),i("6HA5D");
//# sourceMappingURL=index.687d8878.js.map