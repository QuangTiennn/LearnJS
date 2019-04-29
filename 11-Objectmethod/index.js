// Object
// var nameObject = {
//     key : value,
//     key : value,
// };


var myPet = {
    type : "Dog",
    name : "KiKi",
    weight : 20,
    age : 2,
    bark : function(){
        console.log("Gâu Gâu...name is ",this.name);
    }, 
    eat :function(bone){
        this.weight = this.weight + bone.weight;
        return this;
    }
};
console.log(myPet.name);
var bone = { 
    weight : 0.5
};
console.log("before eating ", myPet.weight);

myPet.eat(bone);
console.log("after eating ", myPet.weight);



var myFriends = {
    name: "Hoài Thương",
    age : 20,
    weight : 50,
    height : 160,
    drink : function(milkTea){
        this.weight = this.weight + milkTea.weight;
        this.height = this.height + milkTea.height;
        return this.weight , this.height;
    }
};

console.log(myFriends);

var milkTea = {
    height : 3,
    weight : 5
};

console.log("befor drink milk tea : weight :", myFriends.weight,"height: ",myFriends.height);

myFriends.drink(milkTea);

console.log("after drink milk tea : weight : ",myFriends.weight,"height: ",myFriends.height );