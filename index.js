const age = 21;

function greet(name) {
  return `Hello, ${name}!`;
}

function isAbove18(ag) {
  return age > 18;
}
module.exports = { age, greet, isAbove18 };