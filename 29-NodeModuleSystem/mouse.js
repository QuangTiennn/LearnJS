function Mouse(color){
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die  = function(mouse){
    this.dead = true;
}

module.exports = Mouse;