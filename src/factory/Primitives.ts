import Vector from "../math/Vector";
import Vertices from "../math/Vertices";
import GameObject from "../object/GameObject";

class Primitives {
	static Rectangle(x: number, y: number, width: number, height: number) {
		const label = "Rectangle";
		const position = new Vector(x, y);
		const vertices = Vertices.FromPath(
			"L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height
		);
		if (vertices === null) return;

		return new GameObject(label, position, vertices);
	}
}

export default Primitives;
