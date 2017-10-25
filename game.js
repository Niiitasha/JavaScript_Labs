//Game:

function playGame(){

  var playGame = (prompt("The Almighty Grant challenges you to a game! Do you want to play?"));
  if (playGame === "yes" || playGame === "Yes" || playGame === "YES"){
  var playerName = (prompt("What is your name?"));
  player.name = playerName;
 startCombat(playerName);
  } else {
  console.log("BYE THEN");
}
}

//Player Object
var player = {
//Properties
name: null,
health: 40,
wins: 0,
healCount: 0,
//Methods
generateAttackDamage: function() {
  return Math.floor(Math.random() * 3) + 1},
heal: function(){
  return this.health += Math.floor(Math.random() * 10) + 1;}
};

//AlmightyG Object
var almightyG = {
//Properties
name: "The Almighty Grant",
health: 10,
generateAttackDamage: function() { return Math.floor(Math.random() * 5) + 1}
};

playGame();

//Start Combat:

function startCombat(playerName){

while (player.health > 0 && almightyG.health > 0 && player.wins < 3){

   var choice = (prompt("ATTACK, HEAL OR QUIT?"));
   if (choice === "quit" || choice === "Quit" || choice === "QUIT"){
      console.log("Winners never quit and quitters NEVER WIN");
      break;

   } else if(choice === "attack" || choice === "Attack" || choice === "ATTACK"){
     player.health -= almightyG.generateAttackDamage();
     almightyG.health -= player.generateAttackDamage();
     console.log("The Almighty Grant's score is " + almightyG.health);
     console.log(player.name + "'s score is " + player.health);

   } else if (choice === "heal" && player.healCount <= 1){
       player.healCount++;
       player.heal();
       console.log(player.name + ", you have healed to a new score of " + player.health);
       player.health -= almightyG.generateAttackDamage();
       almightyG.health -= player.generateAttackDamage();
       console.log("The Almighty Grant's current score is " + almightyG.health);
       console.log(player.name + "'s current score is " + player.health);

  } else if (player.healCount >= 2){
       console.log("You have no more medicine, healing is not an option.")
  }

  if (almightyG.health <= 0 && player.health > 0 && player.wins < 2){
      almightyG.health = 10;
      player.wins++;
      console.log("NEXT ROUND");

  }else if (almightyG.health === 0 && player.wins === 2){
    console.log("Somehow you have beat the Almighty Grant.")
    break;
  }

  if (player.health <= 0 && almightyG > 0){
      console.log("GAME OVER, YOU LOSE!");
      break;
  }
  }
}
