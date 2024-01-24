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
};

async function webCat(url){
   try {
    console.log('make promise for url');
    let res = await axios.get('url');
    console.log(res.data);
   } catch (err){
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1)
   }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}