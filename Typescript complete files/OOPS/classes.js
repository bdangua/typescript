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
var class_one = /** @class */ (function () {
    function class_one(arg1) {
        this.arg1 = arg1;
        this.data = arg1;
    }
    ;
    class_one.prototype.getData = function () {
        return this.data;
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two(param) {
        var _this = _super.call(this, param) || this;
        _this.param = param;
        return _this;
    }
    ;
    return class_two;
}(class_one));
;
var obj = new class_two("Hello");
console.log(obj.getData());
