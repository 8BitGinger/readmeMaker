
// TODO: Create a function that returns a value badge based on which value is passed in
// If there is no value, return an empty string



// TODO: Create a function that returns the value link
// If there is no value, return an empty string
//function rendervalueLink(value) {}

// TODO: Create a function that returns the value section of README
// If there is no value, return an empty string
// function rendervalueSection(value) {
//   return ``
// }

// TODO: Create a function to generate markdown for README
const template = (answers)=> {

  
  return `


# ${answers.title}

## Description
${answers.description}



## Table of Contents
1. [Usage](#usage)
2. [Installation](#installation)
3. [Contributing](#contributing)
4. [Screenshot](#screenshot)
5. [Credits](#credits)
6. [License(#license)
7. [Tests](#tests)
8. [Links](#links)
9. [Support](#support)

---

<a id="usage"></a>
## Usage
${answers.installation}

<a id="installation"></a>
\`\`\`
${answers.code}
\`\`\`

---

<a id="contributing"></a>
## Contributing
${answers.contributing}


<a id="screenshot"></a>
## Screenshot
![screenshot](./assets/images/${answers.screenshot})

---

<a id="credits"></a>
## Credits
${answers.credits}


<a id="license"></a>
## License
[${answers.license}](url)


<a id="tests"></a>
## Tests
${answers.tests}


<a id="links"></a>
##Links
### Repo Link:
 ${answers.repo}
### Deployed Link:
${answers.live}
### Clone Link:
${answers.clone}


<a id="support"></a>
## Support
Reach out for Questions or Support here:
${answers.email}


`};



module.exports = template;
