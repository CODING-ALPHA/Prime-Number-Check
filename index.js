"use strict";

const result = document.querySelector(".result");
const input = document.querySelector(".input");
const clearBtn = document.querySelector(".clear-btn");
const checkBtn = document.querySelector(".check-btn");

// A function to check if he number is a prime number
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
checkBtn.addEventListener("click", function () {
  const number = input.value;

  const isPrimeResult = isPrime(number);
  result.textContent = `${number} is ${
    isPrimeResult ? "" : "not"
  } a prime number`;

  // Input validation
  if (isNaN(number)) {
    console.log(88888);
    // return; // Exit the function if input is not a number
  }
});

clearBtn.addEventListener("click", function () {
  result.textContent = "";
  input.value = "";
});
