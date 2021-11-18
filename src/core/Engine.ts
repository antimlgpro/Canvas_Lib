import GameObject from "object/GameObject";
import Render, { RenderOptions } from "./Render";
import EngineModule from "./modules/EngineModule";

interface Timing {
	delta: number;
	timestamp: number;
	lastDelta: number;
	lastElapsed: number;
}

interface EngineOptions {
	modules?: EngineModule[];
}

class Engine {
	timing: Timing = {
		delta: 0,
		timestamp: 0,
		lastDelta: 0,
		lastElapsed: 0,
	};
	debugInfo = true;
	version = "0.0.1";

	modules: EngineModule[];
	render: Render;
	gameObjects: GameObject[];

	constructor(options: EngineOptions, renderOptions: RenderOptions) {
		this.gameObjects = [];
		this.modules = [];

		this.render = new Render(renderOptions);

		if (options.modules) {
			options.modules.forEach((mod) => this.AddModule(mod));
		}

		this.Init();
	}

	private Init() {
		if (this.debugInfo) {
			console.log("===== Engine =====");
			console.log("Version:", this.version);
			console.log("Renderer:");
			console.log("  Fps:", this.render.fps);
			console.log("  Background color:", this.render.backgroundColor.hexColor);

			console.log("Loaded modules:");

			this.modules.forEach((mod, i) => {
				console.log(`  [${i}]: ${mod.moduleName}`);
			});
			console.log("==================");
		}

		this.PostInit();
	}

	private PostInit() {
		this.modules.forEach((mod) => mod.init());
	}

	AddModule(module: EngineModule) {
		module.engine = this;
		this.modules.push(module);
	}

	AddGameObject(gameObject: GameObject) {
		this.gameObjects.push(gameObject);
		this.render.AddGameObject(gameObject);
	}

	Update(delta?: number) {
		const startTime = Date.now();
		const deltaTime = delta || 1000 / 60;

		this.timing.delta = deltaTime;
		this.timing.timestamp += 1;
		this.timing.lastDelta = deltaTime;

		for (const go of this.gameObjects) {
			const comps = go.GetComponents();
			for (const comp of comps) {
				comp.Update(deltaTime);
			}
		}

		this.timing.lastElapsed = Date.now() - startTime;

		if (this.debugInfo) {
			if (this.timing.timestamp % 15 === 0) {
				console.log("Time for frame:", this.timing.lastElapsed);
			}
		}
	}
}

export default Engine;
export { EngineOptions };
