# HowTo install cypress bypassing your Proxy

1. Download cypress.zip from here: https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download

2. In your terminal / prompt run this command: `CYPRESS_INSTALL_BINARY=~/Downloads/cypress.zip npm install cypress --save-dev`

3. In your package.json add this to your devDependencies: `"@cypress/schematic": "^2.5.1",`

4. Run `npm i` once more.

5. Test via `ng s` and `ng e2e` (two terminals).
