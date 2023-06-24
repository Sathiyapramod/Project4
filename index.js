console.log("hello world");
const fs = require("fs");

function processFile(file) {
  const contents = fs.readFileSync(file);
  console.log(contents);
}

const files = ["./file1.txt", "./file2.txt", "./file3.txt"];

const eventLoop = async function () {
  for (const file of files) await processFile(file);
};

eventLoop();
