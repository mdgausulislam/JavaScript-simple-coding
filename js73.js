function myFunction(x,y=2) {
    return x*y;
    
}
console.log(myFunction(5));

let x=findMax(54,78,589,888,88,878,99,1,5)
function findMax() {
    let max=-Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max=arguments[i]
        }  
    }
    return max;   
}
console.log(x);


let y=findSum(10,20,30,40,50,60,70);

function findSum(){
let Sum=0;
for (let i=0; i< arguments.length;i++) {
    Sum+=arguments[i];  
}
return Sum;
}
console.log(y);