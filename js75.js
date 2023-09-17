const person={
    firstName:"Md Gousul Islam",
    lastName:"Hemonto",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());

const pers1={
    fullname:function(){
        return this.fName+ " "+ this.lName;
    }
}
const pers2={
    fName:"Hemonto",
    lName:"Hemo"
}
const pers3={
    fName:"Md Gousul Islsm",
    lName:"Hemo"
}
console.log(pers1.fullname.call(pers2));

const pers4={
    fullname:function(city,country){
        return this.fName+ " "+ this.lName + " " + city +" "+country;
    }
}
const pers5={
    fName:"Hemonto",
    lName:"Hemo"
}
const pers6={
    fName:"Md Gousul Islsm",
    lName:"Hemo"
}
console.log(pers4.fullname.call(pers6,"Dhaka","Bangladesh"));