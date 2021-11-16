import Vector from "../../math/Vector";
import GameObject from "../GameObject";
import Component from "./Component";
import Vertices from "../../math/Vertex";

/**
 * @deprecated Gameobject has these functions instead
 */
class Transform extends Component {
	position: Vector = Vector.zero;
	positionPrev: Vector = Vector.zero;
	rotation: Vector = Vector.zero;

	parent: GameObject;
	children: GameObject[] = [];

	constructor(gameObject: GameObject, position?: Vector) {
		super(gameObject, "Transform");
		this.position = position ?? Vector.zero;
	}

	SetPosition(position: Vector) {
		const delta = Vector.Sub(position, this.position);
		this.position = position;

		Vertices.Translate(this.gameObject.vertices, delta);
		//Bounds.update(part.bounds, part.vertices, body.velocity);
	}
}

export default Transform;
