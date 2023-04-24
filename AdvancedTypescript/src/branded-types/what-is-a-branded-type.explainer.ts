// Starting with ECMAScript 2015, symbol is a primitive data type, 
//just like number and string.
// Symbols are immutable, and unique.
//ust like strings, symbols can be used as keys for object properties.
const example = { one: 'uno', two: 'dos', three: 'tres' }

const sym = Symbol();
let obj = {
  [sym]: "value",
};
console.log(obj[sym]); // "value"
let obj1={sym:"Johnson"}
console.log(obj1.sym);
console.log(obj1["sym"]);


// A variable whose type is a 'unique symbol' type must be 'const'.
declare const brand: unique symbol;
type Brand<T, TBrand> = T & { [brand]: TBrand };

// T: string , TBrand: "Password"
type Password = Brand<string, "Password">;
// T:string, TBrand: "Email"
type Email = Brand<string, "Email">;
// T: {id: string; name: string;}, TBrand: "User"
type UserObject = Brand<{id: string; name: string;}, "User">;
const user: UserObject = {
    id: "007",
    name: "JamesBond",
  } as UserObject;
  
let password = "1231423" as Password;
password= "Jimmy" as Password;
console.log(password);
const email = "mpocock@me.com" as Email;
// password = "2323233"; // can not assign to password because it is an constant
let passwordSlot: Password;

passwordSlot = "BABA" as Password;

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));//[ 'a', 'b', 'c' ]
