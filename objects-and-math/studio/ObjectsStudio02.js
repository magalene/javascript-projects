// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return Math.round(((Math.PI)*2)*radius)
};

// Code your missionDuration function here:

let defaultRadius = 2000;
let defaultSpeed = 28000;
function missionDuration(numOrbits, orbitRadius, orbitalSpeed){
  return orbitTime = (Math.round(((orbitCircumference(orbitRadius)/orbitalSpeed)*100)/100))* numOrbits
};
// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
  return arr[Math.floor(Math.random()*arr.length)];
 };
// Code your oxygenExpended function here:
function oxygenExpended(candidate){
  Math.round((missionDuration(3)*candidate.o2used)*10)/10;
  return console.log(`${candidate} will perform the spacewalk, which will last ${missionDuration(3)} hours and require ${oxygenExpended} kg of oxygen. `);
}
let allCandidates = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

oxygenExpended(selectRandomEntry(allCandidates));

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 