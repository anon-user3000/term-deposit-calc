const { findObjectByKeyValue } = require("./searchHelper");
const { InvestmentTermsEnum } = require("./constants/investmentTerms.enum");

const validateTermDepositInput = ({
	startDeposit,
	interestRate,
	investmentTerm,
	interestPaid,
}) => {
	if (
		isValidNumberInput("Start Deposit", startDeposit, 100, 10000000) &&
		isValidNumberInput("Interest Rate", interestRate, 0.001, 0.2) &&
		isValidNumberInput("Investment Term", investmentTerm, 0.25, 10) &&
		findObjectByKeyValue(InvestmentTermsEnum, interestPaid)
	) {
		return true;
	} else {
		return false;
	}
};

const isValidNumberInput = (name, input, min, max, err) => {
	if (input !== null && input !== undefined) {
		if (isNumber(input, `${name} must be a number.`)) {
			if (min && max) {
				if (
					isInRange(
						input,
						min,
						max,
						`${name} must be greater than or equal to ${min} and less than or equal to ${max}`
					)
				) {
					return true;
				}
			} else {
				return true;
			}
		}
	}
	return false;
};

const isNumber = (value, err) => {
	if (typeof value === "number") {
		return true;
	} else {
		console.error(err);
		return false;
	}
};

const isInRange = (value, min, max, err) => {
	if (value >= min && value <= max) {
		return true;
	} else {
		console.error(err);
		return false;
	}
};

module.exports = { validateTermDepositInput };
