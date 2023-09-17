const person={
    employes:[
    {"fname":"hemo", "lname":"Hemo"},
    {"fname":"hemo", "lname":"Hemo"},
    {"fname":"hemo", "lname":"Hemo"},
    {"fname":"hemo", "lname":"Hemo"}

    ]
};
//console.log(employes);
console.log(person);


let  text= '{"employ":[' + 
    '{"faname": "Hemonto", "laname":"Hemo"},'+
    '{"faname": "Hemonto", "laname":"Hemo"},'+
    '{"faname": "Hemonto", "laname":"Hemo"},'+
    '{"faname": "Hemonto", "laname":"Hemo"}]}';

    const obj=JSON.parse(text);
    console.log(obj);
    console.log(text);

    console.log(obj.employ[0].faname);