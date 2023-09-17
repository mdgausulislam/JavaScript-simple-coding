console.log(Boolean(10>9));

let age=18;

if(age >= 18){
    console.log("true");
}
else{
    console.log("false");
}


age=Number(age);
if (isNaN(age)){
    console.log("Is Not a Input Number");
}
else{
    console.log(age > 18 ? "You are young":"You aaare old");
}