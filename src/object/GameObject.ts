import Vector from "../math/Vector";
import Vertices from "../math/Vertices";
import Component from "./components/Component";
import { getUUID } from "../util/util";

interface ObjectOptions {
	strokeColor?: string;
	fillColor?: string;
}

class GameObject {
	name: string;
	uuid: string;
	components: Component[] = [];

	// rendering
	vertices: Vertices[];
	strokeColor = "#ff00ff";
	fillColor = "#ff00ff";

	// Transform
	position: Vector = Vector.zero;
	rotation: Vector = Vector.zero;

	parent: GameObject;
	children: GameObject[] = [];

	constructor(
		name: string,
		position?: Vector,
		vertices?: Vertices[],
		options?: ObjectOptions
	) {
		this.name = name;
		this.uuid = getUUID();

		this.vertices = vertices ?? [];
		this.position = position ?? Vector.zero;

		if (options) {
			this.strokeColor = options.strokeColor ?? this.strokeColor;
			this.fillColor = options.fillColor ?? this.fillColor;
		}
	}

	// COMPONENT STUFF
	AddComponent(comp: Component) {
		this.components.push(comp);
	}

	GetComponent(type: string) {
		for (const comp of this.components) {
			if (comp.type === type) {
				return comp;
			}
		}
	}

	GetComponents() {
		return this.components;
	}

	get canRender() {
		return this.vertices !== [];
	}
}

export default GameObject;
export { ObjectOptions };
