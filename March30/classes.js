const { is } = require("express/lib/request");

class Hero{
    constructor(name, alias, location, nemesis, friends, power){
        this.name = name;
        this.alias = alias;
        this.location = location;
        this.nemesis = [nemesis];
        this.friends = [friends];
        this.isAlive = true;
        this.powerLevel = 100;
        this.power = {
            power1 : 10,
            power2 : 5,
            power3 : 15,
            power4 : 20
        };
    };
        usePower(){
            if(this.isAlive){
            this.powerAmt > this.powerLevel ? console.log("warning: hero does not have enough energy to use this power") : this.powerLevel -= this.powerAmt;            
            };
        };

        forcePower(){
            this.powerLevel -= this.powerAmt;
            if (this.powerLevel < 0) {
               this.isAlive = false; 
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

let harley = new Hero("Dr. Harleen Quinzel", "Harley Quinn", "Gotham", "Joker", "Poison Ivy", "Being underestimated");
console.log(harley);
harley.usePower();
harley.addFriend('harmony');
harley.addNemesis("responsibility");
console.log(harley);
harley.usePower();
harley.usePower();
harley.usePower();
harley.usePower();
console.log(harley);
harley.usePower();
harley.usePower();
harley.usePower();
harley.usePower();
harley.usePower();
harley.usePower();

console.log(harley);

let ivy = new Superhero("Dr. Pamela Isley", "Poison Ivy", "Gotham", "Global Warming","Harley Quinn", "Plant manipulation", 10);
console.log(ivy);
ivy.usePower();
ivy.addNemesis("Joker")
console.log(ivy);

// const names =["harmony", "harmony1", "harmony3", "harmony4", "harmony5"];

// const [firstName, ,secondName] = names;

// console.log(secondName);

// const player = {
//     name : "harmony", 
//     age : 24,
//     location : 'houston',
//     sport: "baseball"
// };
// let {name, sport} = player;
// console.log(name);