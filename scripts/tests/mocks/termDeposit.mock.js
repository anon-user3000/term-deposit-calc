const termDepositBadStartDeposit = [
	{
		startDeposit: 0,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "At Maturity",
		result: 10330,
	},
	{
		startDeposit: 5,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "At Maturity",
		result: 10330,
	},
	{
		startDeposit: 99999999999999,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "At Maturity",
		result: 10330,
	},
];

const termDepositBadInterestRate = [
	{
		startDeposit: 0,
		interestRate: 0.5,
		investmentTerm: 3,
		interestPaid: "At Maturity",
		result: 10330,
	},
];

const termDepositBadInvestmentTerm = [
	{
		startDeposit: 0,
		interestRate: 0.011,
		investmentTerm: 30000,
		interestPaid: "At Maturity",
		result: 10330,
	},
];

const termDepositBadInterestPaid = [
	{
		startDeposit: 0,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "sdogknsoigne",
		result: 10330,
	},
];

const termDepositNullInputs = [
	{
		startDeposit: null,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "At Maturity",
		result: 10330,
	},
	{
		startDeposit: 10000,
		interestRate: null,
		investmentTerm: 3,
		interestPaid: "At Maturity",
		result: 10330,
	},
	{
		startDeposit: 10000,
		interestRate: 0.011,
		investmentTerm: null,
		interestPaid: "At Maturity",
		result: 10330,
	},
	{
		startDeposit: 10000,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: null,
		result: 10330,
	},
];

const termDepositAtMaturityWellFormatted = [
	{
		startDeposit: 10000,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "At Maturity",
		result: 10330,
	},
];

const termDepositWellFormatted = [
	{
		startDeposit: 10000,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "Annually",
		result: 10333.64,
	},
	{
		startDeposit: 10000,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "Quarterly",
		result: 10335.04,
	},
	{
		startDeposit: 10000,
		interestRate: 0.011,
		investmentTerm: 3,
		interestPaid: "Monthly",
		result: 10335.35,
	},
];

module.exports = { termDepositBadStartDeposit, termDepositBadInterestRate, termDepositBadInvestmentTerm, termDepositBadInterestPaid, termDepositNullInputs, termDepositAtMaturityWellFormatted, termDepositWellFormatted };
