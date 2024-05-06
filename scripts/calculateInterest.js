// Source for calculation is https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
const calculateTermDeposit = ({
	startDeposit,
	interestRate,
	investmentTerm,
	interestPaid,
}) => {
	let interestPaidTerm = null;

	const termDeposit = {
		startDeposit,
		interestRate,
		investmentTerm,
		interestPaid,
	};

	if (interestPaid === "At Maturity") {
		return calculateSimpleInterest(termDeposit);
	} else if (interestPaid === "Monthly") {
		interestPaidTerm = 12;
	} else if (interestPaid === "Quarterly") {
		interestPaidTerm = 4;
	} else if (interestPaid === "Annually") {
		interestPaidTerm = 1;
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
