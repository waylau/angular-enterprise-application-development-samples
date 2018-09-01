var x: string | number;  
var test: boolean;  
x = "hello";            // 正确  
x = 42;                 // 正确
x = test;               // 错误！未关联 boolean  
x = test ? 5 : "five";  // Ok  
x = test ? 0 : false;   // Error, number | boolean not assignable