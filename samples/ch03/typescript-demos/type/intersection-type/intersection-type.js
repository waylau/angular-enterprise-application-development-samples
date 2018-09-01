var ab = { a: 1, b: 1 };
var a = ab; // A & B assignable to A  
var b = ab; // A & B assignable to B
var xy = { p: ab }; // X & Y has property p of type A & B
var f = function (a, b) { };
f("hello", "world"); // Ok  
f(1, 2); // Ok  
f(1, "test"); // Error
