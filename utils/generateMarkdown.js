// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

          ## License
          ${data.license}

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
