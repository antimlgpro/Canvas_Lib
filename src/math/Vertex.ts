import Vector from "./Vector";

class Vertex {
	x: number;
	y: number;
	index: number;
	isInternal: boolean;

	constructor(x: number, y: number, index: number, isInternal: boolean) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.isInternal = isInternal;
	}

	static getCenter(vertices: Vertex[]) {
		const x_list = [];
		const y_list = [];
		for (const vertex of vertices) {
			x_list.push(vertex.x);
			y_list.push(vertex.y);
		}

		const len = vertices.length;

		const _x = x_list.reduce((a, b) => a + b, 0) / len;
		const _y = y_list.reduce((a, b) => a + b, 0) / len;

		return new Vector(_x, _y);
	}

	static Create(points: Vector[]) {
		const vertices: Vertex[] = [];

		for (let i = 0; i < points.length; i++) {
			const point = points[i];
			const vertex = new Vertex(point.x, point.y, i, false);

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

		return Vertex.Create(points);
	}

	static Translate(vertices: Vertex[], vector: Vector, scalar = 1) {
		if (scalar) {
			for (let i = 0; i < Vertex.length; i++) {
				vertices[i].x += vector.x * scalar;
				vertices[i].y += vector.y * scalar;
			}
		} else {
			for (let i = 0; i < Vertex.length; i++) {
				vertices[i].x += vector.x;
				vertices[i].y += vector.y;
			}
		}
	}
}

export default Vertex;
