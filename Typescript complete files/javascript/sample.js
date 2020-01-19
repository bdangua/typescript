let arr = [10,20,30,40,50];
let i = arr.findIndex((element,index)=>{
    return element == 30;
});
arr.splice(i,1);
console.log( arr );   //[ 10, 20, 40, 50 ]


let i1 = arr.findIndex((element,index)=>{
    return element == 20;
});
arr.splice(i1,1);
console.log(arr);

let products = [ {"pid":"p101"},
                 {"pid":"p102"},
                 {"pid":"p103"},
                 {"pid":"p104"},
                 {"pid":"p105"} ];
let i2 = products.findIndex((element,index)=>{
    return element.pid == "p104";
});
products.splice(i2,1);
console.log( products );






let arr4 = [0,1,2,3,4,5,6,7,8,9,10];
arr4.splice(0,2);
arr4.splice(7,2);
console.log( arr4 );   //[ 2, 3, 4, 5, 6, 7, 8 ]
arr4.splice(0,0,0,1);
console.log(arr4);
arr4.splice(9,0,9,10);
console.log( arr4 );












