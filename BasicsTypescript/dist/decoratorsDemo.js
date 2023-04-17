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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Helper(genericString) {
    return function (constructor) {
        console.log(genericString);
        console.log(constructor);
    };
}
function AngularTemplate(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
// @Helper('Showing constructor:')
// change "emitDecoratorMetadata" to true in tsconfig.json file
// hooId is app a div with id of 'app'
let Car = class Car {
    constructor() {
        this.name = 'Tata Nexon of Johnson TONG';
        console.log(`Car ${this.name} created`);
    }
};
Car = __decorate([
    AngularTemplate('<h4>This is a Angular like Template code</h4>', 'app'),
    __metadata("design:paramtypes", [])
], Car);
const car1 = new Car();
console.log(car1);
//Property Decorators
function Log(target, propertyName) {
    console.log('From Log:Property decorator!');
    console.log("propertyName", propertyName); //title
    console.log("target:", target);
}
function Log2(target, name, descriptor) {
    console.log('From Log2:Accessor decorator!');
    console.log("target:", target);
    console.log("name:", name); //fullname
    console.log("PropertyDescriptor:", descriptor);
}
function Log3(target, name, descriptor) {
    console.log('From Log3:Method decorator!');
    console.log("target:", target);
    // target: Object
    // > constructor: class Employee
    // > getNameWithTitle
    // > set fullName
    // [[Prototype]]:Object
    console.log("name:", name); //fullname
    console.log("PropertyDescriptor:", descriptor); //Object ==> configurable: true, enumerable:false set f fullName(name)
}
function Log4(target, name, position) {
    console.log('From Log4: Parameter decorator!');
    console.log("target:", target);
    console.log("name:", name); // getNameWithTitle
    console.log("position:", position); //0
}
class Employee {
    set fullName(name) {
        this._fullName = name;
    }
    constructor(title, name) {
        this.title = title;
        this._fullName = name;
    }
    getNameWithTitle(id) {
        return `Employee - ${id}, Title - ${this.title}, Name - ${this._fullName}`;
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Employee.prototype, "title", void 0);
__decorate([
    Log2,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Employee.prototype, "fullName", null);
__decorate([
    Log3,
    __param(0, Log4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Employee.prototype, "getNameWithTitle", null);
const emp2 = new Employee("CEO", "Johnson TOnG");
console.log("getNameWithTitle:", emp2.getNameWithTitle(2));
