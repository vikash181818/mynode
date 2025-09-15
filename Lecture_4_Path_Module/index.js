import path from 'path';

console.log('Path Module in Node.js');


//join two or more file paths
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

//absolute path
const absolutePath = path.resolve();
console.log(absolutePath);


//extension of file
const ext = path.extname('index.html');
console.log(ext);