function six (){ if (checkpressed === 2   ){
    
  hide();
  if (ooption === "scissor"){
    thatchose.addImage("scissor",scissor_img);
  } else if (ooption === "rock"){
    thatchose.addImage("rock",rock_img);
  } else if (ooption === "paper"){
    thatchose.addImage("paper",paper_img);
  }

  if (option === "scissor"){
    thischose.addImage("scissor",scissor_img);
  } else if (option === "rock"){
    thischose.addImage("rock",rock_img);
  } else if (option === "paper"){
    thischose.addImage("paper",paper_img);
  }



  output.html("Your Opponent Chose :" + ooption); 
  checking();
  end.show();
  introtxt === "";
  

}
}  