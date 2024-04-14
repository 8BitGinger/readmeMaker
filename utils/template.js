// TODO: Create a function to generate markdown for README
const template = (answers) => {
  return `
<a id="badges"></a>
${answers.licenseBadge}


# ${answers.title}

## Description

${answers.description}

---

## Table of Contents

1. [Usage](#usage)
1. [Installation Code](#installation)
1. [Technologies](#technologies)
1. [Screenshot](#screenshot)
1. [License](#license)
1. [Contributing](#contributing)
1. [Tests](#tests)
1. [Links](#links)
1. [Contact](#contact)

---

<a id="usage"></a>

## Usage

${answers.installation}

<a id="installation"></a>

\`\`\`
${answers.code}
\`\`\`

---

<a id="technologies"></a>

## Technologies

${answers.technologies}

---


<a id="license"></a>

## License

#### ${answers.license}

${answers.licenseBadge}

---


<a id="tests"></a>

## Tests

${answers.tests}

---

<a id="contributing"></a>

## Contributing

${answers.contributing}


<a id="screenshot"></a>

## Screenshot

![screenshot](./assets/images/${answers.screenshot})

---


<a id="links"></a>

## Links

<div align="center">

### [Repo Link](${answers.repo})

### [Deployed Link](${answers.live})

### [Clone Link](${answers.clone})

</div>

---

<a id="contact"></a>

## Questions

Contact Me Here:

#### Email: 

${answers.email}

#### GitHub Username: 

[${answers.github}](${answers.gitprofile})

`;
};

module.exports = template;
