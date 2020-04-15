# How to install:

- Install latest node and npm stable versions
- Create a folder, open a terminal and go to that folder path
- Run the following command: npm install cypress


# How to open and run Cypress test cases:

- In order to open Cypress playground (that's the name for Cypress UI) you need to run the following command > npx cypress open
	- Here you'll see many example test scenarios
	- You can run them manually by clicking any of them
- In order to run test scenarios without actually seeing the execution, meaning they are running on the back stage, run the following command > npx cypress run
	- The above command will run every file that has .spec.js quotation
	- If you want to run a specific test scenario you can execute the following command > npx cypress run --spec {path to the specific case}
	- You can also ask cypress to run test on specific browser, for example > npx cypress run --spec {path to the specific case} --browser chrome
- In order to run on specific environments, you can pass the --env parameter, right now we specified 3 environments, qa, int and prod. For example > npx cypress run --env name=qa


# How to run and obtain reports


- Mochawesome
	- run the following command on your project root folder: npm install --save-dev mocha
	- run the following command on your project root folder: npm install --save-dev mochawesome
		- By this point you'll be able to see .json and .html reports after execution of single test cases, if you want to see a general report of a test suite with many test cases, continue with the following instructions.
	- run the following command on your project root folder: npm install --save-dev cypress-multi-reporters
	- run the following command on your project root folder: npm install --save-dev mochawesome-merge
	- run the following command on your project root folder: npm install --save-dev mochawesome-report-generator

We have 2 custom commands right now that will run a group of test cases and generate a general report, in order to run those run the following:

- npm run smallRegression
- npm run fullRegression

This custom commands will:
1. Delete the previous .json report files on cypress/reports/mocha
2. Run the selected test suite
3. Merge .json files and generate a general .html report, this last file can be found on /mochaReports directory
