var menuElem = document.getElementById('search-box');
var titleElem = menuElem.querySelector('.forms');
var menutitleElem = document.getElementById('title');

  menutitleElem.onclick = function() {
    titleElem.classList.toggle('open');
  };
