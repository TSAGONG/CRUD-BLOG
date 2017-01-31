l//window scope aka global

const fName= 'John';
let lName = 'Smith';


function getName() {
  console.log(fName);
}

function setName(){
  lName = 'Andre';
}

getName();
setName();
