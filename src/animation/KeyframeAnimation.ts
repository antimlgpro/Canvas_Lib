import AnimationBase from "./AnimationBase";

class _Keyframe {
	time: number;
	value: number;

	constructor(time: number, value: number) {
		this.time = time;
		this.value = value;
	}
}

class AnimationCurve extends AnimationBase {
	keys: _Keyframe[] = [];

	constructor(keyframes: _Keyframe[]) {
		super();
		this.keys = keyframes;
	}

	get duration() {
		return this.keys.reduce((n, { time }) => n + time, 0);
	}

	addKey(key: _Keyframe) {
		this.keys.push(key);
	}

	removeKey(idx: number) {
		this.keys = this.keys.slice(idx);
	}

	evaluate(time: number) {
		const keys = this.keys;

		const lower = time - 1;
		const upper = time + 1;
		const between = keys.filter(function (item) {
			return item.time > lower && item.time < upper;
		});
		if (between.length < 1) return;

		const reduced = between.reduce((prev, curr) =>
			Math.abs(curr.time - time) < Math.abs(prev.time - time) ? curr : prev
		);

		return reduced.value;
	}

	get numKeys() {
		return this.keys.length;
	}
}

export default AnimationCurve;
export { _Keyframe };
