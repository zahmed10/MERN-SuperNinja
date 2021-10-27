class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log("The ninja's name is " + this.name);
  }

  showStats() {
    console.log("Name: " + this.name + "\nStrength:" + this.strength
  + "\nSpeed: " + this.speed + "\nHealth: " + this.health);
  }

  drinkMatcha() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name)
    this.health = 200;
    this.wisdom = 10;
  }

  speakWisdom() {
    this.drinkMatcha();
    console.log("Plan your life like you will live forever, and live your life like you will die the next day.\n-https://www.wishesmsg.com/inspirational-wise-wisdom-messages/")
  }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkMatcha();
// ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
