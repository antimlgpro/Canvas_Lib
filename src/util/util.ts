const getUUID = () => {
	const uuid = window.URL.createObjectURL(new Blob([])).substr(-36);
	return uuid;
};

function* combinations<T>(
	array: any[],
	length: number
): IterableIterator<any[]> {
	for (let i = 0; i < array.length; i++) {
		if (length === 1) {
			yield [array[i]];
		} else {
			const remaining = combinations(
				array.slice(i + 1, array.length),
				length - 1
			);
			for (const next of remaining) {
				yield [array[i], ...next];
			}
		}
	}
}

export { getUUID, combinations };
