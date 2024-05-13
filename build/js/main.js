"use strict";
// // // type aliases
// // type stringOrNumber = string | number
// // type stringNumberArray = (string | number)[]
// // interface clubs {
// //   name: string
// //   active: boolean
// //   compition: stringNumberArray
// // }
function lengthOf(x) {
    return x.length;
}
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
console.log(user.becomeAdmin());
console.log(user.admin);
function getStringValue() {
    return ['liverpool', 'are amazing', 'i love zayn'];
}
const stringArray = getStringValue();
const secondItem = stringArray[1];
console.log(secondItem);
function getReadOnlyStringArray() {
    return ['liverpool', 'are amazing', 'i love zayn'];
}
let myArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
let mySquare = createSquare({ colour: "red", width: 100 });
