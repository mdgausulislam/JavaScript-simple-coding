class car{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    paly(){
        console.log(`${this.name} is palying`);
    }
}

const car1=new car("Toyata",2017);
const car2=new car("BMW",2018);
const car3=new car("Micro",2019);
const car4=new car("Discover",2017);

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

car1.paly();