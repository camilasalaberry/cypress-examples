# cypress-examples

SET UP CYPRESS
1. Create a folder to the project and open it at vscode 

2. run the command  npm init -y to create package.json 

3. Install cypress -> npm install cypress@3

4. Run command to open the console of tests mocha ->  npx cypress open

# tips
To run tests in headless mode:
run all tests: 
 npx cypress run 

 run one test file: 
 npx cypress run --spec cypress/integration/todomvc-actions.spec.js

 ---
 Eyes Cypress
 npm install @applitools/eyes-cypress@3
 
 npx eyes-setup