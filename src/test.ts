import Engine, { EngineOptions } from "./core/Engine";
import Primitives from "./factory/Primitives";
import GameObject, { ObjectOptions } from "./object/GameObject";
import Render, { RenderOptions } from "./render/Render";
import Color from "./util/Color";

const engineOptions: EngineOptions = {};
const renderOptions: RenderOptions = {
	fps: 60,
	width: 600,
	height: 600,
	hasBounds: false,
	center: true,
};

let _Engine: Engine;
let _Render: Render;

const gameLoop = () => {
	_Engine.Update();
};

window.onload = () => {
	_Engine = new Engine(engineOptions);
	_Render = new Render(renderOptions);
	_Engine.render = _Render;

	const options: ObjectOptions = {
		fillColor: new Color("#cb0020"),
	};
	const a = <GameObject>Primitives.Rectangle(200, 300, 100, 100, options);
	_Engine.AddGameObject(a);

	_Render.Run();
	setInterval(gameLoop, 1000 / 60);
};
