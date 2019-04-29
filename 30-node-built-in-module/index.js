var fs = require('fs');

var text = fs.readFileSync('./index.txt', {encoding : 'utf8'});
console.log(text);

fs.writeFileSync('./index-2.txt','Coders.Tokyo');
