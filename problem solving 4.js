const numbers=[1,2,5,6,1,8,1,6,3,4,5,7,8,9,3];
const duplicate=numbers.filter(function(value, index, array){
    return array.indexOf(value) === index;
});
console.log(duplicate);
