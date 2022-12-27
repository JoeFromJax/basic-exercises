//6

function isInArray(array, element) {
    return array.includes(element);
  }

  let result = isInArray([1, 2, 3, 4], 3);
  console.log(result);  // Output: true
  
  result = isInArray([1, 2, 3, 4], 5);
  console.log(result);  // Output: false  