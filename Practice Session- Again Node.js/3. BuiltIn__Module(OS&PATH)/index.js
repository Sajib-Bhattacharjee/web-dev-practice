console.log("WelCome to learning Node.js");

const openSource = require("os");

console.log(openSource);
console.log(openSource.userInfo());
console.log(openSource.homedir());
console.log(openSource.hostname());
console.log(openSource.totalmem());
console.log(openSource.freemem());
console.log(openSource.version());

console.log(__dirname);
console.log(__filename);

const path = require("path");

const extensionName = path.extname("index.css");
console.log(extensionName);

const joinName = path.join(__dirname + "/../vives");
console.log(joinName);
