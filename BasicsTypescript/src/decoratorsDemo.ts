function Helper(genericString: string) {
    return function(constructor: Function) {
        console.log(genericString);
        console.log(constructor);
    }
}

function AngularTemplate(template: string, hookId: string) 
{
    return function (_: any) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}

// @Helper('Showing constructor:')
// change "emitDecoratorMetadata" to true in tsconfig.json file
// hooId is app a div with id of 'app'
@AngularTemplate('<h4>This is a Angular like Template code</h4>', 'app')
class Car
{
    name = 'Tata Nexon of Johnson TONG';
    constructor()
    {
        console.log(`Car ${this.name} created`);
    }
}

const car1 = new Car();
console.log(car1)


//Property Decorators
function Log(target: any, propertyName: string | Symbol) 
{
    console.log('From Log:Property decorator!');
    console.log("propertyName", propertyName);//title
    console.log("target:",target);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('From Log2:Accessor decorator!');
    console.log("target:",target);
    console.log("name:",name);//fullname
    console.log("PropertyDescriptor:",descriptor);
}

function Log3( target: any, name: string | Symbol, descriptor: PropertyDescriptor)
{
    console.log('From Log3:Method decorator!');
    console.log("target:",target);
    // target: Object
    // > constructor: class Employee
    // > getNameWithTitle
    // > set fullName
    // [[Prototype]]:Object

    console.log("name:",name);//fullname
    console.log("PropertyDescriptor:",descriptor);//Object ==> configurable: true, enumerable:false set f fullName(name)
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('From Log4: Parameter decorator!');
    console.log("target:",target);
    console.log("name:",name);// getNameWithTitle
    console.log("position:",position);//0
}

class Employee
{
    @Log
    title: string;
    private _fullName: string;

    @Log2
    set fullName(name: string)
     {
        this._fullName = name;
    }

    constructor(title: string, name: string) 
    {
        this.title = title;
        this._fullName = name;
    }

    @Log3
    getNameWithTitle(@Log4 id: number)
    {
        return `Employee - ${id}, Title - ${this.title}, Name - ${this._fullName}`;
    }

}

const emp2 = new Employee("CEO", "Johnson TOnG");
console.log("getNameWithTitle:", emp2.getNameWithTitle(2));