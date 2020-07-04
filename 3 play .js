var p,r,s,o;
var scoretxt;
function threepoint(){
  p = createElement('h3')
  r = createElement('h3')
  s = createElement('h3')
  o = createElement('h2')
  scoretxt = createElement('h3');
  s.position(180,60)
  p.position(180,190)
  r.position(180,310)
  o.position(160,20)
  scoretxt.position(1000,10);
  scissor = createSprite(205,150,1,1);
  paper = createSprite(205,280,1,1);
  rock = createSprite(205,400,1,1);
  thischose = createSprite(400,300,1,1);
  thatchose = createSprite(1000,300,1,1);
  drawSprites();
  

  
  checkid.mousePressed(()=>{
    hi = "no"
    play.show()
    play.position(600,300)
    checkid.hide();
    checkid.position(2000,200)
    
    roomid.hide();
    createroom.hide();
    checkid.hide();
    roomcreate = "false"
    playerroomid = "rooms/"+roomid.value();
          
        show();
        hi = "yes";
    
    var playerno = playerroomid+"/playezs/player"+ no_no
    database.ref(playerno).set({
      option:"ok"
    });
  checkid.position(100,-10);
  checkid.size(0,0);
  })
}








function three(){
    play.mousePressed(()=>{
      p.html("Paper");
    r.html("Rock");
    s.html("Scissor")
    o.html("|Options|")
    textStyle(BOLD);
      backgroundimg = (0,162,232)
      hi = "no"
      
      if (checkpressed<2){
        
      paper.addImage("paper",paper_img);
      rock.addImage("rock",rock_img);
      scissor.addImage("scissor",scissor_img);
      }
        play.hide();
        roomid.hide();
        createroom.hide();
        playerroomid = "rooms/"+roomid.value();
          
        show();
        pos = 2000;
    
          var playerno = playerroomid+"/players/player"+ no_no
          database.ref(playerno).set({
            option:"ok"
          });
    

    
        
         
        playerid = no_no;
        no_no += 1;
          
    
        database.ref(playerroomid).update({
          playerCount : no_no
        });
      
      })
}