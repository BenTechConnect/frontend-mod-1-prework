/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}

var pug = new Dog();
var mutt = new Dog();

console.log(pug);
console.log(mutt);
// Prompt 2: Snack
class Snack {

}

var pretzel = new Snack();
var cookie = new Snack();

console.log(pretzel);
console.log(cookie);
// Prompt 3: Shirt
class Shirt{

}

var shortSleeve = new Shirt();
var longSleeve = new Shirt();

console.log(shortSleeve);
console.log(longSleeve);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Pet {
// Can't use the same class name more than once or there will be an error!
  constructor() {
    this.breed = "Pug";
    this.age = 2;
    this.gender = "Female";
  }
}

var pug = new Pet();
console.log(pug);

// Prompt 2: Snack

class Chip {
  constructor() {
    this.brand = "Lays"
    this.flavor = "BBQ"
    this.expired = false
  }
}

var lays = new Chip();
console.log(lays);

// Prompt 3: Shirt

class Sweater {
  constructor() {
    this.color = "Blue"
    this.material = "Cotton"
    this.brand = "Lacoste"
  }
}

var lacoste = new Sweater();
console.log(lacoste);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Animal {
  constructor(brd, age, text) {
    this.breed = brd;
    this.age = age;
    this.texture = text;
  }
}

var hound = new Animal("Hound", 3, "Soft");
console.log(hound);
var husky = new Animal("Husky", 1, "Fluffy");
console.log(husky);

// Prompt 2: Snack

class Meat {
  constructor(type, tndr, flavor) {
    this.type = type;
    this.tender = tndr;
    this.flavor = flavor;
  }
}

var jackLinks = new Meat("Jerkey", "Semi", "Pepper");
console.log(jackLinks);
var slimJim = new Meat("Stick", "No", "Spicy");
console.log(slimJim);

// Prompt 3: Shirt

class Jersey {
  constructor(num, color, team) {
    this.number = num;
    this.color = color;
    this.team = team;
  }
}

var basketballJersey = new Jersey(23, "Red", "Bulls");
console.log(basketballJersey);
var footballJersey = new Jersey(11, "Green", "Eagles");
console.log(footballJersey);
