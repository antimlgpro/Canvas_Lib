import Common from "../core/Common";
import GameObject from "./GameObject";

/* eslint-disable-next-line */
interface CompositeOptions {}

class Composite {
	id: number;
	label: string;
	parent: unknown;
	gameObjects: GameObject[];

	/* eslint-disable-next-line */
	constructor(options: CompositeOptions) {
		this.id = Common.NextId();
	}
}

export default Composite;
export { CompositeOptions };
