const age = 21;
const name = "Alice";

function greet(name) {
  return `Hello, ${name}!`;
}

function isAbove18(ag) {
  return age > 18;
}
module.exports = { age,name, greet, isAbove18 };