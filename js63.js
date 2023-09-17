// const person={
        //     fname:"Md Gousul Islam",
        //     lname:"Hemonto" ,
        //     age: 24,
        //     car:{
        //         car1:"Volvo",
        //         car2:"BMW",
        //         car3:"Fiat"
        //     }
        // };
        // let txt= '  ';
        // for (const x in person) {
        //     txt+=person[x];
        // }
        // console.log(person);
        // console.log(txt);

        // console.log(person.car.car3);
        // console.log(person.car["car2"]);

        // console.log(person["car"]["car1"]);


        const person1={
            fname:"Md Gousul Islam",
            lname:"hemonto",
            age:35,
            cars:[
                {name:"Ford" , models:["Fiesta","Mustang","Focus"]},
                {name:"BMW" ,models:["320","x3","x5"]},
                {name:"Fiat",models:["200","Panda"]}
            ]
        };
        let txt1=" ";
        let t=" ";

        for (const i in person1.cars) {
           txt1+=person1.cars[i].name;
           console.log(txt1);

            for (const j in person1.cars[i].models) {
                t+=person1.cars[i].models[j];
              
            }

        }
        console.log(t);