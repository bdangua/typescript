/// <reference path="./angular.ts" />
/// <reference path="./nodejs.ts" />
/// <reference path="./mongodb.ts" />
namespace MEAN{
    export class class_one{
        sub_one:string;
        sub_two:string;
        sub_three:string;
        constructor(){
            this.sub_one = Angular.sub_one;
            this.sub_two = NodeJS.sub_two;
            this.sub_three = MongoDB.sub_three;
        };
    };
};
