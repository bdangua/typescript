/*
function fun_one(...arg1:number[]):void{
    console.log(arg1);
};
//fun_one(10);      //[ 10 ]
//fun_one(10,20);   //[ 10, 20 ]
//fun_one();        //[]
//fun_one(undefined); //[ undefined ]
//fun_one(null);        //[ null ]
//fun_one(undefined,null);  //[ undefined, null ]
*/
/*
function fun_one(arg1:number,...arg2:number[]):void{
    console.log( arg1,arg2 );
};
fun_one(10);                            //10 []
fun_one(undefined);                     //undefined []
fun_one(10,20);                         //10 [ 20 ]
fun_one(10,20,30,40,50);                //10 [ 20, 30, 40, 50 ]
fun_one(undefined,undefined,null);      //undefined [ undefined, null ]
*/
/*
function fun_one(...arg1:any,arg2:any):void{

};
// [Note : A rest parameter must be last in a parameter list.]
*/
/*
function fun_one(...arg1:any,...arg2:any):void{

};
// [Note : we can't take more than one rest argument]
*/
//Deep Cloning
// let obj1 = {"sub":"Angular8"};
// console.log(obj1);    //{ sub: 'Angular8' }
// let obj2 = obj1;
// obj2.sub = "Angular9";
// console.log(obj1);    //{ sub: 'Angular9' }
// console.log(obj2);    //{ sub: 'Angular9' }
//Shallow Cloning / Virtual Clonning
// let obj1 = {"sub":"Angular8"};
// console.log(obj1);   //{ sub: 'Angular8' }
// let obj2 = {...obj1};
// obj2.sub = "Angular9";
// console.log(obj1);    //{ sub: 'Angular8' }   
// console.log(obj2);    //{ sub: 'Angular9' } 
/*
function fun_one(arg1?:string,
                 arg2?:string,
                 arg3?:string):void{
    console.log(arg1,arg2,arg3);
};
fun_one();    //undefined undefined undefined
fun_one("Angular");    //Angular undefined undefined
fun_one("ReactJS",undefined,"NodeJS");   //ReactJS undefined NodeJS
*/
/*
function fun_one(arg1:string,arg2?:string):void{
    console.log(arg1,arg2);
};
fun_one("Hello");              //Hello undefined
fun_one(undefined);            //undefined undefined
fun_one(null);                 //null undefined
fun_one("Hello","Welcome");    //Hello Welcome
fun_one();                     //Expected 1-2 arguments, but got 0.
*/
function fun_one(arg1, arg2) {
    var arg3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg3[_i - 2] = arguments[_i];
    }
    console.log(arg1, arg2, arg3);
}
;
//fun_one();        //Expected at least 1 arguments, but got 0
fun_one("Angular"); //Angular undefined []
fun_one("Angular", "NodeJS"); //Angular NodeJS []
fun_one("Angular", "NodeJS", "MongoDB"); //Angular NodeJS [ 'MongoDB' ]
fun_one(undefined, undefined, undefined);
