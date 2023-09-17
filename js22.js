const person={fname:"Md Gousul Islam",lname:"Hemonto",age:24};
for (let x in person) {
        let element = person[x];
        console.log(element);        
    }


    const number=[15,6,9,7,3,65,89,7,655,89,99];
    for (let y in number) {
            const element1 = number[y];
            console.log(element1);
            
        }


        
        const numbers = [45, 4, 9, 16, 25];

            let txt = "";
            numbers.forEach(myFunction);
            console.log(txt);

            function myFunction(value, index, array) {
            txt += value + "<br>"; 
            }
    
