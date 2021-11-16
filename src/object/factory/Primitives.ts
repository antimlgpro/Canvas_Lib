import Vector from "../../math/Vector";
import Vertex from "../../math/Vertex";
import { AngleToRadians } from "../../math/Mathf";
import GameObject, { ObjectOptions } from "../GameObject";

class Primitives {
	static Rectangle(
		x: number,
		y: number,
		width: number,
		height: number,
		options: ObjectOptions
	) {
		const label = "Rectangle";
		const position = new Vector(x, y);
		const vertices: Vertex[] = [
			new Vertex(x, y, 0),
			new Vertex(x + width, y, 1),
			new Vertex(x + width, y + width, 2),
			new Vertex(x, y + width, 3),
		];

		return new GameObject(label, position, vertices, options);
	}

	static Circle(x: number, y: number, radius: number, options: ObjectOptions) {
		const label = "Circle";
		const position = new Vector(x, y);

		const vertices: Vertex[] = [];
		const numVertices = 50;
		const spacing = 360 / numVertices;

		for (let i = 0; i < numVertices; i++) {
			const x = Math.cos(AngleToRadians(i * spacing)) * radius;
			const y = Math.sin(AngleToRadians(i * spacing)) * radius;
			vertices.push(new Vertex(x, y, i, false));
		}

		return new GameObject(label, position, vertices, options);
	}

	// todo: Figure out triangle
	//static Triangle(x, y) {}
}

export default Primitives;
