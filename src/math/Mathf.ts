class Mathf {
	static Clamp(value: number, min: number, max: number) {
		return Math.max(min, Math.min(value, max));
	}

	static Clamp01(value: number) {
		if (value < 0) {
			return 0;
		} else if (value > 1) {
			return 1;
		} else {
			return value;
		}
	}

	static Repeat(t: number, length: number) {
		return Mathf.Clamp(t - Math.floor(t / length) * length, 0, length);
	}

	static PingPong(t: number, length: number) {
		t = Mathf.Repeat(t, length * 2);
		return length - Math.abs(t - length);
	}

	static Lerp(a: number, b: number, t: number) {
		return a + (b - a) * t;
	}
}

export default Mathf;
