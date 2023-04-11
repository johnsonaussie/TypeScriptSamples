"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class BaseEntity {
    constructor() {
        this.id = Math.random();
        this.created = new Date().toLocaleDateString();
    }
}
class Course extends BaseEntity {
    constructor(name) {
        super();
        this.name = name;
    }
}
let englishCourse = new Course("English");
console.log("id: " + englishCourse.id);
console.log("created: " + englishCourse.created);
console.log("name:", englishCourse.name); // English
// The decorator class is a function and gets the constructor as a parameter, then include the id and created properties.
function BaseEntity1(ctr) {
    ctr.prototype.id = Math.random();
    ctr.prototype.created = new Date().toLocaleString("es-ES");
}
//The decorator is ready to be used in each entity without modifying his constructor or extend, 
//only needs to add @Entity before class definition.
// if you have parameter to pass to a decorator you need to use this 
// way make the function to return a function
function LuckyNumber(limit) {
    return function (constructor) {
        constructor.prototype.lucky = Math.floor(Math.random() * Math.floor(limit));
    };
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    BaseEntity1,
    LuckyNumber(10),
    __metadata("design:paramtypes", [String])
], User);
let City = class City {
    constructor(zicode) {
        this.zicode = zicode;
    }
};
City = __decorate([
    LuckyNumber(7),
    BaseEntity1,
    __metadata("design:paramtypes", [Number])
], City);
/*
The Decorator LuckyNumber get a number as parameter to set the range limit, the new Decorator can be use nested with other.
*/
//TypeScript also supports defining a function with the built-in JavaScript constructor called Function ().
//var res = new Function( [arguments] ) { ... }.
var myFunction = new Function("a", "b", "return a * b");
console.log(myFunction); //[Function (anonymous)]
var x = myFunction(4, 3);
console.log(x);
var MyLucky = LuckyNumber(3); // [Function (anonymous)]
//console.log(MyLucky(City.constructor(4)));
var wrapper1 = MyLucky(City.constructor(4));
let user = new User("dany");
let ny = new City(12345);
//City and User classes has the id and created property ;)
console.log("city.id:", ny.id);
console.log("user.id:", user.id);
console.log("city.zicode:", ny.zicode);
console.log("city.created:", ny.created);
console.log("city.luckynumber", ny.lucky);
console.log("user.luckynumber", user.lucky);
