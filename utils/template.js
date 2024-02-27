// TODO: Create a function to generate markdown for README
const template = (answers) => {
  return `
<a id="badges"></a>
${answers.licenseBadge}


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
[${answers.license}](url)

---


<a id="tests"></a>
## Tests
${answers.tests}

---


<a id="links"></a>
## Links

<div align="center">

### [Repo Link](${answers.repo})

### [Deployed Link](${answers.live})

### [Clone Link](${answers.clone})

</div>

---

<a id="support"></a>
## Questions
Reach out for Questions or Support here:
### Email: 
${answers.email}
#### GitHub Username: 
[${answers.github}](${answers.gitprofile})

`;
};

module.exports = template;
