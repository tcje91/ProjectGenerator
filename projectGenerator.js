#!/usr/bin/env node

const inquirer = require("inquirer");
const fs = require("fs");

fs.mkdir(`${process.cwd()}/myProject`, error => {
  if (error) throw error;
  console.log("project folder created");

  fs.writeFile(`${process.cwd()}/myProject/index.js`, "// sample code", "utf8", error => {
    if (error) throw error;
    console.log("index file written");
  });
  fs.mkdir(`${process.cwd()}/myProject/spec`, error => {
    if (error) throw error;
    console.log("spec folder created");

    fs.writeFile(
      `${process.cwd()}/myProject/spec/index.spec.js`,
      "// sample tests",
      "utf8",
      error => {
        if (error) throw error;
        console.log("spec file written");
      }
    );
  });
  fs.writeFile(`${process.cwd()}/myProject/.gitignore`, "node_modules", error => {
    if (error) throw error;
    console.log("gitignore file written");
  });
  fs.readFile(
    "./sampleFiles/packageSample.json",
    (error, fileContents) => {
      if (error) console.log(error);
      fs.writeFile(`${process.cwd()}/myProject/package.json`, fileContents, error => {
        if (error) console.log(error);
        console.log("package.json file written");
      });
    }
  );
});
