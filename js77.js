let a=4;
        function myfunction() {
           
            return a*a;
            
        }
        console.log(myfunction());

        //let counter=0;
        function add(){
            let counter=0;
            counter+=1;
            return counter;
        }
        add();
        add();
        add();
        console.log(add(4));

        // counter=4;
        // console.log(counter);
      

        function temporary(){
            let counter =0;
            return function(){
                counter+=1;
            }
        }
        const num1=temporary();

        
        console.dir(num1);
        num1();
        console.dir(num1);
        num1();
        console.dir(num1);
        num1();
        console.dir(num1);
        num1();