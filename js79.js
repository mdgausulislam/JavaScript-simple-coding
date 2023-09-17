class car{
    constructor(brand){
        this.carName=brand;
    }
    present(){
        return 'I have a '+ this.carName;
    }
}

class Model extends car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present() + ' car and it is model name ' + this.model;
    }
}
let myCar=new Model("Ford","Mustang");
console.log(myCar);
console.log(myCar.show());


class car1{
    constructor(brand){
        this.carName1=brand;
    }
    get carN(){
        return this.carName1;
    }
    set carN(x){
        this.carName1=x;
    }
}
let myCar1=new car1("Ford");
myCar1.carN="Volvo";
console.log(myCar1);