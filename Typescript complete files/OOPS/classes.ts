/*
//parent class
class class_one{
    public fun_one():string{
        return "i am from class one !!!";
    };
};
//child class
//extends is the keyword used to implement the inheritance
class class_two extends class_one{
    public fun_two():string{
        return "i am from class two";
    };
};
//child class reference
let obj:class_two = new class_two();
console.log( obj.fun_one(), obj.fun_two() );
//parent class reference
let obj1:class_one = new class_one();
console.log( obj1.fun_one() );
*/

/*
class class_one{
    public meanStack():string{
        return "MEAN Stack....!";
    };
};
class class_two extends class_one{
    public mernStack():string{
        return "MERN Stack....!";
    };
};
class class_three extends class_two{
    public mevnStack():string{
        return "MEVN Stack....!";
    };
};
//obj to parent
let obj1:class_one = new class_one();
console.log( obj1.meanStack() );


let obj2:class_two = new class_two();
console.log( obj2.meanStack(),obj2.mernStack() );


let obj3:class_three = new class_three();
console.log( obj3.meanStack(),
             obj3.mernStack(),
             obj3.mevnStack() );
*/




/*
class parent1{}
class parent2{}
class child extends parent1,parent2{}
//Multiple Inheritance Not Supported by TypeScript
*/

/*
class parent1{}
class child1 extends parent1{}
class child2 extends parent1{}
class subchild extends child1,child2{}
//Note : HyBrid Inheritance Not Supported By TypeScript
*/



/*
class class_one{
    private data:string;
    constructor(private arg1:string){
        this.data = arg1;
    };
    public getData():string{
        return this.data;
    };
};
class class_two extends class_one{
    constructor(private param:string){
        super(param);
    };
};
let obj:class_two = new class_two("Hello");
console.log( obj.getData() );
*/


class class_one{
    constructor(private arg1:string){}
    public getData():string{
        return this.arg1;
    };
};
class class_two extends class_one{}

let obj:class_two = new class_two("Hello");
console.log(  obj.getData() );




































