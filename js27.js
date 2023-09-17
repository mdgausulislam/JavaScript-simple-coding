// const letters= new Set();
        // letters.add("A");
        // letters.add("B");
        // letters.add("C");
        // letters.add("D");
        
        // console.log(letters.size);


        const letter= new Set(["A","B","C","D"]);
        let rxt="";
        letter.forEach(function (value) {

            rxt += value + "<br>";
            
        })
        console.log(rxt);


        let txt="'";

        for (const i of letter.values()) {
            txt+=i;
        }
        console.log(txt);