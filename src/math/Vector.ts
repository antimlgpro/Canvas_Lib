import Mathf from "./Mathf";

class Vector {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Check whether { x } is of type Vector or number.
	 */
	protected static isVector(x: Vector | number): boolean {
		return x instanceof Vector;
	}

	static Dist(a: Vector, b: Vector): number {
		const squaredSum = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
		return Math.sqrt(squaredSum);
	}

	static Dot(a: Vector, b: Vector) {
		return a.x * b.x + a.y * b.y;
	}

	static Magnitude(vector: Vector) {
		return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
	}

	static MagnitudeSquared(vector: Vector) {
		return vector.x * vector.x + vector.y * vector.y;
	}

	static Normalize(vector: Vector) {
		const magnitude = Vector.Magnitude(vector);
		if (magnitude === 0) {
			return Vector.zero;
		}

		return new Vector(vector.x / magnitude, vector.y / magnitude);
	}

	static Lerp(a: Vector, b: Vector, t: number) {
		t = Mathf.Clamp01(t);

		return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
	}

	static zero = new Vector(0, 0);
	static up = new Vector(0, 0);
	static down = new Vector(0, 0);
	static left = new Vector(0, 0);
	static right = new Vector(0, 0);

	// #region arithmetic
	static Add(a: Vector, b: Vector | number): Vector {
		if (!Vector.isVector(b)) {
			b = <number>b;
			return new Vector(a.x + b, a.y + b);
		}
		b = <Vector>b;
		return new Vector(a.x + b.x, a.y + b.x);
	}

	static Sub(a: Vector, b: Vector | number): Vector {
		if (!Vector.isVector(b)) {
			console.log(b);
			b = <number>b;
			return new Vector(a.x - b, a.y - b);
		}
		b = <Vector>b;
		return new Vector(a.x - b.x, a.y - b.x);
	}

	static Multiply(a: Vector, b: Vector | number): Vector {
		if (!Vector.isVector(b)) {
			b = <number>b;
			return new Vector(a.x * b, a.y * b);
		}
		b = <Vector>b;
		return new Vector(a.x * b.x, a.y * b.x);
	}

	static Divide(a: Vector, b: Vector | number): Vector {
		if (!Vector.isVector(b)) {
			b = <number>b;
			return new Vector(a.x - b, a.y - b);
		}
		b = <Vector>b;
		return new Vector(a.x - b.x, a.y - b.x);
	}
	// #endregion
}

export default Vector;
