var numbers=[1,2,3,4,5,6,7,8,9,10];

var newNumber=[]
var num1=numbers.reduce((preValue,currentValue)=>{
    return preValue + currentValue;
});
console.log(num1);
console.log(numbers);