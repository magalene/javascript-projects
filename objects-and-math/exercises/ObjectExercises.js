let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo  = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew =[superChimpOne, superChimpTwo, salamander, beagle, tardigrade];
function crewReports(crew){
return `${crew.name} is a ${crew.species}. They are ${crew.age} years old and ${crew.mass} kilograms. Their ID is ${crew.astronautID}.`
};
console.log(crewReports(salamander));


function fitnessTest(crew){
let results = [], numSteps, turns;
for (i =0; i < crew.length; i++){
   numSteps =0;
   turns = 0;
   while (numSteps < 20){
      numSteps += crew[i].move();
      turns++;
   }
   results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
}
return results;
}
console.log(fitnessTest(crew));
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!