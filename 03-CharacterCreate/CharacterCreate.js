function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {
        console.log(this.name, this.profession, this.gender, this.age, this.strength, this.hp);
    };
    this.IsAlive = function () {
        if (this.hp > 0) {
            console.log(this.name + " is ALIVE!")
        }else{
            console.log(this.name + " is DEAD!")
        }
    }
    this.Attack = function (other) {
        other.hp -= this.strength;
        console.log(this.name+" has been attacked by "+ other.name)
        console.log("\n================================\n")
    }
    this.LevelUp = function (a, b, c) {
        this.age += a;
        this.strength += b;
        this.hitpoints += c;
        console.log(this.name + " has leveled up!" + this.age + " " + this.strength + " " + this.hp)
    }
}

var coonhound = new Character("Blue", "Bone Hunter", "female", 10, 10, 40);
var tuxedocat = new Character("Toki", "mouser", "female", 9, 10, 20);
// coonhound.printStats();
// tuxedocat.printStats();
// coonhound.IsAlive();
// coonhound.Attack(tuxedocat);
// coonhound.LevelUp(1, 5, 25);

function fight() {
    //fight till death!
    while (coonhound.hp > 0 && tuxedocat.hp > 0) {
        coonhound.Attack(tuxedocat);
        // coonhound.LevelUp(1,5,25);
        tuxedocat.Attack(coonhound);
        // tuxedocat.LevelUp(1,5,25);
        coonhound.IsAlive();
        tuxedocat.IsAlive();
    }
}
fight();