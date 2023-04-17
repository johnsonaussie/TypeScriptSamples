// ==== getFields method starts here ====

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
