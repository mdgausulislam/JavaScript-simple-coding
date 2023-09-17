let num=8;
let a=0;
let b=1;
let c;


console.log("Fibonacci Series:");
for (let i = 1; i <=num; i++) {
    console.log(`${num} is a fibonaci series: ${a} `);
    c=a+b;   
    a=b;
    b=c; 
}