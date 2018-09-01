var x =  1;          // 显式指定类型
let y = 1; 

console.log('x in function before:' + x);
console.log('y in function before:' + y);

{
    var x = 2;
    let y = 2;

    console.log('x in function:' + x);
    console.log('y in function:' + y);
}

console.log('x is:' + x);
console.log('y is:' + y);