//Set variables and character specs
var playerCharacter = {hp:0, attack:0};
var playerEnemy = {hp:0, attack:0}
var playerHP = 0;
var playerAttack = 0;
var enemyHP = 0;
var enemyAttack = 0;

var randNum = 0;

var character1 = {name: "Monkey", hp: 120, attack: 25, specialattack: 5};
var character2 = {name: "Bear", hp: 70, attack: 30, specialattack: 50};
var character3 = {name: "Fox", hp: 200, attack: 15, specialattack: 30};

const characterChoices = [character1, character2, character3];

// FUNCTION TEST AREA ---------------------------------
function gameStart() {
playerSelect();
enemySelect();
attack();
}; //end gameStart()

//Alert player to choose a character from characterChoices
function playerSelect() {

// Take player's choice, load HP and attack-stats, push to play area
playerCharacter = characterChoices[0];
playerHP = playerCharacter.hp;
playerAttack = playerCharacter.attack;
playerSpecialAttack = playerCharacter.specialattack;

$(document).ready(function() {
    $("#playerName").text(playerCharacter.name);
    $("#playerHP").text(playerCharacter.hp);
});

}// end playerSelect()

// Make random selection from remaining character choices and assign as enemy
function enemySelect() {

    // Pick random character
    randNum = Math.round(Math.random() * (characterChoices.length-1));

    // While random pick == player's choice, randomly select again
    while (characterChoices[randNum] == playerCharacter) {
        randNum = Math.round(Math.random()*(characterChoices.length-1));
    }// end while-loop

    // Assign enemy, load HP and attack-stats, push to play area
    playerEnemy = characterChoices[randNum];
    enemyHP = playerEnemy.hp;
    enemyAttack = playerEnemy.attack;
    $(document).ready(function() {
        $("#enemyName").text(playerEnemy.name);
        $("#enemyHP").text(playerEnemy.hp);
    });
    return;

}// end enemySelect()

// Player attack (reduces enemy HP by attack-stats of character and updates enemy HP in DOM)
function attack() {
    enemyHP = enemyHP - playerAttack;
    $(document).ready(function() {
        $("#enemyHP").text(enemyHP);
    });
}// end attack()

// Player special attack (reduces enemy HP by special attack-stats of character and updates enemy HP in DOM, then disables special attack button)
function specialAttack() {
    enemyHP = enemyHP - playerSpecialAttack;
    $(document).ready(function() {
        $("#enemyHP").text(enemyHP);
    });
}// end attack()

// Enemy attack
function enemyAttack() {
    playerHP = playerHP - enemyAttack;
    $(document).ready(function() {
        $("#playerHP").text(playerHP);
    });    
}


// DOM triggers

// on click attack button attack()

// CONSOLE LOG AREA -----------------------------------
console.log(characterChoices);
console.log("playerCharacter:");
console.log(playerCharacter);
console.log("Character choices length:")
console.log((characterChoices.length));
console.log("randNum:")
console.log(randNum);
console.log("playerEnemy:")
console.log(playerEnemy.name);
console.log("playerCharacter.hp:")
console.log(playerCharacter.hp);