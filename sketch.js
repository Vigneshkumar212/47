var scissor_b, paper_b, rock_b, play,checkid, playerid, checkpressed = 0
var title1, title, intro, option = "", ooption = "", no_no = "undefined"
var output, loading  = "Loading..." ,fr = 0,end,pos = (600);
var introtxt = "";
var loadingtxt, blah = "yes", roomno , id, s1 ="",s2 = "";
var roomcreate = "true", roomid , backgroundimg, newroom_button;
var playerroomid = 0 , playid, height = 1;
var scissor, paper, rock,blank;
var thischose,thatchose,so ="select";
var hi = "no", waittxt,waittxt2,waittxt3, playagain;
var blank_img,pl,playh;
var score = 0,cal = "on";


function preload(){
  backgroundimg = loadImage("back_ground.png") 
  bg2 = loadImage("back_ground2.png") 
  scissor_img = loadImage("scissor.png");
  paper_img = loadImage("paper.png");
  rock_img = loadImage("rock.png");
  scissor2_img = loadImage("scissor2.png");
  paper2_img = loadImage("paper2.png");
  rock2_img = loadImage("rock2.png");
  blank = loadImage("blank.png")
  blank_img = loadImage("blank.png")
}

function setup(){
  //creating canvas
    canvas = createCanvas(1200, 600);

  // reffering the database  
    database = firebase.database();

  //creating text
    title = createElement('h1');
    title1 = createElement('h1');
    intro = createElement('h3');
    output = createElement('h3');
    end = createElement('h2');
    loadingtxt = createElement('h2');
    loadingtxt.position(580,290)
    waittxt = createElement('h2');
    waittxt2 = createElement('h2');
    waittxt3 = createElement('h2');

    waittxt.position(2000,50);
    waittxt2.position(2000,100);
    waittxt3.position(2000,150)
   
    

  //creating button
    play = createButton('play');
    playagain = createButton('playAgain');


    checkid = createButton('Continue');
    createroom = createButton('RoomID');
    checkid.position(600,520);


    // creating sprites
    
  
  //creating inputs  
    roomid = createInput('');
    
  //to hide things at the start  
    hide();
    intro.hide();
    end.hide();
    play.hide();
    waittxt3.hide();
    waittxt2.hide();
    waittxt.hide();

}


function draw(){
  playagain.hide();
  console.log(option)
  var nos = playerroomid+"/playerCount"
    var playerCountRef =  database.ref(nos);
    playerCountRef.on("value",(data)=>{
    no_no = data.val();
    })

    waittxt3.hide();
    waittxt2.hide();
    waittxt.hide();

    if(hi === "yes"){
      textSize(40);
      waittxt.show();
      waittxt2.show();
      waittxt3.show();

      waittxt.position(550,0);
      waittxt2.position(450,50);
      waittxt3.position(350,100)

      waittxt.html("How To Play:");
      waittxt2.html("Just Click Once On The Option To Select");
      waittxt3.html("You Can't Choose Any Other Options. So, Choose Wisely");
      playagain.hide();
    }

    
   

  var nos = playerroomid+"/playerCount"
    var playerCountRef =  database.ref(nos);
    playerCountRef.on("value",(data)=>{
    no_no = data.val();
    })

    if (playerid === 0){
      playid = 1
    } 
    if (playerid === 1){
      playid = 0
    } 

 
    var plz = playerroomid+"/players/player"+playid+"/option"
    var tRef =  database.ref(plz);
    tRef.on("value",(data)=>{
    ooption = data.val();
    })

  background(0,162,232); 
  //background("white");
  four();
  one();
  two();
  three();
  threepoint();
      

  hide();

  title.show();
  title1.show();
  
  if (no_no === 2){
    position();
    texts_buttons();

    if (blah === "yes"){
      show();  
    }
    

    opts();

    five();
    six();
    drawSprites();
    
    if (so === "no" ||so === "what"){
      playagain.show();
     


      playagain.show();

      var playRef =  database.ref(playerroomid);
      playRef.on("value",(data)=>{
      playag = data.val();
      })

    }



    playagain.position(1100,575)

     
    if (b = "yes"){
      thischose.addImage("blank",blank_img);
      thatchose.addImage("blank",blank_img);
      
    }

    var z = playerroomid + "/play"
    var playhRef =  database.ref(z);
    playhRef.on("value",(data)=>{
    playh = data.val();
    })

    if (playh === "yes"){
      playagain.hide();
      b = "yes"
      so = "select"
      option = "";

      end .html("")
      introtxt = ""
      output.html("")

      

     
  

      var playerno1 = playerroomid+"/players/player"+ playerid
      database.ref(playerno1).update({
        option:option
      });

      database.ref(playerroomid).update({
        play : "no"
      });


    }
     b = "no"
    playagain.mousePressed(()=>{
      cal = "on"   
      database.ref(playerroomid).update({
        check_pressed:0,
        play : "yes"
      });

      
      
    })
    
   
  }
  
}

function mouseClicked(){
  if(mouseX>160&&mouseX<260&&mouseY>100&&mouseY<200&&so === "select"){
    option = "scissor"
    so = "no";

  }

  if(mouseX>160&&mouseX<260&&mouseY>230&&mouseY<330&&so === "select"){
    option = "paper"
    so = "no";
  }

  if(mouseX>160&&mouseX<260&&mouseY>360&&mouseY<460&&so === "select"){
    option = "rock"
    so = "no";
  }

  

}