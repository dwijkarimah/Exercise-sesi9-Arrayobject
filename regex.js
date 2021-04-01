// regex = reguler expression
// cara 1 menggunakan new RegExp
let patternRegex1 = new RegExp("skilvul");
console.log(patternRegex1.test("Belajar coding bersama Skilvul"));

// cara 2 menggunakan didalam // untuk pattern
let patternRegex2 = /skilvul/;
console.log(patternRegex2.test("Belajar coding bersama skilvul"));

// regex menggunakan range
let patternRegex3 = /[a-c]/;
console.log(patternRegex3.test("Belajar coding bersama skilvul"));

let patternRegex3 = /[1-5]/;
console.log(patternRegex3.test(93));