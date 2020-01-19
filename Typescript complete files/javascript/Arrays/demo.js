/*
let arr = [1,2,3,1,1,3,2,1,4,5];
arr.forEach((element,index)=>{
    console.log( arr.indexOf(element) );
})
*/

/*
let arr = [10,20,30,40,50];
console.log(
    arr.filter((element,index)=>{
        return element>=30;
    })
);
*/


/*
let arr = [10,20,30,20,10,30,40];
console.log(
    arr.filter((element,index)=>{
        return arr.indexOf(element) == index;
    })
);
*/

let arr = ["ReactJS","NodeJS","MongoDB","MySQL"];
arr.fill("Angular",1,3);
console.log(arr);











