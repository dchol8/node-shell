const fs = require('fs');

const cat = function(fileName) {
  console.log(fileName);
  fs.readFile(`./${fileName}`, (err, fd) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(fd);
    process.stdout.write('\nprompt > ');
  }
});
}

module.exports = cat;
