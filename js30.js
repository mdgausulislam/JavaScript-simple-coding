const fruits = new Map([
    ["apple",500],

    ["Banana",300],

    ["orange",200]
]);
console.log(fruits);

console.log(fruits.get("orange"));

console.log(fruits.size);

console.log(fruits.delete("apple"));

console.log(fruits);

console.log(fruits.has("apple"));

let txt=" ";
fruits.forEach(function(value, key){
    txt += key + " =" + value; 
});
console.log(txt);


let txt1=" ";
for (const i of fruits.entries()) {
    txt1 +=i;
    
};
console.log(txt1);
