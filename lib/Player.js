const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player {
    constructor(name= '') {

        this.name = name;

        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
        this.inventory = [new Potion('health'), new Potion()];
    }

    // returns an object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    // returns the inventory array or false if empty
    getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    // function to add potion to inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    // function to use a potion from inventory
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}


module.exports = Player;