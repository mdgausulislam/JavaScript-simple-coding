function myDisPlayer(some) {
    console.log(some);
}

function myFirst() {
    myDisPlayer("Hello");
}
function second() {
    myDisPlayer("GoodBye");
}
second();
myFirst();

function mDisplay(some) {
    console.log(some);
}

function calculation5(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = calculation5(10, 5);
mDisplay(result);


function myDisplay1(some) {
    console.log(some);
}

function calculation6(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

calculation6(15, 5, myDisplay1);
