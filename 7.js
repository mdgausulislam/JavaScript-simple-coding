console.log("Hello World");

        let x=153;
        let sum=0;
        let temp=x;
        while (temp>0) {
            let remainder=temp%10;
            sum+= remainder*remainder*remainder;
            temp=parseInt(temp/10);
        }

        if(sum==x){
            console.log(`${x} is the armostrang Number`);
        }else{
            console.log(`${x} is the armostrang Number`);
        }