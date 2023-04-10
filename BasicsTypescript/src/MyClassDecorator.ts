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
function BaseEntity1(ctr: Function)
{
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString("es-ES");
}
//The decorator is ready to be used in each entity without modifying his constructor or extend, 
//only needs to add @Entity before class definition.

@BaseEntity1
class User 
{
  constructor(public name: string) {}
}

@BaseEntity1
class City 
{
  constructor(public zicode: number) {}
}

let user = new User("dany");
let ny = new City(12345);
//City and User classes has the id and created property ;)
console.log("city.id:",ny.id);
console.log("user.id:",user.id);
console.log("city.zicode:",ny.zicode);
console.log("city.created:",ny.created);

