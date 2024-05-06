# term-deposit-calc

CLI for informational term deposit calculation

## How to run:

1. Clone this git repository
2. Install node if you dont have it
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
