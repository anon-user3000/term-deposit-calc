const findObjectByKeyValue = (objects, searchTerm, err) => {
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
	} else {
		if (err) {
			console.error();
		}
		return false;
	}
};

module.exports = { findObjectByKeyValue };
