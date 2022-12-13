"use strict";
// Task 1
document.querySelector("#button").addEventListener("click", () => {
  document.querySelector(".hidden").classList.toggle("shown");
});

document.querySelector(".hidden").addEventListener("click", () => {
  document.querySelector(".hidden").classList.remove("shown");
});
