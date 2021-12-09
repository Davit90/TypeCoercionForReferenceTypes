"use strict";

var a = {
  valueOf: function () {
    return "hello";
  },
};

var b = {
  valueOf: function () {
    return 3;
  },
};
var c = {
  valueOf: function () {
    return new Number(3);
  },
};
var d = {
  toString: function () {
    return 123;
  },
};
var e = {
  toString: function () {
    return new Number(3);
  },
};

console.log(a.valueOf());
console.log(b.valueOf());
console.log(c.valueOf());
console.log(d.toString());
console.log(e.toString());

console.log(null + undefined); //NaN
console.log(null + true); //1
console.log(null + false); //0
console.log(null + 3); //3
console.log(null + NaN); //NaN
console.log(null + "hello"); //nullhello
console.log(undefined + true); //NaN
console.log(undefined + false); //NaN
console.log(undefined + 5); //NaN
console.log(undefined + NaN); //NaN
console.log(undefined + "hello"); //undefinedhello
console.log(true + false); //1
console.log(true + 2); //3
console.log(true + NaN); //NaN
console.log(true + "hello"); //truehello
console.log(false + 4); //4
console.log(false + NaN); //NaN
console.log(false + "hello"); //falsehello
console.log(5 + NaN); //NaN
console.log(5 + "hello"); //5hello
console.log("hello" + NaN); //helloNaN
