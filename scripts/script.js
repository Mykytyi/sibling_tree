'use strict';
const mainList = document.querySelector('.tree');

mainList.addEventListener('click', function (event) {
  if(event.target.tagName === 'SPAN') {
    let currentLi = event.target.parentNode;
    if (currentLi.children[1]) {
      currentLi.children[1].classList.toggle('display-none');
    }
  }
});
