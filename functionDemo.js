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
