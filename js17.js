const number = [45,78,89,12,4]
function myfunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("---------------");
}
number.forEach(myfunction);

function myfunction1(value, index, array){
    return value *2;
}

const a2=number.map(myfunction1);
console.log(a2);


function myfunction1(value, index, array){
    return value > 15;
}

const a3=number.filter(myfunction1);
console.log(a3);

  
function myfunction1(total,value, index, array){
    console.log(total);
    console.log("-------");
    return total + value;
}

const a4=number.reduce(myfunction1);
console.log(a4);