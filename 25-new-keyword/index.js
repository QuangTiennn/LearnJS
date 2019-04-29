function Mouse(weight,color){
    this.type = 'mouse';
    this.weight = weight;
    this.color = color;
}

var m1 = new Mouse(10,'white');
var m2 = new Mouse(20,'Black');
console.log(m1);
console.log(m2);

var tom ={
    name :"Tom",
    stomach : [],
    eat : function(){
        this.stomach.push(TomEat);
        return this;
    }
};

function TomEat(name, color){
    this.name = name;
    this.color = color;
}

var M1 = new TomEat('M1', 'blue');
var M2 = new TomEat('M2', 'yellow');

tom.eat(M1).eat(M2);                    
console.log(tom);