// ==== getFields method starts here ====
// npm install reflect-metadata -D
import "reflect-metadata";

const FIELDS = Symbol("fields");

interface FieldDecorator
{
	fieldName: string;
	columnType: string;
}

function field(columnType: string) // columnType: varchar, timestamp
{
	function createDecoratorFunction(table: any, fieldName: any) 
    {
		let fieldDecorator: FieldDecorator = { fieldName, columnType };
		(table[FIELDS] || (table[FIELDS] = [])).push(fieldDecorator);
		return fieldDecorator as any;
	}
	return createDecoratorFunction;
}

function getFields(table: any): FieldDecorator[] 
{
	return table.prototype[FIELDS];
}

// ==== getFields method ends here ====

// ==== sample code from here ====

class Table {
	@field("VARCHAR(30)") lastName?: string;
	@field("TIMESTAMP") dob?: number;
}

//document.getElementById("output");
console.log( JSON.stringify(getFields(Table), undefined, "  "));

// [
//    { fieldName:"lastName", columnType:"VARCHAR(30)"},
//    { fieldName:"dob",      columnType:"TIMESTAMP"}
// ]
function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) 
{
	let set = descriptor.set!;
	
	descriptor.set = function (value: T) 
	{
	  
	  let type = Reflect.getMetadata("design:type", target, propertyKey);
   
	  if (!(value instanceof type)) {
		throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
	  }
   
	  set.call(this, value);
	};
  }
class Point 
{
	constructor(public x: number, public y: number) {}
}

class Line {
	private _start: Point = new Point(0,0);
	private _end: Point = new Point(0,0);
   
	@validate
	set start(value: Point) 
	{
	  this._start = value;
	}
	
	get start() {
	  return this._start;
	}
   
	@validate
	set end(value: Point) 
	{
	  this._end = value;
	}
   
	get end() 
	{
	  return this._end;
	}
  }
  const line = new Line()
  //line.start = new Point(1, 1);
  line.end =  new Point(2,2);
  console.log("line start:",line.start);

