/*
let tuple1:[number,string] = [111,"Hello_1"];
console.log( tuple1 );                      //[ 111, 'Hello_1' ]
console.log( tuple1[0],tuple1[1] );         //111 'Hello_1'
*/

/*
let tuple1:[number,boolean,string];
tuple1 = [111,true,"Hello_1"];
console.log( tuple1 );      //[ 111, true, 'Hello_1' ]
tuple1.push(222);
tuple1.push("Hello_2");
tuple1.push(false);
console.log(tuple1);        //[ 111, true, 'Hello_1', 222, 'Hello_2', false ]
tuple1.pop();
tuple1.pop();
console.log( tuple1 );     //[ 111, true, 'Hello_1', 222 ]
console.log( tuple1.length );  //4
tuple1[2] = "Angular";
console.log( tuple1 );       //[ 111, true, 'Angular', 222 ]
*/

/*
var tuple1:[string,string,string] = ["Angular","NodeJS","MongoDB"];
tuple1[0] = tuple1[0]+" 9";
tuple1[1] = tuple1[1]+" GraphQL";
tuple1[2] = tuple1[2]+" Mongoose";
console.log( tuple1 );    //[ 'Angular 9', 'NodeJS GraphQL', 'MongoDB Mongoose' ]
*/

/*
//Tuple Destruction
let tuple1:[string,string] = ["Hello_1","Hello_2"];
let [a,b] = tuple1;
console.log(a,b);    //Hello_1 Hello_2
*/



//Enum
//Enum is used to create the Custom DataType
//we have following Types of Enum
//@Numeric Enum         @String Enum        @Hetrogeneous Enum
/*
enum NareshIT{
    DeepaVali,
    Dasara,
    Pongal
};
console.log(NareshIT);
console.log(NareshIT.DeepaVali,NareshIT.Dasara,NareshIT.Pongal);
*/
/*
    { 
      '0': 'DeepaVali',
      '1': 'Dasara',
      '2': 'Pongal',
       DeepaVali: 0,
       Dasara: 1,
      Pongal: 2 
    }
    0 1 2
*/

/*
enum NareshIT{
    DeepaVali=1,
    Dasara,
    Pongal
};
console.log( NareshIT.DeepaVali,NareshIT.Dasara,NareshIT.Pongal);  //1 2 3
*/

/*
enum NareshIT{
    DeepaVali = 2,
    Dasara = 10,
    Pongal = 30
};
console.log( NareshIT.DeepaVali,NareshIT.Dasara,NareshIT.Pongal ); //2 10 30
*/

/*
enum myDataType{
    EXECUTE,
    ERROR,
    HOLD,
    PRODUCTION
};
function myFun(arg1:any):void{
    console.log(arg1.EXECUTE);
};
myFun(myDataType);    //0
*/

/*
//string enum
enum myEnum  {
    ANGULAR   = "NG",
    JQUERY    = "$",
    React     = "JSX",
    NODEJS    = "NODE"
};
console.log( myEnum.ANGULAR,myEnum.JQUERY,myEnum.React,myEnum.NODEJS );
//NG $ JSX NODE
*/

/*
enum myEnum{
    ANGULAR = "NG"
};
function myFun(arg1:any):void{
    console.log(arg1.ANGULAR);
};
myFun(myEnum);   //NG
*/


/*
//Hetrogeneous Enums
//Collection of "Number Enums" and "String Enums" called as Hetrogeneous Enums
enum myEnum{
    React = 1,
    Angular = "NG",
    Node    = React
};
console.log( myEnum.React,myEnum.Angular,myEnum.Node );   //1  NG  1
*/

/*
enum myEnum{
    ANGULAR = getSub()
};
function getSub():any{
    return "Angular9";
};
console.log(myEnum.ANGULAR);    //Angular9
*/

enum myEnum{
    NODEJS = myFun(),
    ANGULAR = NODEJS*9
};
function myFun():any{
    return 1;
};
console.log( myEnum.NODEJS,myEnum.ANGULAR );  //1  9


































