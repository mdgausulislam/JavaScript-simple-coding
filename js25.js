let text=" ";
for (let i =0; i<10; i++) {

    if (i===3) {
       break; 
    }
    text += "The number of :"+ i + "<br>";    
}
console.log(text);


let text1=" ";
for (let i =0; i<10; i++) {

    if (i===3) {
       continue; 
    }
    text1 += "The number of :"+ i + "<br>";    
}
console.log(text1);


let txt="";
const cars=["Volvo","BMW","Saab","Ford"];
list:{
    txt += cars[0];
    txt += cars[1];
    break list;
    txt += cars[2];
    txt += cars[3];
}
console.log(txt);
