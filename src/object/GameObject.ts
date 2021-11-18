import Vector from "../math/Vector";
import Vertices from "../math/Vertex";
import Component from "./components/Component";
import { getUUID } from "../util/util";
import Color from "../util/Color";
import Vertex from "../math/Vertex";
import Bounds from "../math/Bounds";
import { minBoundingRect } from "../math/ConvexHull";

interface ObjectOptions {
	strokeColor?: Color;
	fillColor?: Color;
	bounds?: Bounds;
}

class GameObject {
	name: string;
	uuid: string;
	components: Component[] = [];

	// rendering
	vertices: Vertices[];
	_isActive = true;
	strokeColor = new Color("#ff00ff");
	fillColor = new Color("#ff00ff");

	// Transform
	private _position: Vector = Vector.zero;
	private _rotation: Vector = Vector.zero;
	private _localPosition: Vector = Vector.zero;
	private _localRotation: Vector = Vector.zero;

	parent: GameObject;
	children: GameObject[] = [];

	// Collision
	boundingBox: Bounds;

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
			this.boundingBox =
				options.bounds ?? this.boundsFromVertices(this.vertices);
		}
	}

	get center() {
		const center = Vertex.getCenter(this.vertices);
		return center; //new Vector(this.position.x + center.x, this.position.y + center.y);
	}

	get position() {
		if (this.parent === undefined) {
			return this._position;
		} else {
			return this.localPositionToWorld(this._localPosition, this.parent);
		}
	}

	set position(value: Vector) {
		const translation = new Vector(
			value.x - this._position.x,
			value.y - this._position.y
		);

		if (this.boundingBox) {
			this.boundingBox.translate(translation);
		}

		this._position = value;
	}
	// todo: add local position
	get localPosition() {
		if (this.parent === undefined) {
			return this._position;
		} else {
			return this._localPosition;
		}
	}
	// todo: add local position
	set localPosition(val: Vector) {
		this._localPosition = val;
	}
	// todo: add local position
	get localRotation() {
		if (this.parent === undefined) {
			return this._rotation;
		} else {
			return this._localRotation;
		}
	}
	// todo: add local position
	set localRotation(val: Vector) {
		this._localRotation = val;
	}

	private localPositionToWorld(local: Vector, parent: GameObject) {
		const worldPos = new Vector(
			parent.position.x + local.x,
			parent.position.y + local.y
		);
		return worldPos;
	}

	boundsFromVertices(verts: Vertex[]) {
		const rect = minBoundingRect(verts);

		rect.map((e) => {
			e.x += this.position.x;
			e.y += this.position.y;
			return e;
		});

		const w = rect[2].x - rect[0].x;
		const h = rect[2].y - rect[0].y;

		return new Bounds(rect[0].x, rect[0].y, w, h);
	}

	SetPosition(vec: Vector) {
		this._position = vec;
	}

	SetRotation(vec: Vector) {
		this._rotation = vec;
	}

	SetParent(gameObject: GameObject, keepWorldPosition = true) {
		this.parent = gameObject;
		gameObject.AddChild(this);
		const parentPos = this.parent.position;

		if (keepWorldPosition) {
			this.localPosition = new Vector(
				this._position.x - parentPos.x,
				this._position.y - parentPos.y
			);
		}
	}

	AddChild(gameObject: GameObject) {
		this.children.push(gameObject);
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

	get hasVertices() {
		return this.vertices.length > 0;
	}

	get isActive() {
		return this._isActive;
	}

	set isActive(val) {
		this._isActive = val;
	}
}

export default GameObject;
export { ObjectOptions };
