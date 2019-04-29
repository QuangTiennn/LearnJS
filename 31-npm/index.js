// var readLineSync = require('readline-sync');

// var userName = readLineSync.question('What your name ?');
// console.log("hi "+userName+" !!");

// var languages = [];

// var language = readLineSync.question('what is your mother language ?');
// languages.push(language);
// console.log(language);

var myFriend = {};
console.log("my friend :")

var name = readLineSync.question('what your name ?');
var age = readLineSync.question('how old are you ?');
var gender = readLineSync.question('gender (male/female)');

myFriend.name = name;
myFriend.age = parseInt(age);
myFriend.gender = gender;

console.log(myFriend);

// //get the user's reponse by asingle key without the enter key
// var readLineSync = require('readline-sync');
// if(readLineSync.keyInYN("do you want intall module ?")){
//     console.log("intalling now ....");
// }else{
//     console.log("closing ......");
// }

// //let the user  choose an item from a list
// var readLineSync = require('readline-sync');
// animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   a = readLineSync.keyInSelect(animals, 'Which animal?');
// console.log('you choose ' + animals[a]);


var readLineSync = require('readline-sync');
var addressEmail = readLineSync.question('Sign address Email :');
console.log(addressEmail);
var password = readLineSync.question('password : ',{hideEchoBack: true, mask: require()} );  //error
console.log(password);
var phoneNumber = readLineSync.question('phone ?');
console.log(phoneNumber);

