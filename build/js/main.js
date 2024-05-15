"use strict";
// // // type aliases
// // type stringOrNumber = string | number
// // type stringNumberArray = (string | number)[]
// // interface clubs {
// //   name: string
// //   active: boolean
// //   compition: stringNumberArray
// // }
const player = {
    name: "Mo Salah",
    number: 11,
    age: 32,
    position: "right winger",
    club: "Liverpool",
    country: "Egypt",
    injured: false,
};
const moreAboutPlayer = {
    name: "Mo Salah",
    number: 11,
    age: 32,
    position: "right winger",
    club: "Liverpool",
    country: "Egypt",
    injured: false,
    ContractYear: 2025,
};
const ColorCircle = {
    color: "green",
    radius: "100%",
    width: "50px",
    height: "50px",
};
console.log(ColorCircle);
const circle = document.createElement("div");
circle.style.width = ColorCircle.width;
circle.style.height = ColorCircle.height;
circle.style.borderRadius = ColorCircle.radius;
circle.style.backgroundColor = ColorCircle.color;
document.body.appendChild(circle);
const anything = { content: 27 };
console.log(anything);
