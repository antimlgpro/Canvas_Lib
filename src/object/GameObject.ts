import Common from "../core/Common";
import Vector from "../math/Vector";
import Vertices from "../math/Vertices";
import Transform from "./components/Transform";
import Component from "./components/Component";

class GameObject {
	name: string;
	id: number;

	components: Component[] = [];

	vertices: Vertices[];

	constructor(name: string, position: Vector, vertices?: Vertices[]) {
		this.name = name;
		this.id = Common.NextId();

		this.vertices = vertices ?? [];

		let transform = new Transform(this);
		transform.SetPosition(position);
		this.AddComponent(transform);
	}

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
}

export default GameObject;
