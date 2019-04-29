var n = 10;
for(var i=0;i<=n;i++){
    console.log(i);
}


function forLoop(n){
    for(var i=0;i<n;i++)
    console.log("vị trí thứ",i);
    
}
//mảng
var employees = [
    {name :'Tien',age : 21},
    {name :'Huy',age : 21},
    {name :'',age : 21}

];

for(i=0;i<3;i++){
    console.log(employees[i].name, employees[i].age);
}

//for..in for...of

var myFriends = [
    {name : '// '},
    {name : 'Quang Huy'},
    {name : 'Văn Thắng'}
];

var content =' ';

for(var myFriend of myFriends){
    content += '<li>'+myFriend.name+'</li>';
}
document.getElementById('contact').innerHTML = content;


var myDog ={
    name: 'kiki',
    age : 1,
    weight : 5
};

for(var key in myDog){
    console.log(key,myDog[key]);
}