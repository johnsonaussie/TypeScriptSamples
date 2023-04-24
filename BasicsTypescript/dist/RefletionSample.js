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
Object.defineProperty(exports, "__esModule", { value: true });
// ==== getFields method starts here ====
// npm install reflect-metadata -D
require("reflect-metadata");
const FIELDS = Symbol("fields");
function field(columnType) {
    function createDecoratorFunction(table, fieldName) {
        let fieldDecorator = { fieldName, columnType };
        (table[FIELDS] || (table[FIELDS] = [])).push(fieldDecorator);
        return fieldDecorator;
    }
    return createDecoratorFunction;
}
function getFields(table) {
    return table.prototype[FIELDS];
}
// ==== getFields method ends here ====
// ==== sample code from here ====
class Table {
}
__decorate([
    field("VARCHAR(30)"),
    __metadata("design:type", String)
], Table.prototype, "lastName", void 0);
__decorate([
    field("TIMESTAMP"),
    __metadata("design:type", Number)
], Table.prototype, "dob", void 0);
//document.getElementById("output");
console.log(JSON.stringify(getFields(Table), undefined, "  "));
// [
//    { fieldName:"lastName", columnType:"VARCHAR(30)"},
//    { fieldName:"dob",      columnType:"TIMESTAMP"}
// ]
function validate(target, propertyKey, descriptor) {
    let set = descriptor.set;
    descriptor.set = function (value) {
        let type = Reflect.getMetadata("design:type", target, propertyKey);
        if (!(value instanceof type)) {
            throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
        }
        set.call(this, value);
    };
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Line {
    constructor() {
        this._start = new Point(0, 0);
        this._end = new Point(0, 0);
    }
    set start(value) {
        this._start = value;
    }
    get start() {
        return this._start;
    }
    set end(value) {
        this._end = value;
    }
    get end() {
        return this._end;
    }
}
__decorate([
    validate,
    __metadata("design:type", Point),
    __metadata("design:paramtypes", [Point])
], Line.prototype, "start", null);
__decorate([
    validate,
    __metadata("design:type", Point),
    __metadata("design:paramtypes", [Point])
], Line.prototype, "end", null);
const line = new Line();
//line.start = new Point(1, 1);
line.end = new Point(2, 2);
console.log("line start:", line.start);
