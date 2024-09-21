let age: number = 20;
if (age < 50)
    age+=10;
console.log(age);


let sales: number = 123456789;
let course : string = 'TypeScript';
let is_published: boolean = true;

//array
let numbers: number[] = [];

//tuples
let user: [number, string] = [1, 'Shalini'];

//enum
const small = 1;
const medium = 2;
const large = 3;

const enum Size { Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

//functions

function calculateTax(income: number, taxYear: number =2022): number {
    if (taxYear < 2022)
        return income*1.2;
    return income * 1.3;
}
calculateTax(10_000);

//objects
let employee1:{
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
} = {id:1,
    name:'Shalini',
    retire: (date: Date) =>{
        console.log(date);
    }
};


//type aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}
let employee: Employee ={
    id:1,
    name:'Shalini',
    retire: (date: Date) =>{
        console.log(date);
    }
}

//union types
function kgToLbs(weight: number | string): number {
    //Narrowing
    if(typeof weight === 'number')
        return weight*2.2;
    else
        return parseInt(weight) * 2.2;

}
kgToLbs(10);
kgToLbs('10kg');

//Intersection Types
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag:() => {},
    resize:() => {}
}

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity =100;

//Nullables Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hii")
}
greet(null);

//Optional Chaining
type Customer = {
    birthday?: Date
};
function getCustomer(id:number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()};
}
let customer = getCustomer(1);
//if ( customer!== null && customer!== undefined)

//Optional property access operator
    console.log(customer?.birthday?.getFullYear());

//Optional element access operatoe
//customers?.[0]   

//Optional call
let log: any = null;
log?.('a');