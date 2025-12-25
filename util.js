const { age, greet, isAbove18 } = require("./index.js");

function getInfo() {
  console.log(greet("Bob"));
  console.log(`bob age is above 18: ${isAbove18(20)}`);
  console.log(`Age is ${age}`);
}

getInfo();
