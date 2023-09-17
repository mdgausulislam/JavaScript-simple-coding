const mixedArr=[
    "lws",
    undefined,
    "learn with hemo",
    false,
    " ",
    "apple",
    40,
    "k",
    true,
    "Thanks All",
    NaN
];

const trueArray=mixedArr.filter(function(el){
    if (el) {
        return true;
    }else{
        return false;
    }
});
console.log(mixedArr);
console.log(trueArray);

const trueArray1=mixedArr.filter(Boolean);
console.log(trueArray1);