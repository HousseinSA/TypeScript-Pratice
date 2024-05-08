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
function whatAnimal({ name, type, killer = false }) {
    return name + type + killer;
}
console.log(whatAnimal({ name: 'cat', type: 'big cats', }));
function yourName(person) {
    console.log('what is your age' + person.age);
    person.age = 28;
}
yourName({ name: 'hussein', age: 27 });
function traveling(city) {
    console.log('i just visit ', city.city.name);
    return city.city.cities++;
}
const city = {
    city: { name: 'vitnam', position: 'east-asia', cities: 20 }
};
traveling(city);
console.log(traveling(city));
