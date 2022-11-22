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
console.log(inquirerQuestions);

async function askQuestions() {
    inquirer.prompt(inquirerQuestions)
}

askQuestions()


// the title of my project 
// and sections entitled Description,
// Table of Contents, 
// Installation,
// Usage,
// License, 
// Contributing,
// Tests,
// and Questions