/*
namespace college{
    export function getCSEDeptDetails():number{
        return 180;
    };
    export function getECEDeptDetails():number{
        return 180;
    };
    export function getEEEDeptDetails():number{
        return 120;
    };
    export function getITDeptDetails():number{
        return 60;
    };
    export function getMechDeptDetails():number{
        return 120;
    };
};
*/
var outer;
(function (outer) {
    let inner;
    (function (inner) {
        function myFun() {
            console.log("welcome to nested namespaces");
        }
        inner.myFun = myFun;
        ;
    })(inner = outer.inner || (outer.inner = {}));
    ;
})(outer || (outer = {}));
;
// /// <reference path="./app.ts" />
// console.log( 
//              college.getCSEDeptDetails(),
//              college.getECEDeptDetails(),
//              college.getEEEDeptDetails(),
//              college.getITDeptDetails(),
//              college.getMechDeptDetails() 
// );
/// <reference path="./app.ts" />
outer.inner.myFun();
