function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "pic_bulboff.gif"
    } else {
      pic = "pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }