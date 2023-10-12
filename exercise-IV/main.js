const input = +prompt("enter seconds");
let hours = "0";
let minutes = "0";
let seconds = "0";

const time = document.querySelector("h1");
time.style.textDecoration = "underline";
time.style.textAlign = "center";

if (input >= 0) {
  if (input >= 3600) {
    if (input % 3600 == 0) {
      hours = input / 3600;
    } else if (input % 3600 !== 0) {
      if (input - (input % 3600) == 0) {
        hours = (input - (input % 3600)) / 3600;
      } else if ((input % 3600) % 60 == 0) {
        hours = (input - (input % 3600)) / 3600;
        minutes = (input % 3600) / 60;
      } else {
        hours = (input - (input % 3600)) / 3600;
        minutes = ((input % 3600) - ((input % 3600) % 60)) / 60;
        seconds = (input % 3600) % 60;
      }
    }
  } else if (input >= 60) {
    if (input % 60 == 0) {
      minutes = input / 60;
    } else if (input % 60 !== 0) {
      minutes = (input - (input % 60)) / 60;
      seconds = input % 60;
    }
  } else {
    seconds = input;
  }
  time.innerText = `The time is ${hours}h: ${minutes}min: ${seconds}sec.`;
} else {
  time.innerText = "Please enter positive number";
}

// Exercise IV:
// Make a JavaScript program to calculate the hours, minutes and seconds based on an entered number (seconds) in prompt. (i.e. 3663)
// In the starter files in HTML for this exercise, you will notice a blank <h1> inside the body already sitting there. (do not delete this one, you will need it.)
// Get and save the number coming from prompt (the seconds)
// Make a calculation and get the appropriate time for the hours, minutes and seconds.
// Select the <h1> element from the body.
// Add a text with JavaScript to the <h1> element saying: “The time is hours:minutes:seconds” based on the calculation from above (i.e “The time is 1h:1min:3sec.”).
// Underline the text of the <h1> and center it horizontally with JavaScript.
// (text-decoration: underline; text-align: center;)
// Do not use CSS for the styling.
