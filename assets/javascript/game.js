//Set variables and character specs
var playerCharacter = {hp:0, attack:0, specialattack:0};
var playerEnemy = {hp:0, attack:0, specialattack:0};
var playerHP = 0;
var playerAttack = 0;
var enemyHP = 0;
var enemyAttack = 0;

var playerHPorig = 0;
var playerHPratio = 0;
var enemyHPorig = 0;
var enemyHPratio = 0;

var winCount = 0;

var randNum = 0;

var character0 = {name: "Monkey", hp: 120, attack: 25, specialattack: 150};
var character1 = {name: "Bear", hp: 70, attack: 30, specialattack: 50};
var character2 = {name: "Fox", hp: 200, attack: 15, specialattack: 30};
var character3 = {name: "Dragon", hp: 300, attack: 50, specialattack: 70};

const characterChoices = [character0, character1, character2];

// GAME START FUNCTION ------------------------------------------------------
function gameStart() {
    removeIntro();
    unhideSelectionArea();
    getCharacterSelection();
    // Wait for character selection and play button click
    $(document).ready(function() {
        $("#characterConfirm").click(function() {
        removeSelectionArea();
        });
    });
}; //end gameStart()

// GAME NEXT LEVEL FUNCTION -------------------------------------------------

function nextLevelStart() {

// When next level button is clicked
    $(document).ready(function() {
        $("#nextLevelBtn").click(function() {
            removeNextLevelBtn();
            enemySelect2();
        });
    });
}//end nextLevelStart()

// GAME FINAL LEVEL FUNCTION -------------------------------------------------

function finalLevelStart() {

    // When next level button is clicked
        $(document).ready(function() {
            $("#finalLevelBtn").click(function() {
                hideFinalLevelBtn();
                enemySelectFinal();
            });
        });
    }//end finalLevelStart()


// One of three choices
function getCharacterSelection() {

    // Select Character 0
    $(document).ready(function() {
        $("#characterOption0").click(function() {
            playerCharacter = characterChoices[0];
            playerStatLoad();
            // Based on player selection - randomly generate opponent
            enemySelect();
            // Button color change on selection
                $("#characterOption0").removeClass("btn-primary");        
                $("#characterOption1").removeClass("btn-success");
                $("#characterOption1").addClass("btn-primary");             
                $("#characterOption2").removeClass("btn-success");
                $("#characterOption2").addClass("btn-primary");      
                $("#characterOption0").addClass("btn-success"); 
            //Update selection screen header
            $("#selectionScreenHeader").text(playerCharacter.name + " selected - Hit the play button!");
            unhidecharacterConfirmbtn();
        });
    });

    // Select Character 1
    $(document).ready(function() {
        $("#characterOption1").click(function() {
            playerCharacter = characterChoices[1];
            playerStatLoad();
            // Based on player selection - randomly generate opponent
            enemySelect();
            // Button color change on selection
                $("#characterOption1").removeClass("btn-primary");        
                $("#characterOption0").removeClass("btn-success");
                $("#characterOption0").addClass("btn-primary");             
                $("#characterOption2").removeClass("btn-success");
                $("#characterOption2").addClass("btn-primary");      
                $("#characterOption1").addClass("btn-success"); 
            //Update selection screen header
            $("#selectionScreenHeader").text(playerCharacter.name + " selected - Hit the play button!")
            unhidecharacterConfirmbtn();        
        });
    });

    // Select Character 2
    $(document).ready(function() {
        $("#characterOption2").click(function() {
            playerCharacter = characterChoices[2];
            playerStatLoad();
            // Based on player selection - randomly generate opponent
            enemySelect();
            // Button color change on selection
                $("#characterOption2").removeClass("btn-primary");        
                $("#characterOption0").removeClass("btn-success");
                $("#characterOption0").addClass("btn-primary");             
                $("#characterOption1").removeClass("btn-success");
                $("#characterOption1").addClass("btn-primary");      
                $("#characterOption2").addClass("btn-success"); 
            //Update selection screen header
            $("#selectionScreenHeader").text(playerCharacter.name + " selected - Hit the play button!")
            unhidecharacterConfirmbtn();            
        });
    });

}//end getCharacterSelection

//Alert player to choose a character from characterChoices
function playerStatLoad() {

// Take player's choice, load HP and attack-stats, push to play area
// playerCharacter = characterChoices[0];
    playerHP = playerCharacter.hp;
    playerHPorig = playerCharacter.hp;
    playerAttack = playerCharacter.attack;
    playerSpecialAttack = playerCharacter.specialattack;

    $(document).ready(function() {
        $("#playerSprite").attr("src","./assets/images/" + playerCharacter.name + ".gif");
        $("#playerName").text(playerCharacter.name);
        $("#playerHP").text(playerCharacter.hp);
        $("#playerHPorig").text(playerCharacter.hp);
        $("#playerHPratio").css({"width": 100+"%"});
    });

}// end playerStatLoad()

// Make random selection from remaining character choices and assign as enemy
function enemySelect() {
    // Generate random number
    randNum = Math.round(Math.random() * (characterChoices.length-1));

    // While random pick == player's choice, randomly select again
    while (characterChoices[randNum] == playerCharacter) {
        randNum = Math.round(Math.random()*(characterChoices.length-1));
    }// end while-loop

    // Assign enemy, load HP and attack-stats, push to play area
    playerEnemy = characterChoices[randNum];
    enemyHP = enemyHPorig = playerEnemy.hp;
    enemyAttack = playerEnemy.attack;
    $(document).ready(function() {
        $("#enemySprite").attr("src","./assets/images/" + playerEnemy.name + ".gif");  
        $("#enemyName").text(playerEnemy.name);
        $("#enemyHP").text(playerEnemy.hp);
        $("#enemyHPorig").text(playerEnemy.hp);
        $("#enemyHPratio").css({"width": 100+"%"});
    });
    return;

}// end enemySelect()

// Pick second battle enemy
function enemySelect2() {
    // Generate random number
    randNum = Math.round(Math.random()*(characterChoices.length-1));

    // Pick the character that is not player or previous enemy
    while (characterChoices[randNum] == playerCharacter || characterChoices[randNum] == playerEnemy) {
        randNum = Math.round(Math.random()*(characterChoices.length-1));
    }//end while-loop

    // Assign second enemy, load HP and attack-stats, push to play area
    playerEnemy = characterChoices[randNum];
    enemyHP = enemyHPorig = playerEnemy.hp;
    enemyAttack = playerEnemy.attack;
    $(document).ready(function() {
        $("#enemySprite").attr("src","./assets/images/" + playerEnemy.name + ".gif");  
        $("#enemyName").text(playerEnemy.name);
        $("#enemyHP").text(playerEnemy.hp);
        $("#enemyHPorig").text(playerEnemy.hp);
        $("#enemyHPratio").css({"width": 100+"%"});
        $("#enemyHPratio").removeClass("bg-danger");        
        $("#enemyHPratio").addClass("bg-primary"); 
    });

    unhideEnemySprite();

    return;
}//end enemySelect2

// Pick final battle enemy
function enemySelectFinal() {
    // Assign final enemy, load HP and attack-stats, push to play area
    playerEnemy = character3;
    enemyHP = enemyHPorig = playerEnemy.hp;
    enemyAttack = playerEnemy.attack;
    $(document).ready(function() {
        $("#enemySprite").attr("src","./assets/images/" + playerEnemy.name + ".gif");  
        $("#enemyName").text(playerEnemy.name);
        $("#enemyHP").text(playerEnemy.hp);
        $("#enemyHPorig").text(playerEnemy.hp);
        $("#enemyHPratio").css({"width": 100+"%"});
        $("#enemyHPratio").removeClass("bg-danger");        
        $("#enemyHPratio").addClass("bg-primary"); 
    });

    unhideEnemySprite();

    return;
}//end enemySelect2

// PLAYER ATTACK FUNCTION ---------------------------------------------------------
$(document).ready(function() {
    $("#playerAction").click(
        // Player attack (reduces enemy HP by attack-stats of character and updates enemy HP in DOM)
        function action() {
            enemyAnimation();
            enemyHP = enemyHP - playerAttack;
            enemyHPratio =  enemyHP / enemyHPorig;

             // If to check if enemy has not yet been defeater, enemyHP > 0
            if (enemyHP > 0) {
                // Set HP bar to red if under 30% HP
                if (enemyHPratio < 0.3) {
                    $(document).ready(function() {
                        $("#enemyHPratio").removeClass("bg-primary");        
                        $("#enemyHPratio").addClass("bg-danger"); 
                }); 
                }//end if

                // Update enemy HP stats, game prompt
                $(document).ready(function() {
                    $("#gamePrompt").text("You attacked " + playerEnemy.name + " with " + playerAttack + " damage!");        
                    $("#enemyHP").text(enemyHP);
                    $("#enemyHPratio").css({"width": enemyHPratio*100+"%"});
                });
                // Slight pause then go to enemy attack function
                setTimeout(enemyAction, 3000);
            }//end outer if

            // If enemy has been defeated, update stats, prompts and call nextLevelStart()
            else if (enemyHP <= 0) {
                winCount++;
                $("#gamePrompt").text("You defeated " + playerEnemy.name + "!");        
                $("#enemyHP").text(0);
                $("#enemyHPratio").css({"width": 0+"%"});
                hideEnemySprite();

                // If winCount < 2, move on to next level
                if (winCount < 2) {
                    nextLevelStart();
                    showNextLevelBtn();
                }
                else {
                    finalLevelStart();
                    showFinalLevelBtn();
                }
                // Else, move on to final level

            }//end outer else if

        }// end action()
    )// end action jQuery
});// end document ready function


// ENEMY ATTACK FUNCTION ----------------------------------------------------------
    function enemyAction() {
        // playerAnimation();
        playerHP = playerHP - enemyAttack;
        playerHPratio = playerHP / playerHPorig;
        
        // If to check if game should continue, playerHP > 0
        if (playerHP > 0) {

            // Set HP bar to red if under 30% HP
            if (playerHPratio < 0.3) {
            $(document).ready(function() {
                $("#playerHPratio").removeClass("bg-primary");        
                $("#playerHPratio").addClass("bg-danger"); 
            }); 
            }//end if

            //Update player HP stats, game prompt
            $(document).ready(function() {
                $("#gamePrompt").text(playerEnemy.name + " attacked you with " + enemyAttack + " damage!");   
                $("#playerHP").text(playerHP);
                $("#playerHPratio").css({"width": playerHPratio*100+"%"});
            });    
            
        }//end if

        // Else if player has been defeated by enemy
        else if (playerHP <=0) {
            $(document).ready(function() {
                $("#gamePrompt").text(playerEnemy.name + " defeated you!");   
                $("#playerHP").text(0);
                $("#playerHPratio").css({"width": 0+"%"});
                $("#playerName").text("GAME OVER")
            }); 
            setTimeout(gameOver, 3000);
        }
    }

// PLAYER SPECIAL ATTACK FUNCTION -------------------------------------------------
$(document).ready(function() {
    $("#playerSpecialAction").click(

// Player special attack (reduces enemy HP by special attack-stats of character and updates enemy HP in DOM, then disables special attack button)
function specialAction() {
    removeSpecialAction(); 
    enemyHP = enemyHP - playerSpecialAttack;
    enemyHPratio =  enemyHP / enemyHPorig;

    // Set HP bar to red if under 30% HP
    if (enemyHPratio < 0.3) {
        $(document).ready(function() {
            $("#enemyHPratio").removeClass("bg-primary");        
            $("#enemyHPratio").addClass("bg-danger"); 
    }); 
    }//end if

    //Update enemy HP stats, game prompt
    $(document).ready(function() {
        $("#gamePrompt").text("You used the special attack on " + playerEnemy.name + " and dealt " + playerSpecialAttack + " damage!"); 
        $("#enemyHP").text(enemyHP);
        $("#enemyHPratio").css({"width": enemyHPratio*100+"%"});
    });
    
    // Slight pause then go to enemy attack function
    setTimeout(enemyAction, 3000);    

}// end specialAction()
)// end action jQuery
});// end document ready function


// GAME WIN

function gameWin() {
    removePlayArea();    
}


// GAME OVER

function gameOver() {
    removePlayArea();
}



// HIDE AND REMOVE SECTIONS --------------------------------------------------------------

// Function to remove intro jumbotron
function removeIntro() {
    document.getElementById("introJumbotron").remove();
}

// Function to unhide selection area
function unhideSelectionArea() {
    document.getElementById("selectionArea").style.visibility = "visible";    
}

// Function to unhide characterConfirm button
function unhidecharacterConfirmbtn() {
    document.getElementById("characterConfirm").style.visibility = "visible";
}

// Function to remove selection area
function removeSelectionArea() {
    document.getElementById("selectionArea").remove();  
    unhidePlayArea();  
}

// Function to unhide play area
function unhidePlayArea() {
    document.getElementById("playArea").style.visibility = "visible";
}

// Function to remove special attack button
function removeSpecialAction() {
    document.getElementById("playerSpecialAction").remove();    
}

// Function to hide enemy sprite
function hideEnemySprite() {
    document.getElementById("enemySprite").style.visibility = "hidden";
}

// Function to unhide enemy sprite
function unhideEnemySprite() {
    document.getElementById("enemySprite").style.visibility = "visible";
}

// Function to show next level button
function showNextLevelBtn() {
    document.getElementById("nextLevelBtn").style.visibility = "visible";
}

// Function to hide next level button
function hideNextLevelBtn() {
    document.getElementById("nextLevelBtn").style.visibility = "hidden";
}

// Function to remove next level button
function removeNextLevelBtn() {
    document.getElementById("nextLevelBtn").remove();
}

// Function to show final level button
function showFinalLevelBtn() {
    document.getElementById("finalLevelBtn").style.visibility = "visible";
}

// Function to hide final level button
function hideFinalLevelBtn() {
    document.getElementById("finalLevelBtn").style.visibility = "hidden";
}

// Function to remove final level button
function removeFinalLevelBtn() {
    document.getElementById("finalLevelBtn").remove();
}

// Function to remove play area
function removePlayArea() {
    document.getElementById("playArea").remove();
}


// ANIMATIONS ----------------------------------------------------------------------------
function enemyAnimation() {
    document.getElementById("enemySprite").style.animation = "actionAnimation 1s linear 1";
}

function playerAnimation() {
    document.getElementById("playerSprite").style.animation = "actionAnimation 1s linear 1";
}

// function launchAnimation() {
//     document.getElementById("playArea").style.animation = "launchAnimation 10s ease-in 1";
// }