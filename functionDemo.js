"use strict";

function gettingTheSmallerNumber(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is the smaller num`);
  }
  else if (num2 < num3 && num2 < num1) {
    console.log(`${num2}is the smaller num`);
  } else{
    console.log (`${num3} is the smaller num`);
  }
  }
// let age = prompt("what is your age?"); 
function ageChecker (age) {

  if (age >= 18) {
    display("You are eligible to vote.");
  }
  if (age <= 17) {
    alert("Minors are ineligible to vote");
  }
  
}
ageChecker (prompt('What is your age?') )
function determineNumPositiveNegativeZero(num) {


  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "0";
  }
}