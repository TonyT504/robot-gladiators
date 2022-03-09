var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// //You can also multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
  // fight function statements
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " Attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " health remaining. ");

    //check enemy's health
    if (enemyHealth <=0) {
      window.alert (enemyNames + " has died! ");
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    // remove players health by subtracting the amount set in the enemyAttack variable

    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerName + " ." + playerName + " now has " + playerHealth + " health remaining. "
    );

    // check player's health 
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // is no (false), ask question again by running fight() again
  else {
    fight();
  }
  // if player did not chose 1 or 2 in prompt
} else {
  window.alert("You need to pick a valid option. Try again!");
}

    
};
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}