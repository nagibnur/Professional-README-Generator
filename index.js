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
  //generatorReadme(responses)
}
async function generatorReadme(answers) {
  const READMEDocument = await fs.promises.readFile("./README.md", "utf8");
  const READMEfile = READMEDocument
  .replace("$Title", answers.Title)
  .replace("$Description", answers.Description)
  .replace("$Contents", answers.Contents)
  .replace("$Installation", answers.Installation)
  .replace("$Usage", answers.Usage)
  .replace("$License", answers.License)
  .replace("$Contributing", answers.Contributing)
  .replace("$Tests", answers.Tests)
  .replace("$Questions", answers.Questions);
  await fs.promises.writeFile('./index.md', READMEfile)

  console.log(READMEfile);
}

const dummyAnswers = {
  Title: "nagib",
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

//collectAnswersAndGeneratorREADME()

