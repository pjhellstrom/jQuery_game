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

var clickDisabled = false;

var character0 = {name: "Monkey", hp: 80, attack: 50, specialattack: 150};
var character1 = {name: "Bear", hp: 150, attack: 45, specialattack: 60};
var character2 = {name: "Fox", hp: 130, attack: 20, specialattack: 150};
var character3 = {name: "Giraffe", hp: 200, attack: 10, specialattack: 70};

const characterChoices = [character0, character1, character2];

// GAME START FUNCTION ------------------------------------------------------
function gameStart() {
    hideStartScreen();
    showMainGameArea();
    showSelectionArea();
    getCharacterSelection();
    // Wait for character selection and play button click
    $(document).ready(function() {
        $("#characterConfirm").click(function() {
        hideSelectionArea();
        });
    });
}; //end gameStart()

// GAME NEXT LEVEL FUNCTION -------------------------------------------------

function nextLevelStart() {

// When next level button is clicked
    $(document).ready(function() {
        $("#nextLevelBtn").click(function() {
            hideNextLevelBtn();
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


// GAME RESTART FUNCTION ----------------------------------------------------
$(document).ready(function() {

    $("#restartButton").click(resetGameStat);
    $("#restartButton").click(showMainGameArea);
    $("#restartButton").click(hidePlayArea);
    $("#restartButton").click(showSelectionArea);
    $("#restartButton").click(showEnemySprite);
    $("#restartButton").click(hideEndScreen);
    $("#restartButton").click(hidecharacterConfirmbtn);
    $("#restartButton").click(hideNextLevelBtn);
    $("#restartButton").click(hideFinalLevelBtn);
    $("#restartButton").click(showSpecialAction);

    $("#restartButton").click(function() {$("#playerHPratio").removeClass("bg-danger")});        
    $("#restartButton").click(function() {$("#playerHPratio").addClass("bg-primary")});
    $("#restartButton").click(function() {$("#enemyHPratio").removeClass("bg-danger")});        
    $("#restartButton").click(function() {$("#enemyHPratio").addClass("bg-primary")});
    $("#restartButton").click(function() {$("#charSel0").removeClass("selectBorder")});        
    $("#restartButton").click(function() {$("#charSel1").removeClass("selectBorder")});        
    $("#restartButton").click(function() {$("#charSel2").removeClass("selectBorder")});
    $("#restartButton").click(function() {$("#selectionScreenHeader").text("Select Player")});
    $("#restartButton").click(function() {$(".characterButton").removeClass("btn-primary")});
    $("#restartButton").click(function() {$(".characterButton").addClass("btn-outline-primary")});
    $("#restartButton").click(function() {$("#enemySprite").removeClass("bossSpriteFormat")}); 
    $("#restartButton").click(function() {$("#enemySprite").addClass("spriteFormat")});
    
});

// RESET GAME START ---------------------------------------------------------
function resetGameStat() {
    playerCharacter = {hp:0, attack:0, specialattack:0};
    playerEnemy = characterChoices[randNum];
    playerHP = 0;
    playerAttack = 0;
    enemyHP = 0;
    enemyAttack = 0;

    playerHPorig = 0;
    playerHPratio = 0;
    enemyHPorig = 0;
    enemyHPratio = 0;

    winCount = 0;

    randNum = 0;

    clickDisabled = false;
}

// CHARACTER SELECTION -------------------------------------------------------
function getCharacterSelection() {

    // Select Character 0
    $(document).ready(function() {
        $("#characterOption0").click(function() {
            playerCharacter = characterChoices[0];
            playerStatLoad();
            // Based on player selection - randomly generate opponent
            enemySelect();
            // Button color change on selection
                $("#characterOption0").removeClass("btn-outline-primary");        
                $("#characterOption1").removeClass("btn-primary");
                $("#characterOption1").addClass("btn-outline-primary");             
                $("#characterOption2").removeClass("btn-primary");
                $("#characterOption2").addClass("btn-outline-primary");      
                $("#characterOption0").addClass("btn-primary");
                $("#charSel1").removeClass("selectBorder");
                $("#charSel2").removeClass("selectBorder");
                $("#charSel0").removeClass("selectBorderNone");                  
                $("#charSel1").addClass("selectBorderNone");
                $("#charSel2").addClass("selectBorderNone");
                $("#charSel0").addClass("selectBorder");        
                         
            //Update selection screen header
            $("#selectionScreenHeader").text(playerCharacter.name + " selected - Hit the play button!");
            showcharacterConfirmbtn();
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
                $("#characterOption1").removeClass("btn-outline-primary");        
                $("#characterOption0").removeClass("btn-primary");
                $("#characterOption0").addClass("btn-outline-primary");             
                $("#characterOption2").removeClass("btn-primary");
                $("#characterOption2").addClass("btn-outline-primary");      
                $("#characterOption1").addClass("btn-primary"); 
                $("#charSel0").removeClass("selectBorder");
                $("#charSel2").removeClass("selectBorder");
                $("#charSel1").removeClass("selectBorderNone");                  
                $("#charSel0").addClass("selectBorderNone");
                $("#charSel2").addClass("selectBorderNone");
                $("#charSel1").addClass("selectBorder");     
            //Update selection screen header
            $("#selectionScreenHeader").text(playerCharacter.name + " selected - Hit the play button!");
            $("#selectionScreenHeader").addClass("selectionConfirm");
            showcharacterConfirmbtn();        
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
                $("#characterOption2").removeClass("btn-outline-primary");        
                $("#characterOption0").removeClass("btn-primary");
                $("#characterOption0").addClass("btn-outline-primary");             
                $("#characterOption1").removeClass("btn-primary");
                $("#characterOption1").addClass("btn-outline-primary");      
                $("#characterOption2").addClass("btn-primary"); 
                $("#charSel0").removeClass("selectBorder");
                $("#charSel1").removeClass("selectBorder");
                $("#charSel2").removeClass("selectBorderNone");                  
                $("#charSel0").addClass("selectBorderNone");
                $("#charSel1").addClass("selectBorderNone");
                $("#charSel2").addClass("selectBorder");   
            //Update selection screen header
            $("#selectionScreenHeader").text(playerCharacter.name + " selected - Hit the play button!")
            showcharacterConfirmbtn();            
        });
    });

}//end getCharacterSelection

//Alert player to choose a character from characterChoices
function playerStatLoad() {

// Take player's choice, load HP and attack-stats, push to play area
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
    playerEnemy = firstEnemy = characterChoices[randNum];
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
    while (characterChoices[randNum] == playerCharacter || characterChoices[randNum] == firstEnemy) {
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

    showEnemySprite();

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
        $("#enemySprite").removeClass("spriteFormat");        
        $("#enemySprite").addClass("bossSpriteFormat");           
        $("#enemyName").text(playerEnemy.name);
        $("#enemyHP").text(playerEnemy.hp);
        $("#enemyHPorig").text(playerEnemy.hp);
        $("#enemyHPratio").css({"width": 100+"%"});
        $("#enemyHPratio").removeClass("bg-danger");        
        $("#enemyHPratio").addClass("bg-primary");
        $("#enemyHPratio").removeClass("bg-danger");        
        $("#enemyHPratio").addClass("bg-primary");  
    });

    showEnemySprite();

    return;
}//end enemySelect2

// PLAYER ATTACK FUNCTION -----------------------------------------------------------
$(document).ready(function() {
    $("#playerAction").click(
        // Player attack (reduces enemy HP by attack-stats of character and updates enemy HP in DOM)
        function action() {
            // Freeze click for short moment
            clickFreeze();
            setTimeout(clickUnfreeze, 2500);
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

                // Update enemy HP stats, game prompt, show HP animation
                $(document).ready(function() {
                    $("#enemyHP").text(enemyHP);
                    $("#enemyHPratio").css({"width": enemyHPratio*100+"%"});
                    $("#hpDisplayEnemy").text("-" + playerAttack + "HP");
                    $("#hpDisplayEnemy").addClass("hpAnimation");
                    setTimeout(function() {                        
                        $("#hpDisplayEnemy").removeClass("hpAnimation")}, 1200);
                });
                // Slight pause then go to enemy attack function
                setTimeout(enemyAction, 1500);
            }//end outer if

            // If enemy has been defeated, update stats, prompts and call nextLevelStart()
            else if (enemyHP <= 0) {
                winCount++;
                $("#gamePrompt").text("You defeated " + playerEnemy.name + "!");        
                $("#enemyHP").text(0);
                $("#enemyHPratio").css({"width": 0+"%"});
                hideEnemySprite();

                // If winCount > 2, run gameWin()
                if (winCount > 2) {
                    setTimeout(gameWin, 2500);
                }
                else {
                    // If winCount < 2, move on to next level
                    if (winCount < 2) {
                        nextLevelStart();
                        showNextLevelBtn();
                    }
                    // Else, move on to final level
                    else {
                        finalLevelStart();
                        showFinalLevelBtn();
                    }
                }//end else
            }//end outer else if

        }// end action()
    )// end action jQuery
});// end document ready function

// PLAYER SPECIAL ATTACK FUNCTION -----------------------------------------------------
$(document).ready(function() {
    $("#playerSpecialAction").click(

        // Player special attack (reduces enemy HP by special attack-stats of character and updates enemy HP in DOM, then disables special attack button)
        function specialAction() {
            // Freeze click for short moment
            clickFreeze();
            setTimeout(clickUnfreeze, 2500);
            // Hide button (sp attack only available once)
            hideSpecialAction(); 
            enemyHP = enemyHP - playerSpecialAttack;
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

                //Update enemy HP stats, game prompt
                $(document).ready(function() {
                    $("#enemyHP").text(enemyHP);
                    $("#enemyHPratio").css({"width": enemyHPratio*100+"%"});
                    $("#hpDisplayEnemy").text("-" + playerSpecialAttack + "HP");
                    $("#hpDisplayEnemy").addClass("hpAnimation");
                    setTimeout(function() {                        
                        $("#hpDisplayEnemy").removeClass("hpAnimation")}, 1200);
                });
                
                // Slight pause then go to enemy attack function
                setTimeout(enemyAction, 1500);    
            }//end outer if

            // If enemy has been defeated, update stats, prompts and call nextLevelStart()
            else if (enemyHP <= 0) {
                winCount++;
                $("#gamePrompt").text("You defeated " + playerEnemy.name + "!");        
                $("#enemyHP").text(0);
                $("#enemyHPratio").css({"width": 0+"%"});
                hideEnemySprite();

                // If winCount > 2, run gameWin()
                if (winCount > 2) {
                    setTimeout(gameWin, 2500);
                }
                else {
                    // If winCount < 2, move on to next level
                    if (winCount < 2) {
                        nextLevelStart();
                        showNextLevelBtn();
                    }
                    // Else, move on to final level
                    else {
                        finalLevelStart();
                        showFinalLevelBtn();
                    }
                }//end else
            }//end outer else if
            
        }// end specialAction()
    )// end action jQuery
});// end document ready function

// ENEMY ATTACK FUNCTION ----------------------------------------------------------------
function enemyAction() {

    // playerAnimation();
    playerHP = playerHP - enemyAttack;
    playerHPratio = playerHP / playerHPorig;
    $("#playerName").text(playerEnemy.name + " is attacking!");
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
            $("#playerHP").text(playerHP);
            $("#playerHPratio").css({"width": playerHPratio*100+"%"});
            $("#hpDisplayPlayer").text("-" + enemyAttack + "HP");
            $("#hpDisplayPlayer").addClass("hpAnimation");
            setTimeout(function() {                        
                $("#hpDisplayPlayer").removeClass("hpAnimation")}, 1200);
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
        setTimeout(gameLose, 2500);
    }
}

// GAME WIN ------------------------------------------------------------------------------

function gameWin() {
    hideMainGameArea();
    loadWinScreen();
    showEndScreen();    
}

// GAME OVER -----------------------------------------------------------------------------

function gameLose() {
    hideMainGameArea();
    loadLoseScreen();
    showEndScreen();
}

// LOAD END SCREEN ITEMS -----------------------------------------------------------------

function loadWinScreen() {
    $("#endHeader").text(playerCharacter.name + " wins!")
    $("#endSprite").attr("src","./assets/images/" + playerCharacter.name + ".gif");  
    $("#endSpin").attr("src","./assets/images/spin_win.png");
}

function loadLoseScreen() {
    $("#endHeader").text("Sorry, try again!")
    $("#endSprite").attr("src","./assets/images/" + playerCharacter.name + ".gif");
    $("#endSpin").attr("src","./assets/images/spin_lose.png");
}

// CLICK DISABLE FUNCTION ---------------------------------------------------------------

function clickFreeze() {
    $(".clickable").css("pointer-events", "none");
}//end clickFreeze()

function clickUnfreeze() {
    $(".clickable").css("pointer-events", "auto");
    $("#playerName").text(playerCharacter.name);
}//end clickUnfreeze()


// HIDE AND REMOVE SECTIONS --------------------------------------------------------------

function hideStartScreen() {
    $("#startScreen").hide();
}

function showStartScreen() {
    $("#startScreen").show();
}

function showEndScreen() {
    $("#endScreen").show();
}

function hideEndScreen() {
    $("#endScreen").hide();
}

function showMainGameArea() {
    $("#mainGameArea").show();
}

function hideMainGameArea() {
    $("#mainGameArea").hide();
}


function showSelectionArea() {
    $("#selectionArea").show();
}

function hideSelectionArea() {
    $("#selectionArea").hide();
    showPlayArea();  
}

function showPlayArea() {
    $("#playArea").show();
}

function hidePlayArea() {
    $("#playArea").hide();
}

function showSpecialAction() {
    $("#playerSpecialAction").show();    
}

function hideSpecialAction() {
    $("#playerSpecialAction").hide();    
}

function showcharacterConfirmbtn() {
    $("#characterConfirm").show();
}

function hidecharacterConfirmbtn() {
    $("#characterConfirm").hide();
}

function hideEnemySprite() {
    $("#enemySprite").hide();
}

function showEnemySprite() {
    $("#enemySprite").show();
}

function showNextLevelBtn() {
    $("#nextLevelBtn").show();
}

function hideNextLevelBtn() {
    $("#nextLevelBtn").hide();
}

function showFinalLevelBtn() {
    $("#finalLevelBtn").show();
}

function hideFinalLevelBtn() {
    $("#finalLevelBtn").hide();
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

function attackAnimation() {

}