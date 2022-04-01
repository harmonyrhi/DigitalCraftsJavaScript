class Car {
    constructor (paint = “Gray”) {
     this.running = false;
     this.color = paint;
 }
    startEngine() {
        this.running = true;
    }
}
// const ferrari = new Car(“red”);
// ferrari.startEngine();
// console.log(ferrari);
class Tesla extends Car {   // Extends - adds to an existing class  (following syntax below), inherits default traits from class it is extending
    constructor(){
        super(“Black”);
        this.isElectric = true;
    }
    stopEngine () {
        this.running=false;
    }
}
class honda extends Car {
    constructor (){
        super(“Grey”);
        this.isElectric = false;
    }
}
const ride = new Tesla();       // logs: Tesla { running: false, color: ‘Black’ }
ride.startEngine();
console.log(ride);
ride.stopEngine();
console.log(ride);









