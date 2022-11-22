const inquirer = require("inquirer");
const fs = require("fs");

const Questions = [
  "title",
  "Description",
  "Contents",
  "Installation",
  "Usage",
  "License",
  "Contributing",
  "Tests",
  "Questions",
];

const inquirerQuestions = Questions.map((it) => {
  return {
    type: "input",
    name: it,
    Message: it,
  };
});

async function askQuestions() {
  return await inquirer.prompt(inquirerQuestions);
}

async function collectAnswersAndGeneratorREADME() {
  const responses = await askQuestions();
  console.log(responses);
}
async function generatorReadme(answers) {
  const READMEDocument = await fs.promises.readFile("./README.md", "utf8");
  const READMEfile = READMEDocument.replace("title", answers.title);
  console.log(READMEfile);
}

const dummyAnswers = {
  title: "nagib",
  Description: "readme",
  Contents: "homework",
  Installation: "now",
  Usage: "dont know",
  License: "not yet",
  Contributing: "my self",
  Tests: "go",
  Questions: "done",
};

generatorReadme(dummyAnswers);
// collectAnswersAndGeneratorREADME()

// the title of my project
// and sections entitled Description,
// Table of Contents,
// Installation,
// Usage,
// License,
// Contributing,
// Tests,
// and Questions
