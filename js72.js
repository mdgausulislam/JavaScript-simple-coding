function myfunction(a,b){
    return a*b;
}
console.log(myfunction(10,6));

const a=  function(a,b){
    return a*b;
}
console.log(a(10,6));
//self invoking person
(function b(c,d){
    console.log(c*d);
})(10,6)