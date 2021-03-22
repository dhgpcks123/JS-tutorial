'use strict';

const windowBox = document.querySelector('.window-box');

console.log(window.screen);
console.log(window.outer);
console.log(window.inner);

function updateTag() {
   windowBox.innerHTML = `window screen : ${window.screen.width}, ${window.screen.height}<br/>
                           window.outer : ${window.outerWidth}, ${window.outerHeight}<br/>
                           window.inner : ${window.innerWidth} ,${innerHeight}<br/>
                           documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}<br/>`;
}

window.addEventListener('resize', () => {
   updateTag();
});
updateTag();
