# term-deposit-calc

CLI for informational term deposit calculation

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

## Assumptions:

-   The calculator is an informational application (precision of math library and javascript types are acceptable).
-   Interest rate is annual (which applies when investment term is "At Maturity" per given example).

## Design Decisions:

-   All time will be in decimal years.
-   All percentages will be decimal percentages (ex: 0.01 instead of 1%)
-   Result will be rounded only when shown to the user.

## Tradeoffs:

-   Tradeoffs due to running out of time:
    -   All .js files in scripts folder are untested (opted to "integration test" the main application instead)
    -   Can't currently accept input from cmd line
