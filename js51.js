const person={
    fname: "Md Gousul Islam",
    lname:"Hemonto",
    age:24,
    fullname: function(){
        return this.fname + " " + this.lname;
    }
};
console.log(person.fullname());

const person1={
    fullname1:function() {
        return this.firstname + " " + this.lastname;
    }
}

const person2={
    firstname:"Md Gousul islam",
    lastname:"Hemonto"
};
console.log(person1.fullname1.call(person2));