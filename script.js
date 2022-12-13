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
let numbers;
let array;
document.querySelector(".btn-average").addEventListener("click", (e) => {
  e.preventDefault();
  numbers = document.querySelector(".input-average").value;
  console.log(numbers);
  array = numbers.split(":");
  console.log(array);
  let sum = 0;
  for (let element of array) {
    sum += parseInt(element);
  }
  console.log(sum);
  const average = sum / array.length;
  console.log(average);
  return average;
});
