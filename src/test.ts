import { ObjectOptions, Primitives } from "./core";
import Engine, { EngineOptions } from "./core/Engine";
import Input from "./input/Input";
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

	if (Input.getButtonDown("Forward")) {
		console.log("forward down");
	}

	if (Input.getButtonUp("Forward")) {
		console.log("forward up");
	}
};

window.onload = () => {
	_Engine = new Engine(engineOptions);
	_Render = new Render(renderOptions);
	_Engine.render = _Render;

	const obj = Primitives.Circle(300, 300, 100, {
		fillColor: new Color("#3464eb"),
	});
	_Engine.AddGameObject(obj);
	console.log(obj);

	Input.addListener();
	Input.addMapping("Forward", "KeyW");

	_Render.Run();
	setInterval(gameLoop, 1000 / 60);
};
