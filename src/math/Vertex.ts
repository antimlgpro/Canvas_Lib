import Vector from "./Vector";

class Vertex {
	x: number;
	y: number;
	index: number;
	isInternal: boolean;

	constructor(x: number, y: number, index: number, isInternal = false) {
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
