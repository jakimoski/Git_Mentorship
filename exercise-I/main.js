const time = +prompt("enter hours");

if (time >= 1 && time <= 24) {
  if (time >= 1 && time <= 12) {
    console.log(`It’s ${time}AM`);
  } else {
    console.log(`It’s ${time - 12}PM`);
  }

  const image = document.createElement("img");

  if (time >= 6 && time <= 17) {
    image.src = "./img/sun.png";
  } else {
    image.src = "./img/moon.png";
  }

  document.body.appendChild(image);
} else {
  console.log("You’ve entered a wrong number for hour");
}

// Exercise I:
// Make a JavaScript program that will check whether the time is AM or PM (US time). Now, do not enter the full time, but only the hours as a number. (i.e. 10)
// You will have to get and save the hours from prompt (hint: prompt(‘enter hours’).)
// If it’s AM, show in console “It’s {time}AM”. (i.e “It’s 10AM”) , and accordingly for the PM too.
// Make sure you check the exception when the user enters an hour bigger than 24, or a simple text. If that happens, just show in the console “You’ve entered a wrong number for hour”.
// Additionally: there’s an img folder sent along the starter files, which has 2 images.
// Make another check and see if the same hours from above are daytime or nighttime.
// Daytime is the following hours (6h - 17h)
// Nighttime is the following hours (18h - 6h)
// If the hours are in the daytime period, show the sun image in HTML, and if the hours are in the nighttime period, show the moon image in HTML.
// You will have to create the image, fill it’s source and append/attach it to the body dynamically in JavaScript. Don’t just add <img> tags in your html and hide/show them with css.
