function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var i=o("7Y9D8");function u(e,r){return new Promise(((t,n)=>setTimeout((()=>{Math.random()>.3?t({position:e,delay:r}):n({position:e,delay:r})}),r)))}document.querySelector(".form").addEventListener("submit",(function(r){r.preventDefault();let t=Number(r.currentTarget.delay.value),n=Number(r.currentTarget.step.value),o=Number(r.currentTarget.amount.value);for(let r=0;r<o;r+=1)u(1+r,t+r*n).then((({position:r,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${r} in ${t}ms`)})).catch((({position:r,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${r} in ${t}ms`)}));r.currentTarget.reset()}));
//# sourceMappingURL=03-promises.e3e1e0d3.js.map