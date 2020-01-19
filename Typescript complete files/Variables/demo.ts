var decimal:number = 100;
var double:number = 100.12345;
var hexadecimal:number = 0xABC1234;
var octal:number = 0o123;
var binary:number = 0b1010;
console.log(decimal,
            double,
            hexadecimal,
            octal,
            binary);

var sub_one:string = "Angular";
var sub_two:string = 'NodeJS';
var sub_three:string = `MongoDB`;
console.log(sub_one,sub_two,sub_three);

var tbl_name:string = "products";
var amount:number = 50000;
var sqlQuery:string = `select * from ${tbl_name} 
                        where p_cost>${amount}`;
console.log( sqlQuery );


var test:string | number = 100;
console.log(test);
test = "Angular9";
console.log(test);


var flag:boolean = true;
console.log(flag);


var arr:Array<string> = ["Angular",
                        "NodeJS",
                        "ReactJS",
                        "VueJS",
                        "MongoDB"];
for(var i:number=0;i<arr.length;i++){
    console.log(arr[i]);
};
arr.forEach( (element,index)=>{
    console.log( element+"...."+index );
} );
for(var value of arr){
    console.log(value);
};

var serverdata:any = "server response soon....!";
console.log( serverdata );







