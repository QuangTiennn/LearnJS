var readLineSync = require("readline-sync");
var fs = require("fs");

//menu

// var menu =['showStudent', 'create new student', 'Save & Exit'],
// choose = readLineSync.keyInSelect(menu ,'your choose ?');
// console.log('you chosse'+menu[choose]);

// console.log("show student");
// console.log("create new student");
// console.log("save & exit");
// var menu = readLineSync.question("do you choose");
// var choose ;
// function menu (choose){
//     switch(choose){
// case 1: {var showStudent = fs.readFileSync('./data.txt',{encoding : 'utf8'});
//     console.log(showStudent);break;}
// case 2 : {var newStudent;
//          var name = readLineSync.question('your name ?');
//          var age = readLineSync.question('your age ?');
//          var gender = readLineSync.question('gender(male/female)');

//          newStudent.name = name;
//          newStudent.age = age;
//          newStudent.gender = gender;

//          console.log(newStudent);break;}
// case 3 : {if(readLineSync.keyInYN('you want save file ?')){
//             console.log("saved");
//         }else
//             console.log("exited");break}
//     }
// }
// menu(2);

var choose = readLineSync.question('do you choose?');

var a = parseInt(choose);

switch (a) {
  case 1:
    var showStudent = fs.readFileSync("./data.txt", { encoding: "utf8" });
    console.log(showStudent);
    break;
  case 2:
    var newStudent = {};
    var name = readLineSync.question("your name ?");
    var age = readLineSync.question("your age ?");
    var gender = readLineSync.question("gender(male/female)");

    newStudent.name = name;
    newStudent.age = age;
    newStudent.gender = gender;
    console.log(newStudent);
    break;
  case 3:
    if (readLineSync.keyInYN("you want save file ?")) {
      console.log("saved");
    } else console.log("exited");
    break;
  default:
    console.log("abc");
    break;
}

//1 show all students

// var showStudent = fs.readFileSync('./data.txt', {encoding : 'utf8'});
// console.log(showStudent);

//2 create new student

// var newStudent = {};
// var name = readLineSync.question('your name ? ');
// var age = readLineSync.question('your age ? ');
// var gender = readLineSync.question('gender(male/female)');

// newStudent.name = name;
// newStudent.age = age;
// newStudent.gender = gender;

// console.log(newStudent);

// //3 save & exit
// var readLineSync = require('readline-sync');
// if(readLineSync.keyInYN('do you want save file ? ')){
//     console.log("saved");
// }else{
//     console.log("exited");
// }
