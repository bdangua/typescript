/*
function fun_one(arg1:string = "Angular",
                arg2:string = "NodeJS",
                arg3:string = "MongoDB"):void{
    console.log( arg1,arg2,arg3 );
};
fun_one();     //Angular NodeJS MongoDB
fun_one("ReactJS","Node","Mongo");    //ReactJS Node Mongo
fun_one("VueJS",undefined,"FireBase");   //VueJS NodeJS FireBase
fun_one(null,null,null);    //null null null
*/
/*
function fun_one(arg1:string,arg2:string="Welcome"):void{
    console.log( arg1,arg2 );
};
//fun_one();                    //Expected 1-2 arguments, but got 0.
fun_one("Hello");               //Hello Welcome
fun_one(undefined,undefined);   //undefined 'Welcome'
fun_one(null,null);             //null null   
*/

/*
function fun_one(arg1:string,
                 arg2:string="NodeJS",
                 arg3?:string):void{
    console.log(arg1,arg2,arg3);
};
//fun_one();    //Expected 1-3 arguments, but got 0
fun_one("Angular");     //Angular NodeJS undefined
fun_one("ReactJS",undefined,"MongoDB");   //ReactJS NodeJS MongoDB
*/

/*
function fun_one(arg1:string,
                 arg2:string = "Hello_2",
                 arg3?:string,
                 ...arg4:string[]):void{
    console.log(arg1,arg2,arg3,arg4);
};
//fun_one();   //Expected at least 1 arguments, but got 0
fun_one("Hello_1");   
                //Hello_1 Hello_2 undefined []
fun_one("Hello_1",undefined,"Hello_3","Hello_4");  
                //Hello_1 Hello_2 Hello_3 [ 'Hello_4' ]
fun_one(undefined,undefined,undefined,undefined);  
                //undefined 'Hello_2' undefined [ undefined ]
fun_one(null,null,null,null);   
                //null null null [ null ]
*/












