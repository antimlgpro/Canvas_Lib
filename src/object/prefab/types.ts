import { Vector, Vertices } from "../../core";
import Color from "../../util/Color";
import GameObject from "../GameObject";

export interface CompList {
	[GUID: string]: object;
}
export interface PrefabJson {
	[GUID: string]: PrefabObject;
}
export interface PrefabObject {
	type: string;
}
export interface GUIDConnection {
	fileId: string;
}
export interface GoType extends PrefabObject {
	components: GUIDConnection[];
	name: string;
}
export interface VecType extends PrefabObject {
	x: number;
	y: number;
}
export interface VertArrayType extends PrefabObject {
	vertices: VertType[];
}
export interface VertType {
	x: number;
	y: number;
	index: number;
	isInternal: boolean;
}
export interface ColorType extends PrefabObject {
	hexColor: string;
	rgbColor: string;
}

export interface RequiredParams {
	name: keyof GameObject;
	id: string;
}

export interface ParsedGameObject {
	requiredParams: RequiredParams[];
	guid: string;
	gameObject: GameObject;
}

export interface ParsedObject {
	guid: string;
	obj: Color | Vector | Vertices[] | GameObject;
}
