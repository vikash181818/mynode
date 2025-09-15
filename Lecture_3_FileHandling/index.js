import { readFile,writeFile, appendFile,mkdir } from 'fs/promises';


// Reading a file using promises
const read_file = async (fileName) => {

    const data = await readFile(fileName, 'utf-8');
    console.log(data);

    
}
read_file('sample.txt');

// creating a file using promises
const create_file = async (fileName, content) => {

    await writeFile(fileName, content);
    console.log('File created successfully');
}

create_file('newfile.txt', 'This is a new file created using promises in Node.js');

// Appending data to a file using promises
const append_file = async (fileName, content) => { 
    await appendFile(fileName, content);
    console.log('Data appended successfully');

 }

append_file('sample.txt', '\nAppended data using promises in Node.js');


// create folder using promises
const create_folder = async (folderName) => {
    await mkdir(folderName,{recursive:true});
    console.log('Folder created successfully');
}
create_folder('newFolder');
create_folder('newFolder/nestedFolder');