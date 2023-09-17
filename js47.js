try{
    addalert("Welcome Guest|")
}catch(err){
    console.log(err.message);
}


let x="10";
try{
    if(x==" ") throw "empty";
    if(isNaN(x)) throw "Not a number";
    x=Number(x);
    if(x<5) throw "it is low";
    if(x>6) throw "It is high"
}catch(err){
        console.log(err);
}finally{
    console.log("testing");
}


let a=1;
try{
    a.toPrecision(500);
}catch(err){
    console.log(err.message);
}

    
let x1 = 5;
try {
x1 = y + 1;   // y cannot be used (referenced)
}
catch(err) {
console.log(err.name);
}