var Mouse = require('./mouse');
var cat = require('./cat');

var mickey= new Mouse('black');
var jerry = new Mouse('white');

console.log(mickey);
console.log(jerry);

var tom  = new cat();
tom.eat(mickey);
tom.eat(jerry);

console.log(tom);
