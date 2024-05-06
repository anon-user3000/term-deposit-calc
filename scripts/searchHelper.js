const findObjectByKeyValue = (objects, searchTerm, err) => {
	if (searchTerm !== null && searchTerm !== undefined) {
		const found =
			objects[
				Object.keys(objects).find(
					(key) =>
						key.toLowerCase() ===
						searchTerm.toLowerCase().replace(" ", "")
				)
			];
		if (found) {
			return found;
		}
	}
	if (err) {
		console.error(err);
	}
	return false;
};

module.exports = { findObjectByKeyValue };