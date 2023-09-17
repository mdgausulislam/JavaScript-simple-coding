let num1 = 12;
let num2 = 30;
let hcf = 1;

let min = (num1 < num2) ? num1 : num2;
for (let i = 0; i < min; i++) {
    if (num1 % i == 0 && num1 % i == 0) {
        hcf = i;
    }
}
console.log(`${num1} and ${num2} is hcf: ${hcf}`);