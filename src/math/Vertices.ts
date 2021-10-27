import Vector from "./Vector";

class Vertices {
	x: number;
	y: number;
	index: number;
	body: any;
	isInternal: boolean;

	constructor(
		x: number,
		y: number,
		index: number,
		body: any,
		isInternal: boolean
	) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.body = body;
		this.isInternal = isInternal;
	}

	static Create(points: Vector[]) {
		const vertices: Vertices[] = [];

		for (let i = 0; i < points.length; i++) {
			const point = points[i];
			const vertex = new Vertices(point.x, point.y, i, undefined, false);

			vertices.push(vertex);
		}

		return vertices;
	}

	static FromPath(path: string) {
		const points: Vector[] = [];
		const pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi;

		const matches = path.match(pathPattern);
		if (matches === null) return null;

		for (const a of matches) {
			const [, x, y] = a.split(" ");
			points.push(new Vector(parseFloat(x), parseFloat(y)));
		}

		return Vertices.Create(points);
	}

	static Translate(vertices: Vertices[], vector: Vector, scalar = 1) {
		if (scalar) {
			for (let i = 0; i < vertices.length; i++) {
				vertices[i].x += vector.x * scalar;
				vertices[i].y += vector.y * scalar;
			}
		} else {
			for (let i = 0; i < vertices.length; i++) {
				vertices[i].x += vector.x;
				vertices[i].y += vector.y;
			}
		}
	}
}

export default Vertices;
