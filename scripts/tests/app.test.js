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

	test("compounding, bad start deposit input", () => {
		termDepositBadStartDeposit.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});

	test("compounding, bad interest rate input", () => {
		termDepositBadInterestRate.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});

	test("compounding, bad investment term input", () => {
		termDepositBadInvestmentTerm.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});

	test("compounding, bad interest paid input", () => {
		termDepositBadInterestPaid.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});

	test("null inputs", () => {
		termDepositNullInputs.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});
});

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
