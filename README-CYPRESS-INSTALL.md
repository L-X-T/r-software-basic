# HowTo install cypress bypassing your Proxy

1. Please remove these two lines `"cypress": "^13.7.2",` and `"@cypress/schematic": "^2.5.1",` from the `devDependencies` your `package.json` and then run `npm i` (or `yarn`).

2. Download cypress.zip from here: https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download

3. In your terminal / prompt run this command: `CYPRESS_INSTALL_BINARY=~/Downloads/cypress.zip npm install cypress --save-dev`

4. In your `package.json` re-add this to your `devDependencies`: `"@cypress/schematic": "^2.5.1",`

5. Run `npm i` (or `yarn`) once more.

6. Test via `ng s` and `ng e2e` (in two separate terminals).
