"use strict";
// ==== getFields method starts here ====
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
