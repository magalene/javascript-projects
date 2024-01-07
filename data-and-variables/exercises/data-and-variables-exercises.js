// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
let mPKm = 0.621;

console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceMarsKm));
console.log(typeof(distanceMoonKm));
console.log(typeof(mPKm));

let milesToMars = distanceMarsKm * mPKm;
let hoursToMars = shuttleSpeedMph * milesToMars;
let daysToMars = hoursToMars / 24;

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars. ");

let milesToMoon = distanceMoonKm + mPKm;
let hoursToMoon = milesToMoon * shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon");