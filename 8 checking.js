function checking() {

    if (option === "paper" && ooption === "scissor"){
      end.html("You Lose :(");
      if (cal === "on"){
      cal = "off";
  }
    } 
    
    if (option === "scissor" && ooption === "paper"){
      end.html("You Win :)");
      if (cal === "on"){
        score+=2;
        cal = "off";
      }
      

    } 


    if (option === "paper" && ooption === "rock"){
      end.html("You Win :)");
      if (cal === "on"){
        score+=2;
        cal = "off";
      }
      

    } 
    
    if (option === "rock" && ooption === "paper"){
      end.html("You Lose :(");
      if (cal === "on"){
      cal = "off";
  }
    } 



    if (option === "scissor" && ooption === "rock"){
      end.html("You Lose :(");
      if (cal === "on"){
      cal = "off";
      }
    } 
        
    if (option === "rock" && ooption === "scissor"){
      end.html("You Win :)");
      if (cal === "on"){
        score+=2;
        cal = "off";
      }
      
    
    } 

      if (option ===  ooption){
      end.html("It's a draw :| ");
      score +=1
      cal = "off";;

    } 

    textStyle(BOLD);
    fill("black");
    textSize(10);
    text("You Have Scored: "+score+" points",1000,10);


 
    
  console.log(score);
}