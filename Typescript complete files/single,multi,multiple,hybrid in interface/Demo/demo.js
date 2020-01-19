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
;
;
;
var obj = {
    mean: "Angular",
    mern: "ReactJS",
    mevn: "VueJS"
};
console.log(obj.mean, obj.mern, obj.mevn);
