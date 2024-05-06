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
// speared paramter 
function spearedMulitpy(n, ...m) {
    return m.map(x => n * x);
}
console.log(spearedMulitpy(10, 6, 3, 4, 5));
// rest paramter 
// can be fix with teh as cont when added inot i function 
// desctrution parameters 
function ObjectDesc({ a, b, c }) {
    console.log(a, b, c);
}
ObjectDesc({ a: 'hello', b: 4, c: false });
