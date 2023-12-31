const paymentsuccess=true;
const marks=80;

function enrolled(){
    console.log("course enrolled is in process");

const promise=new Promise(function(resolve,reject){
    setTimeout(function(){

        if(paymentsuccess){
            resolve();
        }else{
            reject("payment failed")
        }

    },2000)
})
return promise;
}

function progress(){
console.log("Course is in Progress......");

const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        if(marks>=80){
            resolve();
        }else{
            reject('This mark is not enough to get the certificate')
        }
    },3000)
})
return promise
}

function getcertificate(){
console.log("Preparing your certificate ");
const promise=new Promise(function(resolve){
    setTimeout(function(){
        resolve("Congrats! You got the certificate");
    },1000)
});
return promise;
}
async function course(){
try{
await enrolled();
await progress();
const message= await getcertificate();
console.log(message);

}catch(err){
        console.log(err);
}
}
course();

// enrolled() .then(progress)
//             .then(getcertificate)
//             .then(function(value){
//                console.log(value);
//            })
//            .catch(function(err){
//                 console.log(err);
//            })
