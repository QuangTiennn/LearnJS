function cat(){
    this.stomach = [];
}

cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.die();
}

module.exports = cat;