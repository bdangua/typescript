/*
//single level inheritance
//if we know only declarations then we will choose interfaces (no implementation)
//we will declare interfaces by using "interface" keyword
//implementation done by either JSON or Classes.

interface interface1{
    fun_one():string;
};

interface interface2 extends interface1{
    fun_two():string;
};

let obj:interface2 = {
  fun_one:():string=>{return "i am from fun one !!!"},
  fun_two:():string=>{return "i am from fun twoo !!!"}
};

console.log( obj.fun_one(),obj.fun_two() );

class class_one implements interface2{
    public fun_one():string{
        return "i am from interface 1";
    };
    public fun_two():string{
        return "i am from interface 2";
    };
};
console.log( new class_one().fun_one(), 
             new class_one().fun_two());

*/

/*
//multi level inheritance
interface interface1{
    oraDB():string;
};
interface interface2 extends interface1{
    mysqlDB():string;
};
interface interface3 extends interface2{
    mongodb():string;
};
interface interface4 extends interface3{
    cassandraDB():string;
};
let obj:interface4 = {
    oraDB : ():string=>{ return "Oracle Connection Soon....!"},

    mysqlDB : ():string=>{ return "MySQL Connection Soon...!"},

    mongodb : ():string=>{ return "MongoDB Connection Soon...!"},

    cassandraDB : ():string=>{ return "CassandraDB Connection Soon...!" }
};
console.log( obj.oraDB(),
             obj.mysqlDB(),
             obj.mongodb(),
             obj.cassandraDB() );
*/

/*
//multiple inheritance
interface interface1{
    sub_one:string;
};
interface interface2{
    sub_two:string;
};
interface interface3 extends interface1,interface2{
    sub_three:string;
};
let obj:interface3 = {
    sub_one : "Angular",
    sub_two : "NodeJS",
    sub_three : "MongoDB"
};
console.log( obj.sub_one,
             obj.sub_two,
             obj.sub_three );
//we can achieve multiple inheritance by using interfaces, but we can't achieve by classes
*/

/*
//hybrid inheritance
interface interface1{
    mean:string;
};
interface interface2 extends interface1{
    mern:string;
};
interface interface3 extends interface1{
    mevn:string;
};
interface interface4 extends interface2,interface3{}
let obj:interface4 = {
    mean : "Angular",
    mern : "ReactJS",
    mevn : "VueJS"
};
console.log( obj.mean,obj.mern,obj.mevn );
*/













