let s="Banana, Mango,Jack Fruit"
        let part=s.slice(8, 13);
        let part1=s.slice(-24,-18);
        console.log(part);
        console.log(part1);
        console.log(s.length)

        let part2=s.substr(7,6);

        console.log(part2)

        let part3=s.replace("Jack Fruit","Apple")
        console.log(part3)

        let part4=s.toUpperCase();
        console.log(part4)

        let part5=s.toLowerCase();
        console.log(part5)

        let text = "I love cats. Cats are very easy to love. Cats are very popular";
        text = text.replaceAll(/Cats/g,"Dogs");
        text = text.replaceAll(/cats/g,"dogs");
        console.log(text)