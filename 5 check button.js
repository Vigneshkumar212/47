function five(){
    var d = playerroomid+"/check_pressed"
    var checkpresseds =  database.ref(d);
    checkpresseds.on("value",(data)=>{
      checkpressed = data.val();
    })
  
    
    if(so === "no"){
      hide();
      
     
    
      if (option === "rock"||option === "scissor" || option === "paper"){
        
        checkpressed+=1;

    
        database.ref(playerroomid).update({
          check_pressed : checkpressed
        });
      
        
        var playerno = playerroomid+"/players/player"+ playerid
        database.ref(playerno).update({
          option:option,  
        });
  
        
        introtxt = "You have chosen : "+ option
        
        
      } else {
          introtxt = "You Haven't Chosen Any Of The Options Above. Pls reload this page."
          show();
      }
      so = "what"
    }
}