//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
function minValue(arr){
   let min = arr[0];
   for (let i = 0; i < arr.length; i++){
      if (arr[i] < min){
         min = arr[i]
      }
   }
   return min;
}
   console.log(minValue(nums1));