var x;
var test;
x = "hello"; // Ok  
x = 42; // Ok  
x = test; // Error, boolean not assignable  
x = test ? 5 : "five"; // Ok  
x = test ? 0 : false; // Error, number | boolean not assignable
