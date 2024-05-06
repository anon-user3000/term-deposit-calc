const { InvestmentTermsEnum } = require("./constants/investmentTerms.enum");
const { findObjectByKeyValue } = require("./searchHelper");
const { validateTermDepositInput } = require("./validateInput");

// Source for calculation is https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
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

const calculateSimpleInterest = ({
	startDeposit,
	interestRate,
	investmentTerm,
}) => {
	return startDeposit + startDeposit * interestRate * investmentTerm;
};

module.exports = { calculateTermDeposit };
