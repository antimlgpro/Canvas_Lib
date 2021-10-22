import Engine, { EngineOptions } from "./core/Engine";
import Primitives from "./factory/Primitives";
import GameObject from "./object/GameObject";
import Transform from "./object/components/Transform";
import Render, { RenderOptions } from "./render/Render";
import Vector from "./math/Vector";

const engineOptions: EngineOptions = {};
const renderOptions: RenderOptions = {
	fps: 60,
	width: 500,
	height: 500,
	hasBounds: false,
};

var _Engine: Engine;
var _Render: Render;

window.onload = () => {
	_Engine = new Engine(engineOptions);
	_Render = new Render(renderOptions);

	let rect = <GameObject>Primitives.Rectangle(100, 100, 100, 100);
	_Render.bodies.push(rect);

	let transform = <Transform>rect.GetComponent("Transform");

	transform.SetPosition(new Vector(400, 400));

	_Render.Run();
};
