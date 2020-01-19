/*
    Ex1:
        create the class by using following name
                @class_one

        class_one containes following variables
                @sub_one
                @sub_two
                @sub_three

        initilize the above variables by using default constructor

        class_one containes following functions
                @getSubOne()
                @getSubTwo()
                @getSubThree()

        create the object to class in "Duck Typing Method"

        call the above functions.

class class_one{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
    constructor(){
        this.sub_one = "Angular";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    };
    public getSubOne():string{
        return this.sub_one;
    };
    public getSubTwo():string{
        return this.sub_two;
    };
    public getSubThree():string{
        return this.sub_three;
    };
};
let obj:class_one = new class_one();     //Duck Typing
console.log( obj.getSubOne(),
             obj.getSubTwo(),
             obj.getSubThree() );       //Angular NodeJS MongoDB
*/
/*
    Ex2:
        create the class by using following name
                @class_one
        declare the following variables
                @sub_one
                @sub_two
                @sub_three
        initilize with parameterized constructor
        declare the following function
                @getSubjects()
        getSubjects() function will return above subjects
        create the object to the class in Duck Typing Method
        call the getSubjects() function by using Object.


class class_one{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;

    constructor(private arg1:string,
                private arg2:string,
                private arg3:string){
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    };

    public getSubjects():string{
        return this.sub_one+"...."+this.sub_two+"...."+this.sub_three;
    };
};

let obj1:class_one = new class_one("Angular","NodeJS","MySQL");
console.log( obj1.getSubjects() );

let obj2:class_one = new class_one("ReactJS","NodeJS","MongoDB");
console.log( obj2.getSubjects() );

let obj3:class_one = new class_one("VueJS","NodeJS","SQLServer");
console.log( obj3.getSubjects() );
*/
/*
    Ex3.
        establish the relation between two classes

class class_one{
    public myFun():any{
        return new class_two();
    };
};
class class_two{
    public myFun():string{
        return "welcome";
    };
};
console.log( new class_one().myFun().myFun() );   //welcome
*/
/*
    Ex4.
        pass "one class reference" to "another class constructor"

class class_one{
    constructor(private obj:class_two){}
    public fun_one():string{
        return this.obj.fun_two();
    }
};
class class_two{
    public fun_two():string{
        return "welcome";
    };
};
let ref:class_one = new class_one( new class_two() );
console.log( ref.fun_one() );     //welcome
*/
/*
    Ex5.
        class function return json object

class class_one{
    public myFun():any{
        return{
            "myFun":"mean stack....!"
        }
    };
};
console.log(new class_one().myFun().myFun);    //mean stack....!
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.myFun = function () {
        return {
            "myFun": myFun
        };
    };
    ;
    return class_one;
}());
;
function myFun() {
    return "db data soon...!";
}
;
console.log(new class_one().myFun().myFun());
