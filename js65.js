const person={
    fname:"Md GOusul Islam",
    lname: "Hemonto",
    age: function(){return 25},
    today:new Date()
};
person.age=person.age.toString();
const txt=Object.values(person);
document.getElementById("demo").innerHTML=txt;

// const txt1=JSON.stringify(person);
// document.getElementById("demo").innerHTML=txt1;