const inquirer = require("inquirer");
const fs = require("fs");

fs.mkdir("./myProject", error => {
  if (error) throw error;
  console.log("Project Folder written");

  fs.writeFile("myProject/index.js", "// sample code", "utf8", error => {
    if (error) throw error;
    console.log("Index File written");
  });
  fs.mkdir("./myProject/spec", error => {
    if (error) throw error;
    console.log("Spec Folder written");

    fs.writeFile(
      "myProject/spec/index.spec.js",
      "// sample tests",
      "utf8",
      error => {
        if (error) throw error;
        console.log("Spec File written");
      }
    );
  });
});
