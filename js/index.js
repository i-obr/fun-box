!function e(t,r,u){function n(i,o){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!o&&s)return s(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var d=r[i]={exports:{}};t[i][0].call(d.exports,function(e){var r=t[i][1][e];return n(r||e)},d,d.exports,e,t,r,u)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<u.length;i++)n(u[i]);return n}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=[{existence:!0,buyDefault:'Чего сидишь? Порадуй котэ, <a href="#">купи.</a>',buy:"Печень утки разварная с артишоками."},{existence:!0,buyDefault:'Чего сидишь? Порадуй котэ, <a href="#">купи.</a>',buy:"Головы щучьи с чесноком да свежайшая сёмгушка."},{existence:!1,buyDefault:"Печалька, с курой закончился."}]},{}],2:[function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var n=u(e("./product")),a=u(e("./data"));Array.from(document.querySelectorAll(".product")).forEach(function(e,t){var r=new n.default(e,a.default[t]);a.default[t].existence?e.addEventListener("click",r.selectedCard):(r.disabledCard(),e.removeEventListener("click",r.selectedCard))})},{"./data":1,"./product":3}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){function r(){n.classList.remove("disable-hover"),n.removeEventListener("mouseleave",r)}function u(e){var t=n.querySelector(".product__card"),r=n.querySelector(".product__buy a"),u=e.target;for(e.preventDefault();u!==n;){if(u===t||u===r)return e.stopPropagation(),!0;u=u.parentNode}return!1}var n=e,a=n.querySelector(".product__buy");this.selectedCard=function(e){u(e)&&(n.classList.contains("is-selected")?(n.classList.remove("is-selected"),a.innerHTML=t.buyDefault):(n.classList.add("is-selected","disable-hover"),a.innerHTML=t.buy,n.addEventListener("mouseleave",r)))},this.disabledCard=function(){n.classList.add("is-disabled"),a.innerHTML=t.buyDefault}}},{}]},{},[2]);