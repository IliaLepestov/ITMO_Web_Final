"use strict";
let image = document.getElementById("image");
image.addEventListener("click", function() {
  let width = image.width;
  if (width === 50) {
    image.width = 100;
    image.height = 100;
  } else {
    image.width = 50;
    image.height = 50;
  }
});