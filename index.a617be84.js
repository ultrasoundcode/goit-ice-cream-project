var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),function(e,t,o){var c=t.querySelectorAll(['iframe[src*="youtube.com"]','iframe[src*="vimeo.com"]'].join(","));if(c.length)for(var r=0;r<c.length;r++){var a=c[r],n=a.getAttribute("width"),i=a.getAttribute("height")/n,s=a.parentNode,l=t.createElement("div");l.className="fitVids-wrapper",l.style.paddingBottom=100*i+"%",s.insertBefore(l,a),a.remove(),l.appendChild(a),a.removeAttribute("height"),a.removeAttribute("width")}}(window,document);
//# sourceMappingURL=index.a617be84.js.map
