const fruit=["Banana" , "Apple" , "Mango", "Jack Fruits"];
const a1= fruit.sort();
console.log(a1);

const a2=fruit.reverse();
console.log(a2);


const points=[40,400,100,200,300,56,500,52];
points.sort(function(a,b){
    return a-b;
})
console.log(points);


const points1=[40,400,100,200,300,56,500,52];

function myArry(arr){
    return Math.max.apply(null,arr);
}

console.log(myArry(points1));

// const points2=[40,400,100,200,300,56,500,52];

// function myArry(arr){
//     return Math.min.apply(null,arr);
// }

// console.log(myArry(points2));




