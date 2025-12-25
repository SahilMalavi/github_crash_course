const { age,name, greet, isAbove18 } = require("./util.js");

function getInfo() {
  console.log(greet("Bob"));
  console.log(`bob age is above 18: ${isAbove18(20)}`);
  console.log(`Age is ${age}`);
}


function displayName() {
  console.log(`Name is ${name}`);
}

function displayAge() {
  console.log(`Age is ${age}`);
}

displayName();