// global aka window environment
const fName = 'John';
const lName = 'Smith';

console.log(fName);
console.log(lName);

function getName(){
  console.log(fName);
}

function proxy(){
  getName();
}

proxy();

getName();
