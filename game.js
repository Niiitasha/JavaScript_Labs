//Game with DOM:

var start = document.getElementById("start");
var playerName = "Player";

start.onclick = function startGame(){
  document.getElementById("start").style.display = "none";
  var pName = (prompt("Please enter your name:"));
  //document.getElementById("name").textContent = ( pName + ("'s") );
  document.getElementById("you").textContent = ( pName + ("'s") );
  document.getElementById("second_page").style.display = "block";
  document.getElementById("scoring").textContent = "";
  return almightyG.health = 10;
  return player.health = 40;
}

//Attack Button:
var startAttack = document.getElementById("attack");
startAttack.onclick = function startCombat() {
  document.getElementById("pScore").value = ( player.health -= almightyG.generateAttackDamage() );
  document.getElementById("gScore").value = ( almightyG.health -= player.generateAttackDamage() );
  document.getElementById("playerScore").textContent = player.health;
  document.getElementById("grantScore").textContent = almightyG.health;
  document.getElementById("keepUScore").textContent = player.health;
  document.getElementById("keepGScore").textContent = almightyG.health;
  document.getElementById("grantScore").value = almightyG.health;
  document.getElementById("pHealth").value = player.health;
  if (almightyG.health <= 0 && player.health >= 0 && player.wins < 3){
    return almightyG.health = 10;
    player.wins++;
    document.getElementById("wins").value = player.wins;
  } else if (player.health <= 0 && almightyG > 0) {
    document.getElementById("scoring").textContent = "YOU LOSE!";
    document.getElementById("second_page").style.display = "none";
    document.getElementById("start").style.display = "inline-block";
  }
}

//Heal Button:
var healing = document.getElementById("heal");
healing.onclick = function () {
  player.heal();
  player.healCount++;
  if (player.healCount < 3){
  document.getElementById("playerScore").textContent = player.health;
  document.getElementById("keepUScore").textContent = player.health;
  document.getElementById("pHealth").value = ( player.health -= almightyG.generateAttackDamage() );
} else {
  document.getElementById("scoring").textContent = "You ran out of medicine and can no longer heal.";
}
}

//Quit Button:

var quitter = document.getElementById("quit");
  quitter.onclick = function () {
  document.getElementById("second_page").style.display = "none";
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("scoring").textContent = "Winners never quit and quitters never win.";
}

//Player Object:
var player = {
name: "",
health: 40,
wins: 0,
healCount: 0,
generateAttackDamage: function() {
  return Math.floor(Math.random() * 3) + 1},
heal: function(){
  return this.health += Math.floor(Math.random() * 10) + 1;}
};

//AlmightyG Object:
var almightyG = {
name: "The Almighty Grant",
health: 10,
generateAttackDamage: function() { return Math.floor(Math.random() * 5) + 1}
};
