const age = 21;
console.log(`I am ${age} years old.`);

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

module.exports = { age, greet };
