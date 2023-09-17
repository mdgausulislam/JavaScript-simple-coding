const paymentsuccess=true;
const marks=80;
function enroll() {
    console.log("course enrolled in the process");
const promise = new Promise(function(resolve, reject) {
    setTimeout((function() {
        if (paymentsuccess) {
            resolve();
        }else{
            reject("payment failed")
    }
        
    }), 2000);
});
return promise;
}

function progress() {
console.log("Course on progress...");

const promise=new Promise(function(resolve,reject) {
    setTimeout((function() {

        if (marks>=80) {
            resolve();
        }else{
            reject("You have failed this got the certificate")
        }
        
    }), 3000);
    
})
return promise;   
}

function certificate() {
    console.log("preparing Your certificate");

    const promise=new Promise(function (resolve) {
        setTimeout(() => {
            resolve("You have got the certificate")
        }, 1000);
        
    });

    return promise;
}

enroll()
.then(progress)
.then(certificate)
.then(function(value) {
    console.log(value);
})
.catch(function(err) {
    console.log(err);
})