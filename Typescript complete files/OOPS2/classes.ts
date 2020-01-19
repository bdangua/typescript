/*
class class_one{
    private wish:string;
    constructor(private arg1:string){
        this.wish = arg1;
    };
    private getWish():string{
        return this.wish;
    };
    public myFun():string{
        return this.getWish();
    };
};
let obj:class_one = new class_one("Welcome");
console.log( obj.myFun() );   //Welcome
*/

/*
class class_one{
    //we can't create the Object to the class
    private constructor(){}

    public static fun_one():any{
        return new class_one();
    };

    public fun_two():string{
        return "welcome";
    };
};
console.log( class_one.fun_one().fun_two() );   //welcome
*/



//protected.
//protected members we can access in child classes.
//we can't access protected members by using class objects.

/*
class class_one{
    protected wish:string = "Angular9";
}
new class_one().wish;   //Property 'wish' is protected and only accessible within class 'class_one' and its subclasses
*/


/*
class class_one{
    protected sub_one:string;
    private sub_two:string;
    public sub_three:string;
    protected constructor(protected arg1:string,
                          private arg2:string,
                          public arg3:string){
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
    public meanStack():string{
        return this.sub_one+"<=>"+this.sub_two+"<=>"+this.sub_three;
    };
};
class class_two extends class_one{
    constructor(arg1:string,arg2:string,arg3:string){
        super(arg1,arg2,arg3);
    };
};
let obj:class_two = new class_two("Angular9","NodeJS","MongoDB");
console.log( obj.meanStack() );   //Angular9<=>NodeJS<=>MongoDB
*/

/*
class class_one {
    protected fun_one():any{
        return{
            login : login
        }
    };
};
function login():string{
    return "welcome to login module";
};
class class_two extends class_one {
    public fun_two():any{
        return this.fun_one();
    };
};
console.log( new class_two().fun_two().login() );
*/




//Classes
//Inheritance
//Polymorphism
//Interfaces
//Abstract Classes
//super
//readonly
//this
//static
//public
//private
//protected

/*
//overloading
//same function with different arguments called as function overloading
function add(num1:number,num2:number):number;
function add(arg1:string,arg2:string):string;
function add(param1:any,param2:any):any{
    return param1+param2;
};
console.log( add(10,10) );
console.log( add("welcome ","to angular9") );
*/

/*
function add(arg1:number,arg2:number):number;
function add(arg1:string):string;
function add(arg1:any,arg2:any):any{
    return arg1+arg2;
};   //this overload signature is not compatible with its implementation               signature.
*/
/*
class class_one{
    public add(arg1:number,arg2:number):number;
    public add(arg1:string,arg2:string):string;
    public add(arg1:any,arg2:any):any{
        return arg1+arg2;
    };
};
console.log( new class_one().add(10,10) );
console.log( new class_one().add("welcome ","to overloading") );
//20
//welcome to overloading
*/


//Tuples
//Collection of Hetrogeneous Elements Called as Tuple.
//let employee:[number,string] = [1,"e_one"];
//console.log(employee);    //[ 1, 'e_one' ]


// let employee:[number,string,boolean];
// employee = [1,"e_one",true];
// console.log( employee );    //[ 1, 'e_one', true ]

let employee:[number,string];
employee = [111,"Hello1"];
//employee[0] = 111;
console.log( employee[0],employee[1] );   //111 'Hello1'
console.log( employee.length );           //2
employee.push(222);
employee.push("Hello_2");
employee.push("Hello_3");
console.log( employee );                 //[ 111, 'Hello1', 222, 'Hello_2',                                                'Hello_3' ]
console.log( employee.length );          //5
employee.pop();
console.log( employee );                //[ 111, 'Hello1', 222, 'Hello_2' ]






















































































