 // const person={
        //     fname:"Md Gousul Islam",
        //     lname:"Hemonto",
        //     language:"en",
        //     get lang(){
        //         return this.language;
        //     }
        // };

        // console.log(person.lang);


        const person={
            fname:"Md Gousul Islam",
            lname:"Hemonto",
            language:"",
            set lang(lang){
                this.language=lang;
            }
        };

        person.lang="en";
        console.log(person.language);