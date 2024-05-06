const { calculateTermDeposit } = require("./scripts/calculateInterest");
const { validateTermDepositInput } = require("./scripts/validateInput");

/**
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

const app = (input) => {
	let finalBalance = null;
	if (validateTermDepositInput(input)) {
		finalBalance = parseFloat(calculateTermDeposit(input).toFixed(2));
		console.log(`Final Balance: $${finalBalance} based on:`);
		console.log(`Start Deposit of $${input.startDeposit}`);
		console.log(`Interest Rate of ${input.interestRate}`);
		console.log(`Investment Term of ${input.investmentTerm}yrs`);
		console.log(`With interest paid ${input.interestPaid}.`);
	} else {
		return false;
	}
	return finalBalance;
};

app(termDepositInput);

module.exports = { app };
