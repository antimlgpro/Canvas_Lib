import GameObject from "../object/GameObject";

interface RenderOptions {
	fps?: number;

	width?: number;
	height?: number;

	hasBounds?: boolean;
}

interface Bounds {
	min: {
		width: number;
		height: number;
	};
	max: {
		width: number;
		height: number;
	};
}

interface Timing {
	delta: number;
	lastTime: number;
}

class Render {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;

	fps: number = 60;

	width: number = 100;
	height: number = 100;
	hasBounds: boolean = false;
	bodies: GameObject[];

	bounds: Bounds = {
		min: {
			width: 0,
			height: 0,
		},
		max: {
			width: 100,
			height: 100,
		},
	};

	timing: Timing = {
		delta: 0,
		lastTime: 0,
	};

	constructor(options: RenderOptions) {
		this.fps = options.fps ?? this.fps;
		this.width = options.width ?? this.width;
		this.height = options.height ?? this.height;
		this.hasBounds = options.hasBounds ?? this.hasBounds;

		this.canvas = this.canvas ?? this._CreateCanvas();
		this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

		this.bodies = [];

		let element: HTMLElement = <HTMLElement>(
			document.getElementById("container")
		);
		element.appendChild(this.canvas);
		this.canvas.style.border = "1px solid black";
	}

	Run() {
		const loop = (ms: number) => {
			window.requestAnimationFrame(loop);

			this._UpdateTiming(ms);

			this.World(ms);
		};

		loop(0);
	}

	private World(ms: number) {
		this.ctx.fillStyle = "transparent";
		this.ctx.fillRect(0, 0, this.width, this.height);

		this.ObjectWireframes(this.bodies);
	}

	private ObjectWireframes(bodies: GameObject[]) {
		let c = this.ctx;

		c.beginPath();

		// render all bodies
		for (let i = 0; i < bodies.length; i++) {
			let body = bodies[i];

			//if (!body.render.visible) continue;

			// handle compound bodys
			c.moveTo(body.vertices[0].x, body.vertices[0].y);

			for (let j = 1; j < body.vertices.length; j++) {
				if (!body.vertices[j - 1].isInternal) {
					// || showInternalEdges
					c.lineTo(body.vertices[j].x, body.vertices[j].y);
				} else {
					c.moveTo(body.vertices[j].x, body.vertices[j].y);
				}

				if (body.vertices[j].isInternal) {
					// && !showInternalEdges
					c.moveTo(
						body.vertices[(j + 1) % body.vertices.length].x,
						body.vertices[(j + 1) % body.vertices.length].y
					);
				}
			}

			c.lineTo(body.vertices[0].x, body.vertices[0].y);
		}

		c.lineWidth = 1;
		c.strokeStyle = "#202020";
		c.stroke();
	}

	private _UpdateTiming(ms: number) {
		let timing = this.timing;
		timing.delta = ms - timing.lastTime;
	}

	private _CreateCanvas(): HTMLCanvasElement {
		let canvas = document.createElement("canvas");
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.oncontextmenu = () => {
			return false;
		};
		canvas.onselectstart = () => {
			return false;
		};

		return canvas;
	}
}

export default Render;
export { RenderOptions };
