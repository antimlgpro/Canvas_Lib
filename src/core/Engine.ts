import Vector from "../math/Vector";
import GameObject from "../object/GameObject";
import Render from "../render/Render";

interface Timing {
	delta: number;
	timestamp: number;
	lastDelta: number;
	lastElapsed: number;
}

/* eslint-disable-next-line */
interface EngineOptions {}

class Engine {
	modules: Module[];
	timing: Timing = {
		delta: 0,
		timestamp: 0,
		lastDelta: 0,
		lastElapsed: 0,
	};
	gravity: Vector = new Vector(0, 1);
	gravityScale = 0.001;

	render: Render;
	gameObjects: GameObject[];

	/* eslint-disable-next-line */
	constructor(options: EngineOptions) {
		// todo add options
		this.gameObjects = [];
	}

	AddGameObject(gameObject: GameObject) {
		this.gameObjects.push(gameObject);

		this.render.AddGameObject(gameObject);
	}

	Update(delta?: number) {
		const startTime = Date.now();
		const deltaTime = delta || 1000 / 60;

		this.timing.delta = deltaTime;
		this.timing.timestamp += deltaTime;
		this.timing.lastDelta = deltaTime;

		for (const go of this.gameObjects) {
			const comps = go.GetComponents();
			for (const comp of comps) {
				comp.Update(deltaTime);
			}
		}

		this.timing.lastElapsed = Date.now() - startTime;
	}
}

export default Engine;
export { EngineOptions };
