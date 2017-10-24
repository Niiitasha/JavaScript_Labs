//Game:

playGame();

function playGame(){

  var playGame = (prompt("The Almighty Grant challenges you to a game! Do you want to play?"));
  if (playGame === "yes" || playGame === "Yes" || playGame === "YES"){
  var playerName = (prompt("What is your name?"));

 startCombat(playerName);
  } else {
  console.log("BYE THEN");
}
}

//Calculate Damage:

function battleDamage(){
return (Math.floor(Math.random() * 5) + 1);
}

//Start Combat:

function startCombat(playerName){

   var player = 40;
   var almightyG = 10;
   var games = 3;

while (player > 0 && almightyG > 0){
   var choice = (prompt("ATTACK OR QUIT?"));
   if (choice === "quit" || choice === "Quit"){
      console.log("Winners never quit and Quitters never win");
      break;
   } else if(choice === "attack" || choice === "Attack"){
     player -= battleDamage();
     almightyG -= battleDamage();
     console.log("The Almighty Grant's score is " + almightyG);
     console.log(playerName + "'s score is " + player);
   }

   if (almightyG <= 0 && games > 1){
      almightyG = 10;
      games--;
      console.log("NEXT ROUND STARTING:")

  } else if (player === 0 || games < 0){
      console.log("GAME OVER");
  }
  }

    if (player > 0 && almightyG <= 0){
      console.log("You win!");

   } else {
      console.log("You can't beat the Almighty Grant!");
}
}
