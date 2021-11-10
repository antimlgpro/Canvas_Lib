import Vertices from "../../math/Vertices";
import { getUUID } from "../../util/util";
import Component from "../components/Component";
import GameObject from "../GameObject";
import Vector from "../../math/Vector";
import Color from "../../util/Color";
import {
	CompList,
	PrefabJson,
	GoType,
	VecType,
	VertArrayType,
	ColorType,
	ParsedGameObject,
	RequiredParams,
	ParsedObject,
} from "./types";

class Prefab {
	GUID: string;
	name: string;

	vertices: Vertices;
	type: string;

	components: CompList[] = [];
	parameters: any = {};

	constructor() {
		this.GUID = getUUID();
	}

	toJson() {
		const components = this.components;
		const objectified = Prefab.classToObject(this);
		const parameters = objectified.parameters;
		delete objectified.parameters;

		type objType = { [GUID: string]: any };
		const object: objType = {};

		const componentIds: string[] = [];
		for (const comp of components) {
			for (const [key, value] of Object.entries(comp)) {
				object[key] = value;
				componentIds.push(key);
			}
		}

		const componentObject = [];
		for (const id of componentIds) {
			componentObject.push({ fileID: id });
		}

		objectified.components = componentObject;
		object[this.GUID] = objectified;

		const { paramObjects, newObjects } = Prefab.convertParameters(parameters);

		const mergedObject = { ...object, ...newObjects };
		mergedObject[this.GUID] = { ...mergedObject[this.GUID], ...paramObjects };

		return JSON.stringify(mergedObject, undefined, 2);
	}

	static fromJson(prefab: PrefabJson) {
		const parsedObjects: ParsedObject[] = [];
		const parsedGameObjects: ParsedGameObject[] = [];

		// todo: Add parsing for components
		for (const [guid, obj] of Object.entries(prefab)) {
			if (obj.type === "GameObject") {
				const go = obj as GoType;
				const newGo = new GameObject(go.name);

				const ids: RequiredParams[] = Object.entries(go)
					.filter(([key, val]) => {
						if (typeof val === "object" && key !== "components") {
							val = val as object;
							return [key, val["fileID"]];
						}
					})
					.map((a) => {
						a[1] = a[1]["fileID"];
						return {
							name: a[0] as keyof GameObject,
							id: a[1],
						};
					});

				parsedGameObjects.push({
					guid: guid,
					gameObject: newGo,
					requiredParams: ids,
				});
			}

			if (obj.type === "Vector") {
				const vec = obj as VecType;
				const newVec = new Vector(vec.x, vec.y);

				parsedObjects.push({ guid: guid, obj: newVec });
			}

			if (obj.type === "VertexArray") {
				const vertArr = obj as VertArrayType;
				const newVertArr = vertArr.vertices.map((vert) => {
					return new Vertices(vert.x, vert.y, vert.index, vert.isInternal);
				});

				parsedObjects.push({ guid: guid, obj: newVertArr });
			}

			if (obj.type === "Color") {
				const color = obj as ColorType;
				const newColor = new Color(color.hexColor);

				parsedObjects.push({ guid: guid, obj: newColor });
			}
		}

		//console.log(parsedObjects);

		for (const go of parsedGameObjects) {
			const gameObject = go.gameObject;
			for (const req of go.requiredParams) {
				const found = parsedObjects.find((v) => v.guid === req.id);
				if (!found) continue;
				if (!gameObject[req.name]) continue;

				try {
					// @ts-ignore
					gameObject[req.name] = found.obj;
				} catch (error) {
					// This is horrible but yea
				}
			}
			return gameObject;
		}
	}

	private static convertParameters(params: any) {
		const dissallowed = ["uuid", "components"];
		const filtered = Object.fromEntries(
			Object.entries(params).filter(([k]) => !dissallowed.includes(k))
		);

		const paramObjects: any = {};
		const newObjects: any = {};
		for (const [key, value] of Object.entries(filtered)) {
			if (typeof value === "object") {
				if (Array.isArray(value)) {
					if (value.length === 0) continue;

					const GUID = getUUID();
					newObjects[GUID] = {
						type: "VertexArray",
						vertices: value,
					};

					paramObjects[key] = { fileID: GUID };
				}

				if (value instanceof Color) {
					const GUID = getUUID();
					newObjects[GUID] = {
						type: "Color",
						hexColor: value.hexColor,
						rgbColor: value.rgbColor,
					};

					paramObjects[key] = { fileID: GUID };
				}
				if (value instanceof Vector) {
					const GUID = getUUID();
					newObjects[GUID] = {
						type: "Vector",
						x: value.x,
						y: value.y,
					};

					paramObjects[key] = { fileID: GUID };
				}
			} else {
				paramObjects[key] = value;
			}
		}

		return { paramObjects, newObjects };
	}

	static prefabFromGameObject(go: GameObject) {
		const prefab = new Prefab();
		prefab.type = "GameObject";

		if (go.components.length !== 0) {
			const components: string[] = [];
			for (const comp of go.components) {
				const { compObject, GUID } = Prefab.convertComponent(comp);
				components.push(GUID);
				prefab.components.push(compObject);
			}
		}

		prefab.parameters = Prefab.classToObject(go);

		return prefab;
	}

	private static convertComponent(comp: Component) {
		const GUID = getUUID();

		const badTypes = [GameObject, Vector];

		const combined = Prefab.classToObject(comp);
		const objKey = [];
		const objVal: any[] = [];
		for (const [key, value] of Object.entries(combined)) {
			let contin = false;
			for (const type of badTypes) {
				if (value instanceof type) {
					contin = true;
					break;
				}
			}
			if (contin) continue;

			objKey.push(key);
			objVal.push(value);
		}

		const object = Object.fromEntries(
			objKey.map((key, index) => [key, objVal[index]])
		);

		const compObject: CompList = { [GUID]: object };
		return { compObject, GUID };
	}

	private static classToObject(_class: any) {
		const keys = Object.keys(_class);
		const values = Object.values(_class);
		const combined = Object.fromEntries(
			keys.map((key, index) => [key, values[index]])
		);

		return combined;
	}
}

export default Prefab;
