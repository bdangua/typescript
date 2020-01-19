// function fun_one():string{
//     return "welcome to ES6 Functions";
// };
// console.log( fun_one );   //[Function: fun_one]
// console.log( fun_one() ); //welcome to ES6 Functions
// function fun_one(arg1:string,
//                  arg2:string,
//                  arg3:string):string{
//     return arg1+"<=>"+arg2+"<=>"+arg3;
// };
// console.log( fun_one("Angular","NodeJS","MongoDB") );
// console.log( fun_one("ReactJS","NodeJS","CassndraDB") );
// console.log( fun_one("VueJS","NodeJS","SQLServer") );
// function fun_one():any{
//     return fun_two();
// };
// function fun_two():any{
//     return "welcome";
// };
// console.log( fun_one() );
var arr = [];
function fun_one() {
    return "Hello";
}
;
for (var i = 0; i < 5; i++) {
    arr.push(fun_one());
}
;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log(value);
}
