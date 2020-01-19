var decimal = 100;
var double = 100.12345;
var hexadecimal = 0xABC1234;
var octal = 83;
var binary = 10;
console.log(decimal, double, hexadecimal, octal, binary);
var sub_one = "Angular";
var sub_two = 'NodeJS';
var sub_three = "MongoDB";
console.log(sub_one, sub_two, sub_three);
var tbl_name = "products";
var amount = 50000;
var sqlQuery = "select * from " + tbl_name + " \n                        where p_cost>" + amount;
console.log(sqlQuery);
var test = 100;
console.log(test);
test = "Angular9";
console.log(test);
var flag = true;
console.log(flag);
var arr = ["Angular",
    "NodeJS",
    "ReactJS",
    "VueJS",
    "MongoDB"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
;
arr.forEach(function (element, index) {
    console.log(element + "...." + index);
});
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log(value);
}
;
var serverdata = "server response soon....!";
console.log(serverdata);
