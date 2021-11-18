import {
	GameObject,
	PingPong,
	Primitives,
	Vector,
	Engine,
	EngineOptions,
	Render,
	RenderOptions,
} from "./core";
import CollisionModule from "core/modules/CollisionModule";
import Color from "util/Color";

const engineOptions: EngineOptions = {
	modules: [new CollisionModule()],
};
const renderOptions: RenderOptions = {
	fps: 60,
	width: 600,
	height: 600,
	hasBounds: false,
	center: true,
};

let _Engine: Engine;
let _Render: Render;

let go1: GameObject;

let elapsed = 0;

const gameLoop = () => {
	_Engine.Update();

	const t = elapsed / 300;
	go1.position = Vector.Lerp(
		new Vector(50, 50),
		new Vector(550, 550),
		PingPong(t, 1)
	);

	elapsed += 1;
};

window.onload = () => {
	_Engine = new Engine(engineOptions, renderOptions);
	_Render = _Engine.render;

	go1 = Primitives.Circle(200, 300, 70, {
		fillColor: new Color("#2370cf"),
	});
	_Engine.AddGameObject(go1);

	_Render.Run();
	setInterval(gameLoop, 1000 / 60);
};
