function one(){
  if(roomcreate === "true"){
    play.position(pos,510);
    pos = 10;
    textSize(45);
    fill("yellow");
    textStyle(BOLD);
    text("Hi Player. Welcome To The International RPS Game.",30,50);
    //textStyle(NORMAL);
    textSize(20);
    fill("red");
    text("To Play RPS With Your Friend Pls Enter The Room ID And Click Continue",310,490);
    roomid.position (310,520);
    createroom.position(1020,565);
    textSize(15);
    text("If you don't have a room then create one here ",680,580);
  }
}