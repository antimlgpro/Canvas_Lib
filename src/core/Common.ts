class Common {
	static _nextId: number = 0;

	static NextId() {
		return Common._nextId++;
	}
}

export default Common;
