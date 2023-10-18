// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderlicenseBadge(value) {
  if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}
return(license);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return ``
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ## Description
          ${data.description}

          ---

          ## Table of Contents
        1. [Installation](#Installation)
        2. [Usage](#Usage)
        3. [Contributing](#Contributing)
        4. [Screenshot](#Screenshot)
        5. [Credits](#Credits)
        6. [License](#License)
        7. [Badges](#Badges)
        8. [Tests](#Tests)
      


          ---

          ## Installation

          Clone the Repo here:
            git clone ${data.clone}

          ---

          ## Usage
          ${data.usage}

          ---

          ## Contributing
          ${data.contributing}

          ---

          ## Screenshot
          ![screenshot](./assets/images/${data.screenshot})

          ---

          ## Credits
          ${data.credits}

          ---

          ## Badges
          ${license}

          ---

          ## Tests
          ${data.tests}

          ---

          ## Links
          Repo Link: ${data.repo}
          Live Link: ${data.live}

          ---

          ## Contact Me
          ${data.email}


`;
}


module.exports = generateMarkdown;
