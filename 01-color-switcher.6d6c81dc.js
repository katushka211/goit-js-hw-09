!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=null;e.addEventListener("click",(function(n){a.disabled=!1,e.disabled=!0,d=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),a.addEventListener("click",(function(t){e.disabled=!1,a.disabled=!0,clearInterval(d)})),a.disabled=!0}();
//# sourceMappingURL=01-color-switcher.6d6c81dc.js.map