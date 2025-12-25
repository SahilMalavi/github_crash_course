const { age,name, greet, isAbove18 } = require("./util.js");

function getInfo() {
  console.log(greet(name));
  console.log(`${name} age is above 18: ${isAbove18(age)}`);
  console.log(`Age is ${age}`);
}

getInfo();