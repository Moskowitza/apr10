var inquirer = require("inquirer");
function Player(name, position, offense, defense, goodGame, badGame) {
    this.name = name;//`name`: Property which contains the player's name
    this.position = position;//`position`: Property which holds the player's position
    this.offense = offense;// `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
    this.defense = defense;  //`defense`: Property which is a value between 1 and 10 to show how good this player is on defense
    this.goodGame() = function () {
        // `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
        var coinflip = Math.random();
        if (coinflip == 1) {
            this.offense += 1;
        } else { this.defense += 1 }
    };
    this.badGame() = function () {
        // `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
        var coinflip = Math.random();
        if (coinflip == 1) {
            this.offense += 1;
        } else { this.defense += 1 }
    }
    this.printStats() = function () {// `printStats`: Method which prints all of the player's properties to the screen
        console.log("Name: " + this.name
            + "\nPosition: " + this.position
            + "\noffense: " + this.offense 
            + "\ndefense: " + this.defense);
    };
}


