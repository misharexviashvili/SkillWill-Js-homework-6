"use strict";
// Task 1
document.querySelector("#button").addEventListener("click", () => {
  document.querySelector(".hidden").classList.toggle("shown");
});
document.querySelector(".hidden").addEventListener("click", () => {
  document.querySelector(".hidden").classList.remove("shown");
});

// Task 2
let inputColor;
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  inputColor = document.querySelector(".input").value;
  if (inputColor === "red") {
    document.querySelector("body").style.backgroundColor = "red";
  } else if (inputColor === "blue") {
    document.querySelector("body").style.backgroundColor = "blue";
  } else if (inputColor === "green") {
    document.querySelector("body").style.backgroundColor = "green";
  } else if (inputColor === "black") {
    document.querySelector("body").style.backgroundColor = "black";
  } else if (inputColor === "white") {
    document.querySelector("body").style.backgroundColor = "white";
  } else {
    alert("Please type in red, blue, green, black or white");
  }
});

// Task 3
