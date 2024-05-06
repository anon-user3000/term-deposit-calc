const { app } = require("../../app");

describe("Testing main app", () => {
	test("at maturity, well formatted input", () => {
		termDeposit = termDepositAtMaturityWellFormatted[0];
		expect(app(termDeposit)).toEqual(termDeposit.result);
	});

	test("compounding, well formatted input", () => {
		termDepositWellFormatted.forEach((termDeposit) => {
			expect(app(termDeposit)).toEqual(termDeposit.result);
		});
	});
});

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
