import { getUUID } from "../util/util";
import GameObject from "./GameObject";

/* eslint-disable-next-line */
interface CompositeOptions {}

class Composite {
	uuid: string;
	label: string;
	parent: unknown;
	gameObjects: GameObject[];

	/* eslint-disable-next-line */
	constructor(options: CompositeOptions) {
		this.uuid = getUUID();
	}
}

export default Composite;
export { CompositeOptions };
