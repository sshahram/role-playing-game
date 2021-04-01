const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');
function Game() {
    this.roundNumber = 0;
    this.PlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    // when the game starts the current enemy will be the first enemy in the array of enemies
    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // destructure name from the prompt object
        .then(({name}) => {
            this.player = new Player(name);

            // start a new round
            this.startNewBattle();
        });
};

Game.prototype.startNewBattle = function() {
    // deciding who start the battle based on agility
    if(this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    };

    // displaying player's stats
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
    
    // displaying enemy's description
    console.log(this.currentEnemy.getDescription());

    this.battle();
};

module.exports = Game;