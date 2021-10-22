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
		var vertices: Vertices[] = [];

		for (var i = 0; i < points.length; i++) {
			let point = points[i];
			let vertex = new Vertices(point.x, point.y, i, undefined, false);

			vertices.push(vertex);
		}

		return vertices;
	}

	static FromPath(path: string) {
		let points: Vector[] = [];
		let pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi;

		let matches = path.match(pathPattern);
		if (matches === null) return null;

		for (const a of matches) {
			let [_, x, y] = a.split(" ");
			points.push(new Vector(parseFloat(x), parseFloat(y)));
		}

		return Vertices.Create(points);
	}

	static Translate(vertices: Vertices[], vector: Vector, scalar: number = 1) {
		var i;
		if (scalar) {
			for (i = 0; i < vertices.length; i++) {
				vertices[i].x += vector.x * scalar;
				vertices[i].y += vector.y * scalar;
			}
		} else {
			for (i = 0; i < vertices.length; i++) {
				vertices[i].x += vector.x;
				vertices[i].y += vector.y;
			}
		}
	}
}

export default Vertices;
