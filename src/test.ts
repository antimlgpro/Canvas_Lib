import Engine, { EngineOptions } from "./core/Engine";
import Primitives from "./factory/Primitives";
import GameObject, { ObjectOptions } from "./object/GameObject";
import Render, { RenderOptions } from "./render/Render";
import Color from "./util/Color";
import Prefab from "./object/prefab/Prefab";
import Transform from "./object/components/Transform";
import { Vector } from "./core";

import rectPrefab from "./testPrefabs/rect.prefab";

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

	/* 	const options: ObjectOptions = { fillColor: new Color("#cb0020") };
	const rect = <GameObject>Primitives.Rectangle(200, 300, 100, 100, options);
	rect.AddComponent(new Transform(rect, new Vector(123, 456)));
	_Engine.AddGameObject(rect); */

	const rect = <GameObject>Prefab.fromJson(rectPrefab);
	_Engine.AddGameObject(rect);

	_Render.Run();
	setInterval(gameLoop, 1000 / 60);
};
