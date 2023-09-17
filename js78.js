class car{
    constructor(name,year){
      this.name=name;
      this.year=year;
    }
    run(){
      console.log(this.name +`is runing. it discoved by`+this.year);
    }
    age() {
const date = new Date();
return date.getFullYear() - this.year;
}
  
  }

  const bmw=new car("BMW",2000);
  console.log(bmw);
  
  const bmw1=new car("Fiat",2000);
  bmw1.run();
  console.log(bmw1);
  console.log(car);
  console.log(bmw.age());