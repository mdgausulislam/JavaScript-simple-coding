function myMove() {
    const x =document.getElementById("animate");
    let pos=0;

    const intervel= setInterval(frame, 5);

    function frame(){
        if(pos<350){
        pos++;
        x.style.top=pos +'px';
        x.style.left=pos +'px';
    }else{
        clearInterval(intervel);
    }

    }
}
myMove();