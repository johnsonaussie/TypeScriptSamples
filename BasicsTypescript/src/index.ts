//Built-in Types
// There are three sets of literal字面 types available in TypeScript today: strings, numbers, and booleans; 
// by using literal types you can allow an exact value which a string, number, or boolean must have.
//Numbers
let myNum = 10;
let anotherNum: number = 20;

myNum = 12;
// below is wrong type string is not assignable to type number
//myNum = '12';

anotherNum = 30;
// below is wrong type boolean is not assignable to type number
//anotherNum = false;

//String
let myStr: string = 'Hello';
let anotherStr = 'World';
//Type 'boolean' is not assignable to type 'string'.
//myStr = true;
//Type 'number' is not assignable to type 'string'.
//anotherStr = 45;

//Boolean
let myBool: boolean = true;
let anotherBool = false;

// myBool = 'true'; //error Type 'string' is not assignable to type 'boolean'.

// Type 'number' is not assignable to type 'boolean'.
//anotherBool = 76;

//Inference
let salary:number;
salary = 12000;
//salary = '12000';
//salary = true;

//Objects
const developer =
{
    firstName: 'Nabendu',
    lastName: 'Biswas',
    age: 40,
    isTrainer: true
}

const newDeveloper: { name: string; age: number; isDev: boolean } =
 {
    name: 'Mousam',
    age: 39,
    isDev: true
}

newDeveloper.name = 'Mousam Mishra';
//newDeveloper.age = 'Fourty';
//newDeveloper.firstName = 'Mousam';

//Arrays
const languages = ['React', 'Angular', 'Vue'];

languages.push('TypeScript');
//languages.push(56); //number is not assignable to type string
//languages.push(true); // boolean is not assignable to type string

const numbers: number[] = [51, 22, 33];
numbers.push(56);
//numbers.push('56'); //error
// numbers.push(true); //error

const arrOfObj: { name: string; age: number }[] = 
[
    { name: 'Nabendu', age: 40 },
    { name: 'Mousam', age: 39 }
];

arrOfObj.push({ name: 'Shikha', age: 39 });
// arrOfObj.push({ name: 'Hriday', age: 'Eight' }); error

const arrOfArrays: number[][] = [
    [11, 32, 43],
    [34, 75, 64]
];

arrOfArrays.push([21, 32, 13]);

//Functions num1 & num2 belong to any "type"
const addNums = (num1:any, num2:any) => {
    return num1 + num2;
}

console.log("addnumber" , addNums(10, 20)); //30
console.log("addnumber" , addNums(10, '20')); //1020

const multiNums = (num1: number, num2: number) => {
    return num1 * num2;
}

multiNums(10, 20);
console.log("multiNums" , multiNums(10, 20)); //200
//multiNums(10, '20');//error

const modNums = (num1: number, num2: number): number => {
     return num1 % num2;
    //return num1 > num2 boolean is not assign to number
}

modNums(10, 20);
//modNums(10, '20'); error

const printSum = (num1: any, num2: any): void => {
    console.log("printsum:",num1 + num2);
}

printSum(10, 20);
printSum(10, '20'); 

//Union types
// Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. 
// so you use union type 
let numOrStr: number | string; // either a number or a string
numOrStr = 10;
numOrStr = 'Ten';

// let arr: (number | string )[] = [10, 'Ten', true]; error boolean not assign to a number or a string
let arr: (number | string )[] = [10, 'Ten', 222.33]; // number also including floating number
console.log ("arr:", arr);
//Literal types
let myLiteral: 'Nabendu' | 'Mousam' | 'Shikha' | 'Hriday' = 'Nabendu';

myLiteral = 'Mousam';
myLiteral = 'Shikha';
myLiteral = 'Hriday';
//myLiteral = 'Parag'; error 
myLiteral = 'Nabendu'
console.log("myLiteral:", myLiteral);

//Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };

const myRole = Role.ADMIN; //0
const hridayRole: Role = Role.AUTHOR;
console.log("myRole:", myRole);
//Optionals
let optionalObj: { name: string; age: number | undefined } =
{
    name: 'Nabendu',
    age: undefined
};
console.log("optionalObj:",optionalObj);//optionalObj: { name: 'Nabendu', age: undefined }

let betterOptObj: { name: string; age?: number } =
{
    name: 'Nabendu'
};
console.log("betterOptObj:",betterOptObj);
//Interfaces
interface Developer 
{
    name: string;
    age: number;
    isDev: boolean;
}

const person1: Developer = 
{
    name: 'Nabendu',
    age: 40,
    isDev: true
}

const person2: Developer =
{
    name: 'Mousam',
    age: 39,
    isDev: true
}

//Types
type DeveloperType =
{
    name: string;
    age: number;
    isDev: boolean;
}

const person3: DeveloperType = {
    name: 'Nabendu',
    age: 40,
    isDev: true
}

type PersonName = string;
const person4: PersonName = 'Nabendu';
type animal1={
    body: 'big'|'medium'|'small';
    foot: number;
    name: string;

}
const cat : animal1={
    foot:4,
    name:'cat',
    body: 'medium'

}
const dog : animal1={
    name:'dog',
    foot:4,
    body: 'small'
}
console.log("dog.body:", dog.body);
type CoderType = {
    name: string;
    category: 'frontend' | 'backend' | 'mobile';
    age: number;
}[];

const coder1: CoderType = [
    {  name: 'Nabendu', category: 'frontend', age: 40 },
    {  name: 'Mousam', category: 'backend', age: 39 },
]

//Classes
class CreateRoom
{
    private family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }
    showFamily(){
        console.log("Show Family:",this.family);
    }
    cleanRoom(soap: string){
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
mousam.addFamilyMember("johnson");
mousam.cleanRoom('Lizol');
mousam.showFamily();
