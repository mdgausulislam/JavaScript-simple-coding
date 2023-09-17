function longestString(names) {
    let longestString=" ";

    for (const name of names) {
        if (name.length >longestString.length) {
           longestString=name; 
        }   
    }
    return [longestString,names.indexOf(longestString)];
}
console.log(longestString(["Md Gousul","Md gousul islam","coding erfje","hghghghg"]));