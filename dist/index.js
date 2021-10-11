"use strict";
var Gender;
(function (Gender) {
    Gender["male"] = "\u7537";
    Gender["female"] = "\u5973";
})(Gender || (Gender = {}));
let gender;
gender = Gender.female;
// 枚举能够参与代码的编译,其实是生成一个对象
function printGenders() {
    const vals = Object.keys(Gender);
    vals.forEach(v => console.log(v));
}
printGenders();
var Lever;
(function (Lever) {
    Lever[Lever["lever1"] = 0] = "lever1";
    Lever[Lever["lever2"] = 1] = "lever2";
})(Lever || (Lever = {}));
let lever = Lever.lever1;
console.log(Object.keys(Lever), lever);
