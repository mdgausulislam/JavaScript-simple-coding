function dec2bin(dec){
    return(dec >>> 0).toString(2);
}
console.log(dec2bin(-5));


    function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
    }
    console.log(bin2dec(101));