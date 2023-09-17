let number = 5;
if (number < 0) {
    console.log("The Number is error");

} else if (number == 1) {
    console.log(`${number} the factorial is 1`);
} else {
    let fact = 1;
    for (let i = 1; i < number + 1; i++) {
        fact *= i;
    }
    console.log(`The factorial ${number} is ${fact}`);
}