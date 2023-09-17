const person={
    fname:"Md Gousul Islam",
    lname:"Hemonto",
    age:25,
}
person.fullName=function(){
        return (this.fname +"  "+this.lname).toUpperCase();
    }
console.log(person.fullName());