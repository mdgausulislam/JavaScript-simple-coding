function a(){
    console.log(this);
}
a();

const b={
    c:function(){
        console.log(this);
    }
}
b.c();