class BaseEntity
{
    readonly id: number;
    readonly created: string;
    constructor() 
    {
      this.id = Math.random();
      this.created = new Date().toLocaleDateString();
    }
}

class Course extends BaseEntity
{
    constructor(public name: string)
    {
      super();
    }
}
let englishCourse = new Course("English");
console.log("id: " + englishCourse.id);
console.log("created: " + englishCourse.created);
console.log("name:", englishCourse.name);// English

// The decorator class is a function and gets the constructor as a parameter, then include the id and created properties.
function BaseEntity1(ctr: Function)
{
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString("es-ES");
}
//The decorator is ready to be used in each entity without modifying his constructor or extend, 
//only needs to add @Entity before class definition.


// if you have parameter to pass to a decorator you need to use this 
// way make the function to return a function
function LuckyNumber(limit: number) 
{ 
  return function (constructor: Function) 
  { 
    constructor.prototype.lucky = Math.floor
    (
      Math.random() * Math.floor(limit)
    )
  } 
}

@BaseEntity1
@LuckyNumber(10)
class User 
{
  constructor(public name: string) {}
}

@LuckyNumber(7)
@BaseEntity1
class City 
{
  constructor(public zicode: number) {}
}
/*
The Decorator LuckyNumber get a number as parameter to set the range limit, the new Decorator can be use nested with other.
*/
//TypeScript also supports defining a function with the built-in JavaScript constructor called Function ().
//var res = new Function( [arguments] ) { ... }.
var myFunction = new Function("a", "b", "return a * b"); 
console.log(myFunction);//[Function (anonymous)]
var x = myFunction(4, 3); 
console.log(x);

var MyLucky = LuckyNumber(3);// [Function (anonymous)]
//console.log(MyLucky(City.constructor(4)));
var wrapper1 =MyLucky( City.constructor(4) );

let user = new User("dany");
let ny = new City(12345);
//City and User classes has the id and created property ;)
console.log("city.id:",ny.id);
console.log("user.id:",user.id);
console.log("city.zicode:",ny.zicode);
console.log("city.created:",ny.created);
console.log("city.luckynumber", ny.lucky);
console.log("user.luckynumber", user.lucky );
