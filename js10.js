let x=123;
console.log(x.toString());
console.log((123).toString());
console.log((123+56.5).toString());
let y=9.565;

console.log(y.toExponential(2));
console.log(y.toExponential(4));
console.log(y.toExponential(6));

console.log(y.toFixed(2));
console.log(y.toFixed(4));
console.log(y.toFixed(6));

console.log(y.toPrecision(2));
console.log(y.toPrecision(4));
console.log(y.toPrecision(6));

console.log(Number(true));
console.log(Number(false)); 
console.log(Number("10"));
console.log(Number("10.33"));
console.log(Number("Hemonto"));

console.log(Number(new Date("1970-10-10")))

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)