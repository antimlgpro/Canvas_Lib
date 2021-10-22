import Common from "../core/Common";
import GameObject from "./GameObject";

interface CompositeOptions {}

class Composite {
	id: number;
	label: string;
	parent: unknown;
	gameObjects: GameObject[];

	static Create(options: CompositeOptions) {
		let composite = new Composite();
		// todo: add options
		composite.id = Common.NextId();

		return composite;
	}
}

export default Composite;
export { CompositeOptions };
