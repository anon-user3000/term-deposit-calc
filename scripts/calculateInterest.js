const { InvestmentTermsEnum } = require("./constants/investmentTerms.enum");
const { findObjectByKeyValue } = require("./searchHelper");
const { validateTermDepositInput } = require("./validateInput");

const calculateTermDeposit = ({
	startDeposit,
	interestRate,
	investmentTerm,
	interestPaid,
}) => {
	const termDeposit = {
		startDeposit,
		interestRate,
		investmentTerm,
		interestPaid,
	};

	if (!validateTermDepositInput(termDeposit)) return false;

	let interestPaidTerm = null;
	if (interestPaid === "At Maturity") {
		return calculateSimpleInterest(termDeposit);
	} else {
		interestPaidTerm = findObjectByKeyValue(
			InvestmentTermsEnum,
			interestPaid
		);
	}

	return calculateCompoundInterest({
		...termDeposit,
		interestPaid: interestPaidTerm,
	});
};

// Source for calculation https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
const calculateCompoundInterest = ({
	startDeposit,
	interestRate,
	investmentTerm,
	interestPaid,
}) => {
	return (
		startDeposit *
		Math.pow(1 + interestRate / interestPaid, interestPaid * investmentTerm)
	);
};

// Source for calculation: https://www.calculatorsoup.com/calculators/financial/simple-interest-calculator.php
const calculateSimpleInterest = ({
	startDeposit,
	interestRate,
	investmentTerm,
}) => {
	return startDeposit + startDeposit * interestRate * investmentTerm;
};

module.exports = { calculateTermDeposit };
