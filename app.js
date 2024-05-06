const { calculateTermDeposit } = require("./scripts/calculateInterest");
const { validateTermDepositInput } = require("./scripts/validateInput");

const termDepositInput = {
	startDeposit: 10000,
	interestRate: 0.011,
	investmentTerm: 3,
	interestPaid: "Monthly",
	// interestPaid: "At Maturity",
};

const app = (input) => {
	let finalBalance = null;
	if (validateTermDepositInput(input)) {
		finalBalance = parseFloat(calculateTermDeposit(input).toFixed(2));
		console.log("Final Balance:", finalBalance);
	} else {
		return false;
	}

	return finalBalance;
};

app(termDepositInput);

module.exports = { app };
