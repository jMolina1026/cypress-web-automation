# Install Guide

## NVM
- https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

## NPM
- https://github.com/npm/cli
- Homebrew: `npm install -g npm@latest`


## Cypress
- Create package.json file: https://docs.npmjs.com/cli/v10/commands/npm-init --> `npm init -y`
- Cypress Install: `npm install cypress --save-dev`
- Cypress Head: `npx cypress open`
- Cypress Headless: `npx cypress run`
- Cypress Headless, specific test: `npx cypress run --spec "test.cy.js"`
    - cypress run will run Electrons browser on default
    - Browser options are dependent on what is available on your system
- Cypress Headless, specific browser: `npx cypress run --headless --browser chrome`
- df 

## Mocha
- Mocha: https://mochajs.org/#installation
- Mocha Install: `npm install mocha --save-dev`

## Other Installs
- JS Standard: https://standardjs.com/#install
- JS Standard install: `npm install standard --global`
