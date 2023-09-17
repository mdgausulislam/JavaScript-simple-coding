// console.log(`line 1 code`);
        // setTimeout((function() {
        //     console.log(`line 2 code`);
            
        // }) , 3000);
        // console.log(`line 3 code`);

        const paymentsuccess=true;
        const marks=80;
        function enroll(callback){
            console.log("The course is enrolled in the process");
            setTimeout((function(){
                if (paymentsuccess) {
                    callback();
                    
                }    else{
                    console.log(`The process payment failed`);
                }
            }) , 2000);

        }

        function progress(callback) {
            console.log(`progress on couese......`); 
            setTimeout(function(){
                if (marks>=80) {
                    callback();
                }else{
                    console.log(`this mark is not enough to get the certificate`);
                }

            },3000);   
        }

        function certificate() {
            console.log(`preparing your certificate`);
            
            setTimeout(() => {
                console.log(`Congrats! you have won the certificate`);
            }, 100);
            
        }
        enroll(function(){
            progress(certificate);
        })