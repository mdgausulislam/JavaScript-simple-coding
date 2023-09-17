const paymentsuccess = true;
const marks = 85;
function enroll(callback) {
    console.log("Course enrolled is in process");
    setTimeout(function () {
        if (paymentsuccess) {
            callback();
        } else {
            console.log("Payment failed");
        }

    }, 2000)
}

function progress(callback) {
    console.log("Course on the progress....");
    setTimeout(function () {
        if (marks >= 80) {
            callback();
        } else {
            console.log("You could not enough marks to get the certificate");
        }
    }, 3000)
}

function getCertificate() {
    console.log("Preparing your certificte");

    setTimeout(function () {
        console.log("Congrats! You got the certificate");
    }, 1000)

}

enroll(function () {
    progress(getCertificate)
})