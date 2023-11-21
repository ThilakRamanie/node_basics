const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

fs.writeFile(path.join(__dirname, "write.txt"), "Hey ya!", (err) => {
  if (err) {
    throw err;
  }
});
fs.appendFile(path.join(__dirname, "write.txt"), "Append works", (err) => {
    if (err) {
      throw err;
    }
  });

console.log(fs.existsSync(path.join(__dirname, 'sample.txt')));
