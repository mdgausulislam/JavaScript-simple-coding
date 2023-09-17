function fizzBuzz(numbers) {
    for (let i = 0; i < numbers; i++) {
       if (i%15==0) {
         console.log(`${i} is a fizzbuzz`);
       } else if(i%5==0){
         console.log(`${i} is a fizz`);
       }else if(i%3==0){
         console.log(`${i} is a buzz`);
       }else{
         console.log(`not found`);
       }
      
    }
 }
 fizzBuzz(100);