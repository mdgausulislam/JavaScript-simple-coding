const sentence =" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam et laborum eaque rerum aliquid veritatis voluptates quasi doloribus corporis perspiciatis ducimus porro, quis voluptatum autem neque magnam veniam! Quo harum voluptatibus facilis voluptate saepe quis quisquam accusamus earum? Dolor itaque, dolorum iusto odit minima perferendis soluta maiores dignissimos deserunt.";

const matches=sentence.match(/Lorem/gi);
 const occurances=matches?matches.length:0;
console.log(occurances);

let position=sentence.search(/Lorem/i);
 position=position>=0 ? position:"not Found";
console.log(position);