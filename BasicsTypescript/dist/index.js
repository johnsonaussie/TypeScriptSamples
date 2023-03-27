"use strict";
//Built-in Types
// There are three sets of literal字面 types available in TypeScript today: strings, numbers, and booleans; 
// by using literal types you can allow an exact value which a string, number, or boolean must have.
//Numbers
let myNum = 10;
let anotherNum = 20;
myNum = 12;
// below is wrong type string is not assignable to type number
//myNum = '12';
anotherNum = 30;
// below is wrong type boolean is not assignable to type number
//anotherNum = false;
//String
let myStr = 'Hello';
let anotherStr = 'World';
//Type 'boolean' is not assignable to type 'string'.
//myStr = true;
//Type 'number' is not assignable to type 'string'.
//anotherStr = 45;
//Boolean
let myBool = true;
let anotherBool = false;
// myBool = 'true'; //error Type 'string' is not assignable to type 'boolean'.
// Type 'number' is not assignable to type 'boolean'.
//anotherBool = 76;
//Inference
let salary;
salary = 12000;
//salary = '12000';
//salary = true;
//Objects
const developer = {
    firstName: 'Nabendu',
    lastName: 'Biswas',
    age: 40,
    isTrainer: true
};
const newDeveloper = {
    name: 'Mousam',
    age: 39,
    isDev: true
};
newDeveloper.name = 'Mousam Mishra';
//newDeveloper.age = 'Fourty';
//newDeveloper.firstName = 'Mousam';
//Arrays
const languages = ['React', 'Angular', 'Vue'];
languages.push('TypeScript');
//languages.push(56); //number is not assignable to type string
//languages.push(true); // boolean is not assignable to type string
const numbers = [51, 22, 33];
numbers.push(56);
//numbers.push('56'); //error
// numbers.push(true); //error
const arrOfObj = [
    { name: 'Nabendu', age: 40 },
    { name: 'Mousam', age: 39 }
];
arrOfObj.push({ name: 'Shikha', age: 39 });
// arrOfObj.push({ name: 'Hriday', age: 'Eight' }); error
const arrOfArrays = [
    [11, 32, 43],
    [34, 75, 64]
];
arrOfArrays.push([21, 32, 13]);
//Functions num1 & num2 belong to any "type"
const addNums = (num1, num2) => {
    return num1 + num2;
};
console.log("addnumber", addNums(10, 20)); //30
console.log("addnumber", addNums(10, '20')); //1020
const multiNums = (num1, num2) => {
    return num1 * num2;
};
multiNums(10, 20);
console.log("multiNums", multiNums(10, 20)); //200
//multiNums(10, '20');//error
const modNums = (num1, num2) => {
    return num1 % num2;
    //return num1 > num2 boolean is not assign to number
};
modNums(10, 20);
//modNums(10, '20'); error
const printSum = (num1, num2) => {
    console.log("printsum:", num1 + num2);
};
printSum(10, 20);
printSum(10, '20');
//Union types
// Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. 
// so you use union type 
let numOrStr; // either a number or a string
numOrStr = 10;
numOrStr = 'Ten';
// let arr: (number | string )[] = [10, 'Ten', true]; error boolean not assign to a number or a string
let arr = [10, 'Ten', 222.33]; // number also including floating number
console.log("arr:", arr);
//Literal types
let myLiteral = 'Nabendu';
myLiteral = 'Mousam';
myLiteral = 'Shikha';
myLiteral = 'Hriday';
//myLiteral = 'Parag'; error 
myLiteral = 'Nabendu';
console.log("myLiteral:", myLiteral);
//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const myRole = Role.ADMIN; //0
const hridayRole = Role.AUTHOR;
console.log("myRole:", myRole);
//Optionals
let optionalObj = {
    name: 'Nabendu',
    age: undefined
};
console.log("optionalObj:", optionalObj); //optionalObj: { name: 'Nabendu', age: undefined }
let betterOptObj = {
    name: 'Nabendu'
};
console.log("betterOptObj:", betterOptObj);
const person1 = {
    name: 'Nabendu',
    age: 40,
    isDev: true
};
const person2 = {
    name: 'Mousam',
    age: 39,
    isDev: true
};
const person3 = {
    name: 'Nabendu',
    age: 40,
    isDev: true
};
const person4 = 'Nabendu';
const cat = {
    foot: 4,
    name: 'cat',
    body: 'medium'
};
const dog = {
    name: 'dog',
    foot: 4,
    body: 'small'
};
console.log("dog.body:", dog.body);
const coder1 = [
    { name: 'Nabendu', category: 'frontend', age: 40 },
    { name: 'Mousam', category: 'backend', age: 39 },
];
//Classes
class CreateRoom {
    constructor(room) {
        this.room = room;
        this.family = [];
        this.dobShikha = '1982-12-12';
        this.dobHriday = '2013-12-12';
    }
    addFamilyMember(member) {
        this.family.push(member);
    }
    showFamily() {
        console.log(this.family);
    }
    cleanRoom(soap) {
        console.log(`Cleaning ${this.room} with ${soap}`);
    }
}
const nabendu = new CreateRoom('Nabendu');
const shikha = new CreateRoom('Shikha');
const hriday = new CreateRoom('Hriday');
const mousam = new CreateRoom('Mousam');
shikha.dobShikha;
// read only property
//shikha.dobShikha = '1982-11-12'; //error
//hriday.dobHriday; // error private
//nabendu.family; // error private
nabendu.addFamilyMember('Nabendu');
shikha.addFamilyMember('Shikha');
hriday.addFamilyMember('Hriday');
mousam.cleanRoom('Lizol');
