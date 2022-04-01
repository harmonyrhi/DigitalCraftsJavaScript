const { is } = require("express/lib/request");

class Hero{
    constructor(name, alias, location, nemesis, friends){
        this.name = name;
        this.alias = alias;
        this.location = location;
        this.nemesis = [nemesis];
        this.friends = [friends];
        this.isAlive = true;
        this.powerLevel = 100;
        this.hasPowers = false;
        // this.powers = powers;
        // this.powerAmt = powerAmt;
        // {
        //     power1 : 5,
        //     power2 : 10,
        //     power3 : 15,
        //     power4 : 20
        // };
    };
        givePowers(power, powerAmt){
            ({ power : powerAmt } = Hero);
            this.hasPowers = true;
        }

        usePower(power){
            if(this.isAlive && this.hasPowers){
                power > this.powerLevel ? console.log("warning: hero does not have enough energy to use this power") : this.powerLevel -= power;            
            } else if (this.isAlive){
                console.log('warning: this hero does not have any powers to use');
            }

        };

        forcePower(){
            this.powerLevel -= this.powerAmt;
            if (this.powerLevel < 0) {
               this.isAlive = false;
               this.hasPowers = false; 
            };
        };

        addFriend(newFriend){
            if(this.isAlive){
                this.friends.push(newFriend);
            };
        };

        addNemesis(newNemesis){
            if(this.isAlive){
                this.nemesis.push(newNemesis);
            };
        };

        fourish(){
            if(this.isAlive){
                return `hello citizen, my name is ${this.name}`;
            };
        };
};

class Superhero extends Hero {
    constructor(name, alias, location, nemesis, friends, powerName, powerAmt){
        super(name, alias, location, nemesis, friends, powerName);
        this.powerLevel = 200;
        this.powerAmt = powerAmt*2;
    }

    forcePower(){
        this.powerLevel -= this.powerAmt;
        if (this.powerLevel < -100) {
           this.isAlive = false; 
        };
    };

}

let harley = new Hero("Dr. Harleen Quinzel", "Harley Quinn", "Gotham", "Joker", "Poison Ivy");
console.log(harley);
harley.givePowers("bat", 10);
// harley.usePower("bat");
// harley.addFriend('harmony');
// harley.addNemesis("responsibility");
// console.log(harley);
// harley.usePower();
// harley.usePower();
// harley.usePower();
// harley.usePower();
// console.log(harley);
// harley.usePower();
// harley.usePower();
// harley.usePower();
// harley.usePower();
// harley.usePower();
// harley.usePower();

console.log(harley);

let ivy = new Superhero("Dr. Pamela Isley", "Poison Ivy", "Gotham", "Global Warming","Harley Quinn", "Plant manipulation", 10);
console.log(ivy);
// ivy.usePower();
// ivy.addNemesis("Joker")
// console.log(ivy);
