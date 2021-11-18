import Vector from "../math/Vector";

class Bounds {
	x: number;
	y: number;

	width: number;
	height: number;

	constructor(x: number, y: number, w: number, h: number) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	}

	containsPoint(point: Vector) {
		const x2 = this.x + this.width;
		const y2 = this.y + this.height;

		const D =
			point.x > this.x && point.x < x2 && point.y > this.y && point.y < y2;

		return D;
	}

	intersects(other: Bounds) {
		const left1 = this.x;
		const right1 = this.x + this.width;
		const bottom1 = this.y + this.height;
		const top1 = this.y;

		const left2 = other.x;
		const right2 = other.x + other.width;
		const bottom2 = other.y + other.height;
		const top2 = other.y;

		const x_overlap = Math.max(
			0,
			Math.min(right1, right2) - Math.max(left1, left2)
		);
		const y_overlap = Math.max(
			0,
			Math.min(bottom1, bottom2) - Math.max(top1, top2)
		);

		const overlapArea = x_overlap * y_overlap;

		return overlapArea > 0;
	}

	translate(translation: Vector) {
		this.x += translation.x;
		this.y += translation.y;
	}
}

export default Bounds;
