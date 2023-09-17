const numbers=[1,2,3,4,5,6,7,8,9];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}

for (const n of numbers) {
    console.log(n);
    
}



const num1={
one:1,
two:2,
three:3
};
console.dir(num1);

const num2=[1,2,3,4];
const numIterator=(num2[Symbol.iterator]());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());