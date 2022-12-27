//8

function greet(name) {
    if (['tums', 'piccle', 'interesting', 'diply'].includes(name)) {
      console.log(`User ${name} is not welcome.`);
    } else {
      console.log(`Hi, ${name}!`);
    }
  }

greet('tums');  // Output: "User tums is not welcome."
greet('John');  // Output: "Hi, John!"
greet('interesting');  // Output: "User interesting is not welcome."
greet('diply'); // Output: "User diply is not welcome."
