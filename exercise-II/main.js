const input = +prompt("enter number to see what day it is");
const header = document.createElement("h1");

if (input >= 1 && input <= 7) {
  header.style.color = "green";
  if (input === 1) {
    console.log("it's Monday");
    header.innerText = "It's Monday";
  } else if (input === 2) {
    header.innerText = "It's Tuesday";
  } else if (input === 3) {
    header.innerText = "It's Wednesday";
  } else if (input === 4) {
    header.innerText = "It's Thursday";
  } else if (input === 5) {
    header.innerText = "It's Friday";
  } else if (input === 6) {
    header.innerText = "It's Saturday";
  } else {
    header.innerText = "It's Sunday";
  }
} else {
  header.innerText = "It's Wrong data";
  header.style.color = "red";
}

document.body.appendChild(header);

// Exercise II:
// Make a JavaScript program to check what day of the week it is, based on a given number.
// Take the number from prompt(hint: prompt(‘enter number to see what day it is’))
// Make sure you convert that number into a real number(hint: parseInt(number))
// Now, you can check for each of the numbers from 1 - 7 and for each of them show the appropriate weekday in a new < h1 > element that you will create dynamically with JavaScript. (i.e“ It’ s friday”. - in a < h1 > element in body)
// Also, color the text of the < h1 > element in green with JavaScript.
// Do not create the < h1 > element directly in HTML and do not use CSS.
// Make sure you check the exception if the user enters a different number from 1 - 7 or enter just text.If that happens, fill the < h1 > element with text - “Wrong data” and color it red.
// Append / attach the newly created < h1 > element to the body. **
// Use If / if else /else statements to achieve the result.
