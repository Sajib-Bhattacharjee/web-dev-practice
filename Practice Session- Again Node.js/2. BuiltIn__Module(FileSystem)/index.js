const fileSystem = require("fs");

// How to create and write file using asynchronous method
fileSystem.writeFile(
  "document1.txt",
  "My name is Sajib Bhattacharjee",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Successful Created this file.");
    }
  }
);

//How to create and write file using synchronous method
var result = fileSystem.writeFileSync(
  "document1.txt",
  "My name is Sajib Bhattacharjee"
);
if (result) {
  console.log(result);
} else {
  console.log("Successful Created this file.");
}

// How to update file
fileSystem.appendFile(
  "document1.txt",
  ". I am a full Stack Web-Developer.",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Successful Updated this file.");
    }
  }
);

// How to read file
fileSystem.readFile("document1.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// How to rename file
fileSystem.rename("document1.txt", "document2.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("successfully renamed this file.");
  }
});

// How to delete file
fileSystem.unlink("document2.txt", (result) => {
  if (result) {
    console.log("successfully deleted this file.");
  } else {
    console.log("successfully not deleted this file.");
  }
});

// How to check the existance
fileSystem.exists("document1.txt", (result) => {
  if (result) {
    console.log("Found this file.");
  } else {
    console.log("Not found this file.");
  }
});
