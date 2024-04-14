"use strict";
// // // type aliases
// // type stringOrNumber = string | number
// // type stringNumberArray = (string | number)[]
// // interface clubs {
// //   name: string
// //   active: boolean
// //   compition: stringNumberArray
// // }
function combine(str1, str2, num) {
    if (str2 && str1 && num)
        return str1 + str2 + num;
    return str1;
}
console.log(combine("hello", "world", 1));
