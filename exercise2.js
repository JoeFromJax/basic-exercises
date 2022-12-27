//2
function isFirstGreaterThanSecond(num1, num2) {
    if (num1 > num2) {
      return true;
    } else {
      return false;
    }
  }
    
let result = isFirstGreaterThanSecond(5, 2);
console.log(result); // Output: true

result = isFirstGreaterThanSecond(2, 5);
console.log(result); // Output: false