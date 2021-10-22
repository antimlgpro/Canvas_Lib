interface Timing {
	timestamp: number;
	lastDelta: number;
	lastElapsed: number;
}

interface EngineOptions {}

class Engine {
	modules: Module[];
	timing: Timing;

	constructor(options: EngineOptions) {
		// todo add options
	}

	Update(delta?: number) {
		let startTime = Date.now();
		delta = delta || 1000 / 60;

		this.timing.timestamp += delta;
		this.timing.lastDelta = delta;
	}
}

export default Engine;
export { EngineOptions };
