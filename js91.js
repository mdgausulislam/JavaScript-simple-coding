// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     document.getElementById("demo").innerHTML=x;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

function myFunction(){
  let x=document.getElementById("num").value;
  let text;
  if(isNaN(x) || x<1 || x>10){
    text= "not valid Okay";
  }else{
    text="Valid okay";
  }

  document.getElementById("demo").innerHTML=text;
}