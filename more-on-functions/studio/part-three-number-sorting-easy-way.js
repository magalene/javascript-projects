//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function createNewSortedArray(oldArray, newSortedArray = []) {
    //let newSortedArray = [];
    if (oldArray.length <= 0) {
      return newSortedArray;
    } else {
          // find min value and assign to variable
          let minValue = (findMinValue(oldArray));
          //console.log(minValue);
      
          // push min value to new sorted array
          newSortedArray.push(minValue);
      
          // remove this value from old array
          oldArray.splice(oldArray.indexOf(minValue),1);
          //console.log(newSortedArray);
          return createNewSortedArray(oldArray, newSortedArray);
    }
  }
//Sort each array in decending order.
