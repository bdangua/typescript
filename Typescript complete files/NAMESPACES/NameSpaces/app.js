var Angular;
(function (Angular) {
    Angular.sub_one = "Angular9";
})(Angular || (Angular = {}));
;
var NodeJS;
(function (NodeJS) {
    NodeJS.sub_two = "NODEJS";
})(NodeJS || (NodeJS = {}));
;
var MongoDB;
(function (MongoDB) {
    MongoDB.sub_three = "MongoDB";
})(MongoDB || (MongoDB = {}));
;
/// <reference path="./angular.ts" />
/// <reference path="./nodejs.ts" />
/// <reference path="./mongodb.ts" />
var MEAN;
(function (MEAN) {
    class class_one {
        constructor() {
            this.sub_one = Angular.sub_one;
            this.sub_two = NodeJS.sub_two;
            this.sub_three = MongoDB.sub_three;
        }
        ;
    }
    MEAN.class_one = class_one;
    ;
})(MEAN || (MEAN = {}));
;
/// <reference path="./mean.ts" />
console.log(new MEAN.class_one().sub_one, new MEAN.class_one().sub_two, new MEAN.class_one().sub_three);
