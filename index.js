const inquirer = require('inquirer')
const Questions = [
    'title',
    'Description',
    'Contents',
    'Installation',
    'Usage',
    'License',
    'Contributing',
    'Tests',
    'Questions',
]

const inquirerQuestions = Questions.map(it => {
    return {
        type: 'input',
        name: it,
        Message: it,
    }
})

async function askQuestions() {
  return await  inquirer.prompt(inquirerQuestions)
}

async function collectAnswersAndGeneratorREADME() {
    const responses = await askQuestions()
    console.log(responses);
}
collectAnswersAndGeneratorREADME()

// the title of my project 
// and sections entitled Description,
// Table of Contents, 
// Installation,
// Usage,
// License, 
// Contributing,
// Tests,
// and Questions