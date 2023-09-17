function person(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.fullName=function(){
        return this.fname +" "+ this.lname;
    }
}

const hemonto=new person("Md Gousul Islam","Hemonto",25);
const hemonto1=new person("Md Gousul","Islam",24);
const hemonto2=new person("Hemonto","Hemonto",23);