const { calculateTermDeposit } = require("./scripts/calculateInterest");

const termDepositInput = {
	startDeposit: 10000,
	interestRate: 0.011,
	investmentTerm: 3,
	interestPaid: "Monthly",
	// interestPaid: "At Maturity",
};

const app = (input) => {
	const finalBalance = parseFloat(calculateTermDeposit(input).toFixed(2));
	console.log("Final Balance:", finalBalance);

	return finalBalance;
};

app(termDepositInput);

module.exports = { app };
