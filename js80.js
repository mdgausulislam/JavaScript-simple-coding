class car{
    constructor(name){
        this.name=name;
    }
    static hello(x){
        return 'Hello '+ x.name;
    }
}
let myCar=new car("Ford");
console.log(car.hello(myCar));