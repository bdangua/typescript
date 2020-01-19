/*
//function overriding
class class_one{
    public dbData():string{
        return "MySQL Data Soon...!";
    };
};
class class_two extends class_one{
    public dbData():string{
        return "MongoDB Data Soon...!";
    };
};
let obj:class_two = new class_two();
console.log( obj.dbData() );
*/
/*
//function overloading
class class_one{
    public add(...num:number[]):void{
        //ES6
        //reduce()
        //reduce() function used to find the summation of array elements
        console.log(
            num.reduce((num1,num2)=>{
                return num1+num2;
            })
        );
    };
};
new class_one().add(10,20);
new class_one().add(10,20,30);
new class_one().add(10,20,30,40);
*/
/*
interface interface1{
    dbData:string;
};
let obj:interface1 = {
    dbData:"MEAN Stack...!"
};
console.log( obj.dbData );   //MEAN Stack...!
*/
/*
interface interface1{
    sub_one:string;
    sub_two:string;
    sub_three:string;
};
let obj1:interface1 = {
    sub_one:"Angular",
    sub_two:"NodeJS",
    sub_three:"MongoDB"
};
let obj2:interface1={
    sub_one:"ReactJS",
    sub_two:"NodeJS",
    sub_three:"MongoDB"
};
let obj3:interface1 = {
    sub_one:"VueJS",
    sub_two:"NodeJS",
    sub_three:"SQLServer"
};
class class_one implements interface1{
    sub_one:string = "MEAN Stack....!";
    sub_two:string = "MERN Stack....!";
    sub_three:string = "MEVN Stack....!";
};
console.log(obj1.sub_one,obj1.sub_two,obj1.sub_three);
console.log(obj2.sub_one,obj2.sub_two,obj2.sub_three);
console.log(obj3.sub_one,obj3.sub_two,obj3.sub_three);
let obj:class_one = new class_one();
console.log(obj.sub_one,obj.sub_two,obj.sub_three);
*/
/*
interface interface1{
    add(num1:number,num2:number):number;
};
let obj1:interface1 = {
    add : (num1:number,num2:number):number=>{
        return num1+num2;
    }
};
console.log( obj1.add(10,10) );

class class_one implements interface1{
    public add(num1:number,num2:number):number{
        return num1+num2;
    };
};
console.log( new class_one().add(10,10) );
*/
/*
interface interface1{
    //declare variable
    dbData:string;
    //declare function
    getDBData():string;
};
//JSON
let obj:interface1 = {
    dbData : "FireBase",
    getDBData : ():string=>{
        return obj.dbData+" Data Soon....!"
    }
};
//call
console.log( obj.dbData, obj.getDBData() );
*/
/*
console.log(
    [10,20,30,40,50].map((element,index)=>{
        return "$"+element;
    })
);
*/
/*
let arr1 = [1,2,3,4,5];
let arr2 = ["one","two","three","four","five"];
console.log(
    arr1.map((element,index)=>{
        return [element,arr2[index]];
    })
);
*/
console.log(Array.from("hello"));
