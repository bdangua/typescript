// import { URL } from "./demo1";
// console.log( URL );   //http://localhost:4200

/*
import { var_one } from "./demo1";
import { var_two } from "./demo1";
import { var_three } from "./demo1";
console.log( var_one,
             var_two,
             var_three );  //Angular Android AWS
*/



// import { myFun } from "./demo1";
// console.log( myFun() );   //welcome to modules

// import myFun from "./demo1";
// console.log( myFun() );   //welcome to modules


/*
import { addition } from "./demo1";
import { subtraction } from "./demo1";
console.log( addition(10,10) );    //20
console.log( subtraction(10,10) ); //0
*/

/*
import * as Calculator from "./demo1";
console.log( Calculator.addition(10,10) );
console.log( Calculator.subtraction(10,10) );
*/

/*
import * as Subjects from "./demo1";
console.log(Subjects.var_one,Subjects.var_two);  //MEAN MERN
*/


// import class_one from "./demo1";
// console.log( new class_one().myFun() );
//welcome to classes

// import * as Sub from "./demo1";
// console.log( new Sub.class_one("Angular").arg1 );
// console.log( new Sub.class_two("NodeJS").arg1 );
// console.log( new Sub.class_three("MongoDB").arg1 );


// import { interface1 } from "./demo1";
// let obj:interface1 = {
//     myFun : ():void=>{
//         console.log("welcome to interfaces");
//     }
// };
// obj.myFun();


import * as Demo from "./demo1";
let obj1:Demo.interface1 = {
    fun_one : ():string=>{
        return "welcome to interface1";
    }
};
let obj2:Demo.interface2 = {
    fun_two : ():string=>{
        return "welcome to interface2";
    }
};
console.log( obj1.fun_one(),obj2.fun_two() );






























