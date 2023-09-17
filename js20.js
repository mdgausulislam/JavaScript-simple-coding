if (new Date().getHours() > 9 ) {
    console.log("Good Day");
}else{
    console.log("Evening Day");
}



let day;
switch (new Date().getDay()) {
    case 0:
        day="Sunday";
        console.log(day);
        break;
        case 1:
        day="monday";
        console.log(day);
        break;
        case 2:
        day="Tuesday";
        console.log(day);
        break;
        case 3:
        day="Wednesday";
        console.log(day);
        break;
        case 4:
        day="Thursday";
        console.log(day);
        break;
        case 5:
        day="Friday";
        console.log(day);
        break;
        case 6:
        day="Satarday";
        console.log(day);
}