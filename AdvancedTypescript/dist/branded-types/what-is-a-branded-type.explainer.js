"use strict";
// Starting with ECMAScript 2015, symbol is a primitive data type, 
//just like number and string.
// Symbols are immutable, and unique.
//ust like strings, symbols can be used as keys for object properties.
const example = { one: 'uno', two: 'dos', three: 'tres' };
const sym = Symbol();
let obj = {
    [sym]: "value",
};
console.log(obj[sym]); // "value"
let obj1 = { sym: "Johnson" };
console.log(obj1.sym);
console.log(obj1["sym"]);
const user = {
    id: "007",
    name: "JamesBond",
};
let password = "1231423";
password = "Jimmy";
console.log(password);
const email = "mpocock@me.com";
// password = "2323233"; // can not assign to password because it is an constant
let passwordSlot;
passwordSlot = "BABA";
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(object1)); //[ 'a', 'b', 'c' ]
