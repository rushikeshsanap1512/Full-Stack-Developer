const fs = require('fs').promises;

async function writeToFile(filename, content){
  try{
    await fs.writeFile(filename, content, 'utf-8');
    console.log('File has been written sucessfully');
  }
  catch(error){
    console.error('Error writing to File:', error)
  }
}

writeToFile('example.txt', 'Hello, example.txt!');