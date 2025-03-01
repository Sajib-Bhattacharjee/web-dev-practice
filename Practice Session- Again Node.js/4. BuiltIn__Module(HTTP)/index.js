const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hay!!! This is my First Node Server.");
});

myServer.listen(port, hostName, () => {
  console.log(
    `This Server is successfully runing at http://${hostName}:${port}`
  );
});
