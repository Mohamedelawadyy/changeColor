// ********************change background***************
btn = document.getElementById("btn");
element = document.getElementById("header");
bgColor = ["red", "green", "blue", "gold", "purple"];

btn.addEventListener("click", () => {
  random = Math.floor(Math.random() * bgColor.length);

  element.style.backgroundColor = bgColor[random];
});
// *****************************
// ******************change background color*******************************
// let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// let colorsPart = [];
// for (let index = 0; index < 6; index++) {
//   colorsPart.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
// }
// let finalColor = `#${colorsPart.join("")}`;
// btn = document.getElementById("btn");
// element = document.getElementById("header");
// btn.addEventListener("click", () => {
//   element.style.backgroundColor = finalColor;
// });
// *************************************************
// *************88**********************************
