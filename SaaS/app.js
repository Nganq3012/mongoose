const fs=require('fs')
fs.writeFileSync('file.txt','test tiếng việt');
console.log('hihi',fs.readFileSync('file.txt',{encoding:'utf-8'}));
 