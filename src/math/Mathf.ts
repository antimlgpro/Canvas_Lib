const Clamp = (value: number, min: number, max: number) => {
	return Math.max(min, Math.min(value, max));
};

const Clamp01 = (value: number) => {
	if (value < 0) {
		return 0;
	} else if (value > 1) {
		return 1;
	} else {
		return value;
	}
};

const Repeat = (t: number, length: number) => {
	return Clamp(t - Math.floor(t / length) * length, 0, length);
};

const PingPong = (t: number, length: number) => {
	t = Repeat(t, length * 2);
	return length - Math.abs(t - length);
};

const Lerp = (a: number, b: number, t: number) => {
	return a + (b - a) * t;
};

const AngleToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
};

export { Clamp, Clamp01, Repeat, PingPong, Lerp, AngleToRadians };
