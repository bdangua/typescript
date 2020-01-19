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

namespace outer{
    export namespace inner{
        export function myFun():void{
            console.log("welcome to nested namespaces");
        };
    };
};













