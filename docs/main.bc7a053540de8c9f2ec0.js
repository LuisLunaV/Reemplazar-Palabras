(()=>{"use strict";var e=document.querySelector("#btn-buscar"),t=document.querySelector("#btn-limpiar");e.addEventListener("click",(function(){!function(){var e=document.querySelector("#texto"),t=document.querySelector("#buscar-text"),r=document.querySelector("#reemplazar-text"),u=e.value,c=t.value,n=r.value;if(0<c.trim().length&&0<n.trim().length&&0<u.length){var l=u.split(" ").map((function(e){return e.replace(c,n)}));e.value=l.join(" ")}}()})),t.addEventListener("click",(function(){var e,t,r;e=document.querySelector("#texto"),t=document.querySelector("#buscar-text"),r=document.querySelector("#reemplazar-text"),e.value="",t.value="",r.value=""}))})();