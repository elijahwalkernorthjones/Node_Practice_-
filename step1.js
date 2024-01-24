const fs = require('fs');
const process = require('process');
const axios = require('axios');

// Read the contents of a file
function cat(path){
  fs.readFile('one.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('File contents:', data);
  })
}

