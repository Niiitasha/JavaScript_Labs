//Game:

var playGame = (prompt("The Almighty Grant challenges you to a game! Do you want to play?"));

if (playGame === "yes" || playGame === "Yes"){
   var playerName = (prompt("What is your name?"));

   //Variables:

   var player = 40;
   var almightyG = 10;
   var games = 3;

   while (player > 0 && almightyG > 0){
   (player -= (Math.floor(Math.random() * 2) + 1));
   (almightyG -= (Math.floor(Math.random() * 2) + 1));
   console.log("The Almighty Grant's score is " + almightyG);
   console.log(playerName + "'s score is " + player);

   if (almightyG <= 0 && games > 1){
    almightyG = 10;
    games--;
    console.log("NEXT ROUND STARTING:")
   }else if (player === 0 || games < 0){
    console.log("GAME OVER");
   }
   }

   if (player > 0 && almightyG === 0){
    console.log("You win!");
   } else {
    console.log("You can't beat the Almighty Grant!");
   }










 }else{
   console.log("BYE THEN.");
 }
