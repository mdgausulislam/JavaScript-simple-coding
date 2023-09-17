function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min+1))+min;    
}
console.log(getRandomNumber(1,6));

function getRandomNumber1(min, max) {
    return Math.floor(Math.random() * (max-min))+min;
}
console.log(getRandomNumber1(1,10));


const fruits=["Banana","Apple","Mango","Lemon","Orange","Clemon"];
console.log(fruits.sort());

const points = [40, 100, 1, 5, 25, 10];
console.log(points);
function myFunction(a,b){
    return b-a;
}
console.log(points.sort(myFunction));

function myFunction1(){
    return 0.5 - Math.random();
}
console.log(points.sort(myFunction1));


function myFunction2(arry) {
    return Math.max.apply(null,arry);
}
console.log(myFunction2(points));


function myFunction3(arry) {
    return Math.min.apply(null,arry);
}
console.log(myFunction3(points));