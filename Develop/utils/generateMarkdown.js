// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ![License badge] (https://img.shields.io.badge/license-${data.license}-green)

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contribution](#Contribution)
  5. [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  ![License badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  * My GitHub profile can be viewed here: https://github.com/${data.username}
  * You can email me with questions at: ${data.email}`;
}

module.exports = generateMarkdown;
