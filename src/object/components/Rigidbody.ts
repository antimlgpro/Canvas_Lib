import Vector from "../../math/Vector";
import GameObject from "../GameObject";
import Component from "./Component";
import Vertices from "../../math/Vertices";
import Transform from "./Transform";

class Rigidbody extends Component {
	transform: Transform;

	position: Vector;
	positionPrev: Vector;
	rotation: Vector;
	rotationPrev: Vector;

	velocity: Vector;
	force: Vector;

	friction: number = 0.1;
	frictionStatic: number = 0.5;
	frictionAir: number = 0.1;

	mass: number = 1;
	speed: number = 0;

	constructor(gameObject: GameObject) {
		super(gameObject, "Rigidbody");

		this.transform = <Transform>gameObject.GetComponent("Transform");

		this.position = this.transform.position;
		this.positionPrev = this.position;
		this.rotation = this.transform.rotation;
		this.rotationPrev = this.rotation;

		this.velocity = Vector.zero;
		this.force = Vector.zero;
	}

	Start() {}

	Update(deltaTime: number) {
		var deltaTimeSquared = Math.pow(deltaTime, 2);

		// from the previous step
		var frictionAir = 1 - this.frictionAir,
			velocityPrevX = this.position.x - this.positionPrev.x,
			velocityPrevY = this.position.y - this.positionPrev.y;

		console.log(this.velocity);

		// update velocity with Verlet integration
		this.velocity.x =
			velocityPrevX * frictionAir +
			(this.force.x / this.mass) * deltaTimeSquared;
		this.velocity.y =
			velocityPrevY * frictionAir +
			(this.force.y / this.mass) * deltaTimeSquared;

		this.positionPrev = this.position;
		this.position = Vector.Add(this.velocity, this.position);

		this.speed = Vector.Magnitude(this.velocity);

		this.transform.SetPosition(this.position);
		//this.transform.rotation = this.rotation;
	}

	SetPosition(position: Vector) {
		var delta = Vector.Sub(position, this.position);
		this.position = position;

		Vertices.Translate(this.gameObject.vertices, delta);
	}

	Translate(translation: Vector) {
		this.position = Vector.Add(this.position, translation);
	}

	AddForce(force: Vector) {
		this.force = Vector.Add(force, this.force);
	}
}

export default Rigidbody;
