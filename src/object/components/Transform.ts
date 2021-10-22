import Vector from "../../math/Vector";
import GameObject from "../GameObject";
import Component from "./Component";
import Vertices from "../../math/Vertices";

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
		var delta = Vector.Sub(position, this.position);
		this.position = position;
		/*
		this.positionPrev.x += delta.x;
		this.positionPrev.y += delta.y;

		this.position.x += delta.x;
		this.position.y += delta.y;
		*/

		Vertices.Translate(this.gameObject.vertices, delta);
		//Bounds.update(part.bounds, part.vertices, body.velocity);
	}
}

export default Transform;
