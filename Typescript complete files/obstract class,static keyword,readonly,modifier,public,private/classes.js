/*
abstract class class_one{
    public add(arg1:number,arg2:number):number{
        return arg1+arg2;
    };
    public abstract sub(arg1:number,arg2:number):number;
};
class class_two extends class_one{
    public sub(arg1:number,arg2:number):number{
        return arg1-arg2;
    }
};
let obj:class_two = new class_two();
console.log( obj.add(10,10),obj.sub(10,10) );   //20     0
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
abstract class class_one{
    public abstract oraDB():void;
};
abstract class class_two extends class_one{
    public abstract mysqlDB():void;
} ;
abstract class class_three extends class_two{
    public abstract mongodb():void;
};
class class_four extends class_three{
    public oraDB():void{
        console.log("Oracle Data Soon...!");
    };
    public mysqlDB():void{
        console.log("MySQL Data Soon...!");
    };
    public mongodb():void{
        console.log("MongoDB Data Soon...!");
    };
    public couchDB():void{
        console.log("CouchDB Data Soon...!");
    };
};
let obj:class_four = new class_four();
obj.oraDB();
obj.mysqlDB();
obj.mongodb();
obj.couchDB();
*/
/*
interface interface1{
    oraDB():void;
};
interface interface2 extends interface1{
    mysqlDB():void;
};
abstract class class_one implements interface2{
    public oraDB():void{
        console.log("oracle connection soon...!");
    };
    public mysqlDB():void{
        console.log("mysql connection soon...!");
    };
    public abstract mongodb():void;
};
abstract class class_two extends class_one{
    public abstract couchDB():void;
};
class my_class extends class_two{
    public mongodb():void{
        console.log("mongodb connection soon...!");
    };
    public couchDB():void{
        console.log("couchDB connection soon...!");
    };
};
let obj:my_class = new my_class();
obj.oraDB();
obj.mysqlDB();
obj.mongodb();
obj.couchDB();
*/
/*
class class_one{
    public static sub_one:string="Angular";
    public static sub_two:string="NodeJS";
    public static sub_three:string="MongoDB";
    public static meanStack():string{
        return this.sub_one+"...."+this.sub_two+"...."+this.sub_three;
    };
};
let obj:class_one = new class_one();
//obj.meanStack();
console.log( class_one.meanStack() );    //Angular....NodeJS....MongoDB
*/
/*
class class_one{
    readonly sub_one:string;
    readonly sub_two:string;
    readonly sub_three:string;
    constructor(){
        this.sub_one = "Angular8";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB"
    };
};
let obj:class_one = new class_one();
console.log( obj.sub_one,obj.sub_two,obj.sub_three );
//obj.sub_one = "Angular9";
*/
var class_one = /** @class */ (function () {
    function class_one(arg1) {
        this.arg1 = arg1;
        this.wish = arg1;
    }
    ;
    class_one.prototype.getWish = function () {
        return this.wish;
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return class_two;
}(class_one));
;
var obj = new class_two("Welcome");
console.log(obj.getWish());
