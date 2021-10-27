class Common {
	static _nextId = 0;

	static NextId() {
		return Common._nextId++;
	}
}

export default Common;
