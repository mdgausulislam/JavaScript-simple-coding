const fruits=["Banana" , "Apple" , "Mango", "Jack Fruits"];

       
        console.log(fruits.toString());
        console.log(fruits.join(" * "));
        console.log(fruits.pop());
        let a = fruits.pop();
        console.log(a);
        console.log(fruits);

        fruits.push("Hemonto");
        console.log(fruits);

        let a1= fruits.shift();
        console.log(a1);

        let a2=fruits.unshift("Orange");
        console.log(a2);

        console.log(fruits);

        fruits[0]="Banana";

        console.log(fruits);

        delete fruits[0];
        console.log(fruits);

        fruits.splice(2,0,"Orange","Lemon");
         console.log(fruits);

         const boy=["Hemo","Hh","Hh"];
         const girl=["gg","eff","rtut"];
         console.log(girl.concat(boy));

         const fruit=["Banana" , "Apple" , "Mango", "Jack Fruits"];

       let a25=  fruit.slice(1,3);
         console.log(a25);

         