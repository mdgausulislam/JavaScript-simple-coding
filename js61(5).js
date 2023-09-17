const mixedArr={
    a: "lws",
    b: undefined,
    c: "learn with hemo",
    d: false,
    e: " ",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks All",
     k: NaN
 };  

 const truthObject=function(obj){
     for (const i in obj) {
         console.log(i);

         if(!obj[i]){
             delete obj[i];
         }
     }
     return obj;
 }
 console.log(truthObject(obj));