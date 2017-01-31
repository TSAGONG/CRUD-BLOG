let frank = {
  size: 'Large',
  teeth: 'Yellow',
  isAlive: false,
  makeAlive: function(){
    console.log('I am about to be alive!!!!!');
    this.isAlive = true;
  }
};

console.log(frank.makeAlive());
console.log(frank.isAlive);

console.log(1+1)
c
