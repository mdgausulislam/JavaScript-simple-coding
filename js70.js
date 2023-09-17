const letters=new Set(["a","b","c","d"]);
        console.dir(letters);
        letters.add("e");
        console.log(letters);

        let txt=" ";
        letters.forEach(function(Value){
            txt+=Value;
        });
        console.log(letters);
        console.log(letters.values());
        console.log(letters instanceof Set);