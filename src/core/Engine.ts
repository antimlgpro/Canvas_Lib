import Vector from "../math/Vector";
import Rigidbody from "../object/components/Rigidbody";
import GameObject from "../object/GameObject";
import Render from "../render/Render";

interface Timing {
	delta: number;
	timestamp: number;
	lastDelta: number;
	lastElapsed: number;
}

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
	gravityScale: number = 0.001;

	render: Render;
	gameObjects: GameObject[];

	constructor(options: EngineOptions) {
		// todo add options
		this.gameObjects = [];
	}

	AddGameObject(gameObject: GameObject) {
		this.gameObjects.push(gameObject);

		this.render.AddGameObject(gameObject);
	}

	Update(delta?: number) {
		let startTime = Date.now();
		let deltaTime = delta || 1000 / 60;

		this.timing.delta = deltaTime;
		this.timing.timestamp += deltaTime;
		this.timing.lastDelta = deltaTime;

		//this.ApplyGravity();

		for (const go of this.gameObjects) {
			const comps = go.GetComponents();
			for (const comp of comps) {
				if (comp.type == "Rigidbody") {
					// This applies gravity
					let body = <Rigidbody>comp;
					let force = new Vector(
						body.mass * this.gravity.x * this.gravityScale,
						body.mass * this.gravity.y * this.gravityScale
					);
					body.AddForce(force);
					//console.log(body.positionPrev);
				}

				comp.Update(deltaTime);
			}
		}

		this.timing.lastElapsed = Date.now() - startTime;
	}

	protected ApplyGravity() {
		for (const go of this.gameObjects) {
			let rigidbody = <Rigidbody>go.GetComponent("Rigidbody");
			if (!rigidbody) continue;
		}
	}
}

export default Engine;
export { EngineOptions };
