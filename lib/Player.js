const Potion = require('../lib/Potion');

function Player(name='') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
}

// returns an object with various player properties
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array or false if empty
Player.prototype.getInventory = function() {
    if(this.inventory.length) {
        return this.inventory;
    }
    return false;
};

// retuns player's health value
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

// check to see if player is alive or not
Player.prototype.isAlive = function() {
    if(this.health === 0) {
        return false;
    }
    return true;
};

// when the health value of our player should be reduced
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if(this.health < 0) {
        this.health = 0;
    }
};

// getting player's attack value
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

module.exports = Player;