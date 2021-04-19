const fs = require('fs');
const prependFile = require('prepend-file');

// ./tag.txt (and style) is the correct format to reach the file from package.json

const file = fs.readFile('./tag.txt', 'utf8', async (err, data) => {
  console.log(data);
  await prependFile('./style.css', data + '\n \n');
  console.log('Tag successfully added to style.css');
});
