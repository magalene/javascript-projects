function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 let newArray = [];
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 1; i++){
  newArray.push(randomSelection(words));
  newArray.push(randomSelection(happiness));
 }
 console.log(newArray);
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.