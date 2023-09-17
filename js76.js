const person={
    fullName:function(city,country){
    return this.firstName+" "+ this.lastName+" "+ city+" "+ country;
}}
const person1={
    firstName:"Md GOusul Islam",
    lastName:"Hemonto"
}
console.log(person.fullName.apply(person1,["Dhaka","Bangladesh"]));

console.log(Math.max(1,2,3));
console.log(Math.max.apply(null,[1,2,5,78,8,89,56]));
