const status=true;
    console.log("Task 1");
        //Promise Defination
        const promise=new Promise(function(resolve,reject){

            setTimeout(function(){
                if(status){
                    resolve("task 2 ")
                }else{
                    reject("failed")
                }
            },2000)
        });
        //Promise Call
        promise .then(function(value){
            console.log(value);
        })
        .catch(function(err){
            console.log(err);
        })
         
    
   
    console.log("Task 3");