//nối 2 array
// a.concat(b)
// thêm phần tử vào array.vị trí cuối array in ra lenght array
// a.push(b)
// lấy ra phần tử cuối cùng và thay đổi array trả về phần tự bị đẩy ra
// a.pop()
// đẩy index đầu tiên ra khỏi mảng thay đổi mảng và trả về giá trị bị đẩy ra
// a.shift()
// thêm phần tử vào đầu mảng trả về lenght array
// a.unshift()

var a = [1,2,3,4];
console.log(a);
var b = [7,8,9];
console.log(b);

console.log(a.concat(b));

console.log(a.push(b));

console.log(a.pop());

console.log(a.shift());

var c = a.unshift(5);
console.log(c); //5


