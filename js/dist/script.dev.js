"use strict";

function openPage(word) {
  var open = document.querySelector('.active');
  var page = document.querySelector(".".concat(word));

  if (open) {
    open.classList.remove('active');
  }

  page.classList.add('active');
}