import Vector from "../math/Vector";
import Vertices from "../math/Vertices";
import Component from "./components/Component";
import { getUUID } from "../util/util";
import Color from "../util/Color";

interface ObjectOptions {
	strokeColor?: Color;
	fillColor?: Color;
}

class GameObject {
	name: string;
	uuid: string;
	components: Component[] = [];

	// rendering
	vertices: Vertices[];
	_canRender: boolean;
	strokeColor = new Color("#ff00ff");
	fillColor = new Color("#ff00ff");

	// Transform
	position: Vector = Vector.zero;
	rotation: Vector = Vector.zero;
	_localPosition: Vector = Vector.zero;
	_localRotation: Vector = Vector.zero;

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

	// todo: add local position
	get localPosition() {
		if (this.parent === undefined) {
			return this.rotation;
		} else {
			return this._localPosition;
		}
	}
	// todo: add local position
	set localPosition(val: Vector) {
		this._localRotation = val;
	}

	// todo: add local position
	get localRotation() {
		if (this.parent === undefined) {
			return this.rotation;
		} else {
			return this._localRotation;
		}
	}

	// todo: add local position
	set localRotation(val: Vector) {
		this._localRotation = val;
	}

	SetPosition(vec: Vector) {
		this.position = vec;
	}

	SetRotation(vec: Vector) {
		this.rotation = vec;
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
		this._canRender = this.vertices !== [];
		return this._canRender;
	}

	set canRender(val) {
		if (this.vertices !== []) {
			this._canRender = val;
		} else {
			this._canRender = false;
		}
	}
}

export default GameObject;
export { ObjectOptions };
