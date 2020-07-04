function four(){
    var nos = playerroomid+"/playerCount"
    var playerCountRef =  database.ref(nos);
    playerCountRef.on("value",(data)=>{
    no_no = data.val();
    })
    if(no_no === ""){
      no_no = "undefined"
    }
    
    fr = fr +1
    
    if (no_no === "undefined"){
      loadingtxt.html("Loading...")
      checkid.hide();
    
    } else {
      checkid.show();
      loadingtxt.html("")
      
    }
  
}