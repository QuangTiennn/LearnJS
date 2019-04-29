// function tenDinhNghia(para_1,para_2){
//     this.property_1 = para_1;
//     this.property_2 = para_2;
//     this.method_1 = function(){
//         //code
//     }
//     this.method_2 = function(){
//         return 100;
//     }
// }

// var pro_1 = object_1.property_1;   // giá trị 1 
// var pro_2 = object_1.property_2;   // 15
// object.method_1();
// var abc = object_1.method_2();     // 100

// var nguoi = function(){
//     var ten = "";
//     var tuoi = 0;

//     this.getTen = function(){
//         return ten;
//     }
//     this.setTen = function(strTen){
//         ten = strTen;        
//     }
//     this.getTuoi = function(){
//         return tuoi;
//     }
//     this.setTuoi = function(intTuoi){
//         tuoi = intTuoi;        
//     }
// }





// var sinhVien = function(){
//     nguoi.apply(this.argument);   //truyền các biến khởi tạo nếu có trong lớp cha
//     var maSinhVien = 0;

//     this.getmaSinhVien = function(){
//         return maSinhVien;
//     }
//     this.setmaSinhVien(strmaSinhVien){
//         maSinhVien = strmaSinhVien;
//     }
// }
// sinhVien.prototype = new nguoi();

// var sv = new sinhVien();
// sv.setTen("tôi là Nguyễn Văn A");
// sv.setTuoi(21);
// sv.setmaSinhVien("A123456");
// console.log(sv.getTen);
// console.log(sv.getTuoi);
// console.log(sv.getmaSinhVien);


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
 }
 
 Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
 }
 
 function Student(firstName, lastName) {
    Person.call(this, firstName, lastName);
 }
 
 Student.prototype = Object.create(Person.prototype);
 
 const Name = new Student('Nguyen', 'Tien');
 console.log(Name.getFullName());
















