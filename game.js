//  variable declaration 
var arr = ["assets/rock.png" ,"assets/paper.png","assets/scissors.png"];
var sounds = {
  start:{
    sound: new Howl({
      src: ['assets/startgame.mp3']
    })
  } ,
  win:{
    sound: new Howl({
      src: ['assets/wingame.mp3']
    })
  },
  tie:{
    sound: new Howl({
      src: ['assets/tiegame.mp3']
    })
  },
  loss:{
    sound: new Howl({
      src: ['assets/lossgame.mp3']
    })
  }
}
$playerscore=0;
$computerscore=0;
$gamover = 0;
//starting the game 
$("#start").click(function(){
  $(".main-game .start").addClass("click-fade");
  sounds["start"].sound.play();
  setTimeout(hidden,700);
})
// start of user choice button rock
$(".rock").click(function(){
   animationstart();
  $(".buttons button").addClass("disable");
    setTimeout(changerock,1200);
})
//function for user choice rock and computer random
function changerock(){
$x=Math.floor(Math.random()*3);
$(".images img:nth-child(2)").attr("src",arr[$x]);
$(".images img:nth-child(1)").attr("src",arr[0]);
  animationstop();
  winnercheck(0,$x);
  $(".buttons button").removeClass("disable");
}
//end of user choice button rock

//start of user choice button paper
$(".paper").click(function(){
  animationstart();
  $(".buttons button").addClass("disable");
   setTimeout(changepaper,1200);
})
//function for user choice paper and computer random
function changepaper(){
	$y=Math.floor(Math.random()*3);
$(".images img:nth-child(2)").attr("src",arr[$y]);
$(".images img:nth-child(1)").attr("src",arr[1]);
  animationstop();
  winnercheck(1,$y);
  $(".buttons button").removeClass("disable");
}

//start of user choice button scissors
$(".scissors").click(function(){
  animationstart();
  $(".buttons button").addClass("disable");
   setTimeout(changescissor,1200);
})
//function for user choice scissors and computer random
function changescissor(){
	$z=Math.floor(Math.random()*3);
$(".images img:nth-child(2)").attr("src",arr[$z]);
$(".images img:nth-child(1)").attr("src",arr[2]);
  animationstop();
  winnercheck(2,$z);
  $(".buttons button").removeClass("disable");
}
// function  for checking the winner
//passing the indexes of array arr in winnercheck function according to user and computer random choice
function winnercheck($a,$b){
// taking the indexes of array of image and consider them as conditions.
$gamover++;
if($a==$b)
{//if both indexes are same match ties
$(".display-winner h2").text("Match Tie");
sounds["tie"].sound.play();
scorechange();
}
// othewise taking switch case and checking the posibility of user wins in if block and in winning of computer in else block
else
{ $c= $a+$b;
//case of switch according to 0+1=1, 0+2=2,1+2=3 where $a, $b indexes of images in arr accroding to choice.
   switch($c)
   {case 1:{
     if($a===1){
     	$(".display-winner h2").text("Player Wins");
      sounds["win"].sound.play();
      $playerscore++;
     }
     else{
     	$(".display-winner h2").text("Computer Wins");
      sounds["loss"].sound.play();
      $computerscore++;
     }
     scorechange();
     break;
   }
   case 2:{
     if($a===0){
     	$(".display-winner h2").text("Player Wins");
      sounds["win"].sound.play();
      $playerscore++;
     }
     else{
     	$(".display-winner h2").text("Computer Wins");
      sounds["loss"].sound.play();
      $computerscore++;
     }
     scorechange();
     break;
   }
    case 3:{
      if($a===2){
     	$(".display-winner h2").text("Player Wins");
      sounds["win"].sound.play();
      $playerscore++;
     }
     else{
     	$(".display-winner h2").text("Computer Wins");
      sounds["loss"].sound.play();
      $computerscore++;
     }
     scorechange();
     break;
    }
   }

}
if($gamover == 5){
      if ($computerscore > $playerscore){
    $(".pop-box .win-status:nth-child(1)").addClass("out");
    $(".pop-box .win-status:nth-child(3)").addClass("out")
    }else if($computerscore < $playerscore){
     $(".pop-box .win-status:nth-child(2)").addClass("out");
     $(".pop-box .win-status:nth-child(3)").addClass("out");
    }else{
    $(".pop-box .win-status:nth-child(1)").addClass("out");
    $(".pop-box .win-status:nth-child(2)").addClass("out");
    }
    $(".game-finish-popup").addClass("pop");
    $(".pop-box").addClass("down");
        (function(){$(".display-winner").removeClass("click-in");})(); 
}	
}

// function for changing the score of players
function scorechange(){
$("#playerscore").text($playerscore);
$("#computerscore").text($computerscore);
}

//function for adding animation class 
function animationstart(){
$(".images img:nth-child(1)").addClass("click1");
  $(".images img:nth-child(2)").addClass("click2");
}
// end of the function

//function for remove animation class
function animationstop(){
$(".images img:nth-child(1)").removeClass("click1");
  $(".images img:nth-child(2)").removeClass("click2");
}
// end of the function

//function to remove after start the game 
function hidden(){
$(".main-game .start").addClass("out");
setTimeout(function(){$(".display-winner").addClass("click-in");},50);
}
//end of the function