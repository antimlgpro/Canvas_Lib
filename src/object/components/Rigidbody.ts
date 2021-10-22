import GameObject from "../GameObject";
import Component from "./Component";

class Rigidbody extends Component {
	constructor(gameObject: GameObject) {
		super(gameObject, "Rigidbody");
	}
}

export default Rigidbody;
