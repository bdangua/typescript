"use strict";
// import { URL } from "./demo1";
// console.log( URL );   //http://localhost:4200
exports.__esModule = true;
var obj1 = {
    fun_one: function () {
        return "welcome to interface1";
    }
};
var obj2 = {
    fun_two: function () {
        return "welcome to interface2";
    }
};
console.log(obj1.fun_one(), obj2.fun_two());
