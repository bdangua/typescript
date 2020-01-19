// function fun_one():any{
//     return fun_two;
// };
// function fun_two():any{
//     return "Welcome to ES6 Functions";
// };
// console.log( fun_one()() );
// //declare the array
// let arr:Array<any> = [];
// //create the function
// function myFun():any{
//     return "Hello";
// };
// //push myFun definition to arr upto 5 times
// for(let i:number=0;i<5;i++){
//     arr.push( myFun );
// };
// //read
// for(let i:number=0;i<arr.length;i++){
//     console.log( arr[i]() );
// };
// let fun_one = ():string =>{
//     return "welcome to Arrow Functions";
// };
// console.log( fun_one );       //[Function: fun_one]
// console.log( fun_one() );     //welcome to Arrow Functions
// let fun_one = (arg1:string,
//                arg2:string,
//                arg3:string):string=>{
//     return arg1+"<=>"+arg2+"<=>"+arg3;
// };
// console.log( fun_one("Angular","NodeJS","MongoDB") );
// console.log( fun_one("ReactJS","NodeJS","MySQL") );
// console.log( fun_one("VueJS","NodeJS","SQLServer") );
// let fun_one = ():any=>{
//     return fun_two();
// };
// let fun_two = ():any=>{
//     return "Welcome";
// };
// console.log( fun_one() );
// let serverCall = (posRes:any,errRes:any):void =>{
//     console.log( posRes, errRes );
// };
// let makeRestAPICall = ():string=>{
//     return "DataBase Data Soon...!";
// };
// let catchError = ():string=>{
//     return "We will handle Exceptions Soon...!";
// };
// serverCall( makeRestAPICall(),catchError() );
// let fun_one = ():any =>{
//     return ():string =>{
//         return "Welcome";
//     };
// };
// console.log( fun_one()() );
var fun_one = function (arg1, arg2, arg3) {
    console.log(arg1(), arg2(), arg3());
};
fun_one(function () { return "Angular"; }, function () { return "Node"; }, function () { return "MongoDB"; });
