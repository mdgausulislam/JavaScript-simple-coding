const status= false;
    console.log(`Task 1`);

    const promise=new Promise(function (resolve, reject) {
        setTimeout((function() {
            if(status){
                resolve(`task 2`);
            }else{
                reject(`failed`);
            }
           
   }), 2000);    
    });
    console.log(`Task 3`);

    promise
    .then(function(value) {
        console.log(value);
    })
    .catch(function(err) {
        console.log(err);
    })