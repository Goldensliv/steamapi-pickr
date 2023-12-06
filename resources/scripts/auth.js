const fs = require('fs'); // this whole file is just for extracting the api key from the root of the resources directory and assigning it to a variable in the code that actually makes the api calls 
const path = require('path');

const filePath = path.join(__dirname, '..', '.key'); // the file containing the api key should be just a plain file name '.key' in the root of the resources directory
const fileData = fs.readFileSync(filePath, 'utf8');

const key = fileData.trim();

module.exports = key;