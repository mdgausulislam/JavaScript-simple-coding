function person(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hemo=new person("Md Gousul","Islam",24,"Black");

person.prototype.country="Bangladesh"
console.dir(hemo);