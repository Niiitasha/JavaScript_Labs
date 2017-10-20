//Variables:

var player = 40;
var almightyG = 10;


//Game:

var playGame = (prompt("The Almighty Grant challenges you to a game! Do you want to play?"));

if (playGame === "yes"){
   var playerName = (prompt("What is your name?"));
 }

while (player > 0 && almightyG > 0){
  (player -= (Math.floor(Math.random() * 2) + 1));
  (almightyG -= (Math.floor(Math.random() * 2) + 1));
  console.log("The Almighty Grant's score is " + almightyG);
  console.log(playerName + "'s score is " + player);

  if (almightyG <= 0 || player <= 0){
    almightyG = 10;
    //counter for # of games??? 
 }

}
