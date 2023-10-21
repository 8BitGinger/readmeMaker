
// TODO: Create a function that returns a value badge based on which value is passed in
// If there is no value, return an empty string
// const badges = (answers)=> {
//   let badgeText = answers.license;
 //Check this syntax because it doesn't seem to like this.  
//   if (badgeText) === "MIT",
//   let  newBadge = "[![Inquirer](https://badge.ttsalpha.com/api?icon=nodedotjs&label=Inquirer&status=v.8.2.4&color=red)](https://example.com)"
  
//}



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
<a id="badges"></a>



# ${answers.title}

## Description
${answers.description}



## Table of Contents
1. [Usage](#usage)
2. [Installation Code](#installation)
3. [Contributing](#contributing)
4. [Screenshot](#screenshot)
5. [License](#license)
6. [Tests](#tests)
7. [Links](#links)
8. [Questions](#support)

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


<a id="license"></a>
## License
[${answers.licensetype}](url)


<a id="tests"></a>
## Tests
${answers.tests}


<a id="links"></a>
## Links
### Repo Link:
 ${answers.repo}
### Deployed Link:
${answers.live}
### Clone Link:
${answers.clone}


<a id="support"></a>
## Questions
Reach out for Questions or Support here:
### ${answers.email}


`};



module.exports = template;
