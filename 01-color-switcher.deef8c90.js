!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=null;t.addEventListener("click",(function(d){n.disabled=!1,t.disabled=!0,a=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(e){t.disabled=!1,n.disabled=!0,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.deef8c90.js.map
