import Engine, { EngineOptions } from "./core/Engine";
import Primitives from "./factory/Primitives";
import GameObject from "./object/GameObject";
import Transform from "./object/components/Transform";
import Render, { RenderOptions } from "./render/Render";
import Vector from "./math/Vector";
import Mathf from "./math/Mathf";
import Rigidbody from "./object/components/Rigidbody";

const engineOptions: EngineOptions = {};
const renderOptions: RenderOptions = {
	fps: 60,
	width: 500,
	height: 500,
	hasBounds: false,
};

var _Engine: Engine;
var _Render: Render;

const gameLoop = () => {
	_Engine.Update();
};

window.onload = () => {
	_Engine = new Engine(engineOptions);
	_Render = new Render(renderOptions);

	_Engine.render = _Render;

	var a: GameObject;
	a = <GameObject>Primitives.Rectangle(0, 0, 100, 100);
	a.AddComponent(new Rigidbody(a));
	_Engine.AddGameObject(a);

	a = <GameObject>Primitives.Rectangle(100, 30, 75, 75);
	a.AddComponent(new Rigidbody(a));
	_Engine.AddGameObject(a);

	_Render.Run();

	setInterval(gameLoop, 1000 / 60);
};
