const Vowels=["a","e","i","o","u","A","E","I","O","U"];
function countVowels(sentence){
    let count=0;
    const letters=Array.from(sentence);
    letters.forEach(function(value){
        if (Vowels.includes(value)) {
            count++;
        }
    })
    return count;
}
console.log(countVowels("I am Gausul Islam Hemonto"));