const { app } = require("../../app");
const {
	termDepositBadStartDeposit,
	termDepositBadInterestRate,
	termDepositBadInvestmentTerm,
	termDepositBadInterestPaid,
	termDepositNullInputs,
	termDepositAtMaturityWellFormatted,
	termDepositWellFormatted,
} = require("./mocks/termDeposit.mock");

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

	test("bad start deposit input", () => {
		termDepositBadStartDeposit.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});

	test("bad interest rate input", () => {
		termDepositBadInterestRate.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});

	test("bad investment term input", () => {
		termDepositBadInvestmentTerm.forEach((termDeposit) => {
			expect(app(termDeposit)).toBeFalsy;
		});
	});

	test("bad interest paid input", () => {
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
