import fs from "node:fs";
import http, { request } from "node:http";
import generatePassword from "generate-password";

import { error, info } from "node:console";

// TASK ONE
// Creating a file
fs.writeFileSync("hello-world.js", "console.log('Hello World')", "utf-8");

// TASK TWO
// Creating a server

const server = http.createServer((request, response) => {
  response.end("<h1>Hello Node!!!!</h1>\n");

  if (err) {
    console.log(err);
    return;
  }

  console.log("Server is up and running");
});

// Setting up port 3000

server.listen(3000, () => {});

// TASK THREE

// const fs = require("fs"); // Can't require fs again since it has already been imported above.

fs.writeFileSync("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file successfully created");
});
console.log("Server is up and running");

// Reading from DiffieHellmanGroup.txt file

// Creating hello.txt file

fs.writeFileSync("hello.txt", "This is a test file", "utf-8", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Hello.txt file was created successfully");
});

//Reading the hello.txt file

let data = fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

console.log(data);
