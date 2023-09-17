var myVideo= document.getElementById("video1");

function playPause(){
    if(myVideo.paused){
        myVideo.play();
    }
    else{
        myVideo.pause();
    }
}

function makeBig(){
    myVideo.width="1000";
}

function makeSmall(){
    myVideo.width="300";
}

function makeNormal(){
    myVideo.width="400";
}