# term-deposit-calc

CLI for informational term deposit calculation.
Based on the algorithm found at [Compound Interest Calculator](https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php) from calculatorsoup.com.

## How to run:

1. Clone this git repository
2. Install node v20 if you dont have it — [guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).
3. cd to folder
4. Install dependencies:

```
npm i
```

5. Run script from command line with:

```
node app.js
```

6. Change parameters of `termDepositInput` in app.js to change results

```
 * @description Term Deposit calculation is run on termDepositInput object. Change its values to change the result.
 *
 * @param {number} startDeposit - Currency in dollars
 * @param {number} interestRate - Annual interest rate in decimal percentage (ex: 0.01 is equivalent to 1%)
 * @param {number} investmentTerm - Duration of investment in decimal years
 * @param {string} interestPaid - Choose from "Monthly", "Quarterly", "Annually", "At Maturity"
 */
const termDepositInput = {
	startDeposit: 10000,
	interestRate: 0.011,
	investmentTerm: 3,
	interestPaid: "Monthly",
};
```

## Tests:

Run tests with:

```
npm test
```

### Tested with:

-   Nodejs v20
-   Macbook Air M1

## Dependencies

Dev dependencies:

-   `jest` – testing framework
-   `@types/jest` - for test type autocomplete

## How it works:

App.js is the entry point and can be run from the cmd line. It validates input, calls calculate interest and prints the results.

```
├── app.js (Can be run from cmd line. Validates input and runs calculate interest)
├── scripts/
│   ├── constants/
│   │   └── investmentTerms.enum.js (Can be extended to support other types of investment terms like "bi-weekly")
│   ├── tests/
│   │   ├── mocks/
│   │   │   └── termDeposit.mock.js (Contains success and failure mocks used in tests)
│   │   └── app.test.js (Tests the main app)
│   ├── calculateInterest.js (Provided calculateTermDeposit externally, which validates inputs and calculates simple or compound interest)
│   ├── searchHelper.js (Helper for matching Keys in an object to a search term (ex. find "At Maturity" in enum))
│   └── validateInput.js (Contains logic for validating term deposit input and several helpers)
└── package.json (contains dependencies for building with node.js)
```

## Assumptions:

-   The calculator is an informational application.
    -   Impact: precision of math library and javascript types are acceptable. The precision probably wouldn't be acceptable for real financial applications.
-   Interest rate is annual (which applies when investment term is "At Maturity" per given example).
    -   Impact: At Maturity applies the interest rate annually but it isn't compounding.

## Design Decisions:

-   All time will be in decimal years.
    -   Impact: Input is simplified as we don't have to handle months and years (ex. 1yr 6mnths)
-   All percentages will be decimal percentages (ex: 0.01 instead of 1%)
    -   Impact: Input is simplified as we don't have to parse out "%" or perform conversion from percentage to decimal percentage, though this likely makes the application more confusing for the end user.
-   Result will be rounded only when shown to the user.
    -   Impact: calculation logic output can be trusted for other informational output (ex. calculating the sum of two term deposit accounts)
-   Errors use console.error() so that they print for the user without additional trace information and make input errors more obvious
    -   Impact: Errors aren't thrown with trace info which makes development harder. Would ideally solve for both in future.

## Tradeoffs:

-   Tradeoffs due to running out of time:
    -   All .js files in scripts folder are untested (opted to "integration test" the main application instead)
    -   User inputs are fairly strict and ideally the app could handle more user friendly inputs like percentages (ex. 3.5%) and durations (ex. 1 year, 6 months, 1y 6m)
    -   Can't currently accept input from cmd line. Ideally the user could use options to indicate what input they want.

## Extensions:

-   To add additional Interest Paid types, add to the enum in `./scripts/constants/investmentTerms.enum.js`
-   To add ongoing monthly contributions:
    -   add a termDepositOngoingContributions.test.js file
    -   add a termDepositOngoingContributions object to test a new type of mock data
    -   add optional termDepositOngoingContributions values to the termDepositInput in app.js
    -   add input validation for termDepositOngoingContributions in validateInput.js
    -   add a the calculation for termDepositOngoingContributions to calculateInterest.js
