//3

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  let result = sumArray([1, 2, 3, 4]);
console.log(result);  // Output: 10