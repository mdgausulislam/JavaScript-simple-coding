// const letter=(['a','b','c','d','e'],'d');
function linearsearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===value) {
            return i;
        }
        
    }
    return 'Not found';

}
console.log(linearsearch(['a','b','c','d','e'],'d'));