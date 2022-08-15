// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const viking = this.createSoldier("viking")
        const saxon = this.createSoldier("saxon")
        const damage = saxon.receiveDamage(viking.strength)
        this.saxonArmy = this.removeDeath(this.saxonArmy)
        return damage
    }
    saxonAttack() {
        const viking = this.createSoldier("viking")
        const saxon = this.createSoldier("saxon")
        const damage = viking.receiveDamage(saxon.strength)
        this.vikingArmy = this.removeDeath(this.vikingArmy)
        return damage
    }
    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        }
        if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

    removeDeath(soldier_list) {
        return soldier_list.filter(element => element.health > 0)
    }

    createSoldier(type) {
        if (type == "viking") {
            const viking_index = Math.floor(Math.random() * this.vikingArmy.length)
            return this.vikingArmy[viking_index]
        } else {
            const saxon_index = Math.floor(Math.random() * this.saxonArmy.length)
            return this.saxonArmy[saxon_index]
        }
    }
}
