const getUUID = () => {
	const uuid = window.URL.createObjectURL(new Blob([])).substr(-36);
	return uuid;
};

export { getUUID };
