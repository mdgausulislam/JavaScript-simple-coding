let text= "Md Gousul Islam Hemonto";
        let n=text.search("Islam");
        console.log(n);

        let n1= text.search(/islam/i);
        console.log(n1);

        let n2=text.replace("Islam","ISLAM");
        console.log(n2);

        let n3=text.replace(/islam/i,"ISLAM");
        console.log(n3);

        let txt="I am Hemonto hemonto hemonto Hemonto";
        let n4=txt.replace(/hemonto/ig, "Hemo");
        console.log(n4);

        let n5=txt.match(/[h]/g);
        console.log(n5);

        let a="1234587123654";
        let n6 =a.match(/[1-5]/g);
        console.log(n6);

        let n7=txt.match(/(Hemonto|hemonto)/g);
        console.log(n7);

        let text1="GIVEW 1000%";
        let a1=text1.match(/\d/g);
        console.log(a1);

        let a2=text1.match(/\s/g);
        console.log(a2);
        let a3=text1.match(/\u0057/g);
        console.log(a3);
