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
/*
the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:

The expressions for each decorator are evaluated top-to-bottom.
The results are then called as functions from bottom-to-top.
*/
var x = {};
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
first(); //first(): factory evaluated
var firstfunc = first();
//A PropertyDescriptor describes a property on an Object . Any JavaScript object can be used 
// as a PropertyDescriptor where unspecified properties will be treated as undefined or false .
//firstfunc(1,"2"); // an argument for descriptor was not supplied , PropertyDescriptor is an inter face
firstfunc(1, "2", x); // now the descriptor is supplied no complained from the complier.
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
        console.log("descriptor.writable:", descriptor.writable);
        console.log("descriptor.value:", descriptor.value); // [Function:greet]
        console.log("descriptor:", descriptor);
    };
}
class Greeter1 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Greeter1.prototype, "greet", null);
/*
The @enumerable(false) decorator here is a decorator factory. When the @enumerable(false)
decorator is called, it modifies the enumerable property of the property descriptor.
*/
let greeter11 = new Greeter1("my message");
console.log("message:", greeter11.greeting); // my message
let array = Object.getOwnPropertyNames(greeter11);
console.log(array); //[ 'greeting' ]
console.log(Object.keys(greeter11));
console.log(Object.getPrototypeOf(greeter11));
console.log(greeter11);
console.log(Object.keys(Object.getPrototypeOf(greeter11)));
