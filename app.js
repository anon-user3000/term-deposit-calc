const { calculateTermDeposit } = require("./scripts/calculateInterest");

const termDepositInput = {
	startDeposit: 10000,
	interestRate: 0.011,
	investmentTerm: 3,
	interestPaid: "At Maturity",
};

const app = (input) => {
	return parseFloat(calculateTermDeposit(input).toFixed(2));
};

app(termDepositInput);

module.exports = { app };
