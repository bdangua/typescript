//Generics
//Generics are used to maintain the Type Safety.
//Because of Generics TypeCasting Not Required.
//Converting one data structure to another data structure called as TypeCasting.
//Because of Generics we can handle compile time errors
/*
function fun_one<T>(arg1:T):T{
    return arg1;
};
console.log( fun_one<number>(100) );     //100
console.log( fun_one<string>("Hello") );  //Hello
console.log( fun_one<boolean>(true) );    //true
*/
/*
function fun_one<A,B,C>(arg1:A,arg2:B,arg3:C){
    return arg1+" "+arg2+" "+arg3;
};
console.log(
    fun_one<string,string,string>("Hello_1",
                                "Hello_2",
                                "Hello_3")
);   //Hello_1 Hello_2 Hello_3
console.log(
    fun_one<number,number,number>(100,200,300)
);  //100 200 300
*/
/*
function fun_one<A,B,C,D>(param1:A,
                         param2:B,
                         param3:C,
                         param4:D):void{
    console.log(param1,param2,param3,param4);
};
fun_one<string,string,string,string>("MEAN",
                                     "MERN",
                                     "MEVN",
                                     "Full Stack");
//MEAN MERN MEVN Full Stack
*/
/*
//without generic "creating normal function"
function fun_one(arg1:any[]):any[]{
    return new Array().concat(arg1);
};
let arr1 = fun_one([10,20,30,40]);
console.log( arr1 );            //[ 10, 20, 30, 40 ]
arr1.push(50);
console.log(arr1);             //[ 10, 20, 30, 40, 50 ]
arr1.push("Hello");
console.log(arr1);    //[ 10, 20, 30, 40, 50, 'Hello' ]
*/
/*
//creating normal function with generic
function fun_one<G>(arg1:G[]):G[]{
    return new Array().concat(arg1);
};
let arr1 = fun_one<number>([10,20,30,40]);
console.log( arr1 );     //[ 10, 20, 30, 40 ]
arr1.push(50);
console.log( arr1 );     //[ 10, 20, 30, 40, 50 ]

//arr1.push("Hello");      //Argument of type '"Hello"' is not assignable to parameter of type 'number'.

let arr2 = fun_one<string>(["Hello_1"]);
console.log( arr2 );     //[ 'Hello_1' ]
arr2.push("Hello_2");
console.log( arr2 );     //[ 'Hello_1', 'Hello_2' ]
//arr2.push(10);         //Argument of type '10' is not assignable to parameter of type 'string'.
*/
/*
//combination of Generic and non generic
function fun_one<T>(arg1:T,arg2:string):void{
    console.log( typeof(arg1),typeof(arg2) );
};
fun_one<string>("Hello_1","Hello_2");//string string
fun_one<number>(10,"Hello_2");    //number string
*/
/*
function fun_one<A,B>(arg1:A,arg2:string,arg3:B):void{
    console.log( typeof(arg1),
                 typeof(arg2),
                 typeof(arg3) );
};
fun_one<string,string>("","","");   //string string string
fun_one<number,string>(0,"","");   //number string string
*/
/*
//Class with Generics
class class_one<T,U>{
    private var_one:T;
    private var_two:U;
    setData(arg1:T,arg2:U):void{
        this.var_one = arg1;
        this.var_two = arg2;
    };
    getData():void{
        console.log( this.var_one,this.var_two );
    };
};
let obj1 = new class_one<string,string>();
obj1.setData("Hello","welcome");
obj1.getData();    //Hello welcome

let obj2 = new class_one<number,number>();
obj2.setData(100,100);
obj2.getData();    //100 100

let obj3 = new class_one<boolean,any>();
obj3.setData(true,true);
obj3.getData();   //true true
*/
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    return class_one;
}());
var obj1 = new class_one("Hello", "Hi");
console.log(obj1.arg1, obj1.arg2);
var obj2 = new class_one(100, 100);
console.log(obj2.arg1, obj2.arg2);
var obj3 = new class_one("Hello", true);
console.log(obj3.arg1, obj3.arg2);
