//4 
const num = {
    numberOne: 5,
    numberTwo: 2,
    addAllNumbers: function() {
      return this.numberOne - this.numberTwo;
    }
  };

  console.log(num.numberOne);  // Output: 5
console.log(num.numberTwo);  // Output: 2
console.log(num.addAllNumbers());  // Output: 3
