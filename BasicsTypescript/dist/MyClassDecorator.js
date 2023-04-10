"use strict";
// class BaseEntity
// {
//     readonly id: number;
//     readonly created: string;
//     constructor() 
//     {
//       this.id = Math.random();
//       this.created = new Date().toLocaleDateString();
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// class Course extends BaseEntity
// {
//     constructor(public name: string)
//     {
//       super();
//     }
// }
// let englishCourse = new Course("English");
// console.log("id: " + englishCourse.id);
// console.log("created: " + englishCourse.created);
// console.log("name:", englishCourse.name);// English
// The decorator class is a function and gets the constructor as a parameter, then include the id and created properties.
function BaseEntity1(ctr) {
    ctr.prototype.id = Math.random();
    ctr.prototype.created = new Date().toLocaleString("es-ES");
}
//The decorator is ready to be used in each entity without modifying his constructor or extend, 
//only needs to add @Entity before class definition.
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    BaseEntity1,
    __metadata("design:paramtypes", [String])
], User);
let City = class City {
    constructor(zicode) {
        this.zicode = zicode;
    }
};
City = __decorate([
    BaseEntity1,
    __metadata("design:paramtypes", [Number])
], City);
let user = new User("dany");
let ny = new City(12345);
//City and User classes has the id and created property ;)
console.log("city.id:", ny.id);
console.log("user.id:", user.id);
console.log("city.zicode:", ny.zicode);
console.log("city.created:", ny.created);
