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
const apples = {
    contents: {
        contents: 'hello there'
    }
};
console.log(apples);
// array type 
// function testingArray(array:Array< string >){
//   return array
// }
// const myArray :string[] = ['hello', 'world',]
// console.log(testingArray(myArray))
// console.log(testingArray(new Array('neji','zayn', 'hussein')))
// more type checking for types aliases
// type valueOrNull<Type> = Type | null
// const something :valueOrNull<string> ='killer'
// function readonlyArray(array:ReadonlyArray<string>){
//   const slice = array.slice()
//   console.log(array[0])
// }
// learning about array typles and readonly 
// function noChange(pair: readonly [number, string]) {
//   console.log(pair[0])
// }
// noChange([7,'hello'])
// spread typles
function allArray(array) {
    console.log(array);
}
allArray([1, 'hussein',]);
// assetion with typles array don't work 
// const points = [4, 5] as const 
// function calculate(points:[number, number]){
//   const [x, y] = point
//   return x +y
// }
// calculate(points)
