const input = prompt("enter number to see what day it is");
const header = document.createElement("h1");

switch (input) {
  case "1":
    header.innerText = "It's Monday";
    header.style.color = "green";
    break;
  case "2":
    header.innerText = "It's Tuesday";
    header.style.color = "green";
    break;
  case "3":
    header.innerText = "It's Wednesday";
    header.style.color = "green";
    break;
  case "4":
    header.innerText = "It's Thursday";
    header.style.color = "green";
    break;
  case "5":
    header.innerText = "It's Friday";
    header.style.color = "green";
    break;
  case "6":
    header.innerText = "It's Sturday";
    header.style.color = "green";
    break;
  case "7":
    header.innerText = "It's Sunday";
    header.style.color = "green";
    break;
  default:
    header.innerText = "It's Wrong data";
    header.style.color = "red";
    break;
}

document.body.appendChild(header);
