import { Vector } from "../core";
import Grid from "../collision/Grid";
import GameObject from "../object/GameObject";
import Color from "../util/Color";

interface RenderOptions {
	fps?: number;

	width?: number;
	height?: number;

	hasBounds?: boolean;

	center?: boolean;
	backgroundColor?: Color;
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

	fps = 60;
	width = 100;
	height = 100;
	hasBounds = false;
	convex = true;

	objects: GameObject[];

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

	backgroundColor = new Color("#202020");

	// collision grid
	drawGrid = false;
	grid: Grid;

	constructor(options: RenderOptions) {
		this.fps = options.fps ?? this.fps;
		this.width = options.width ?? this.width;
		this.height = options.height ?? this.height;
		this.hasBounds = options.hasBounds ?? this.hasBounds;
		this.backgroundColor = options.backgroundColor ?? this.backgroundColor;

		this.canvas = this.canvas ?? this._CreateCanvas();
		this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

		this.objects = [];

		// Canvas creation
		const element: HTMLElement = <HTMLElement>(
			document.getElementById("container")
		);
		element.appendChild(this.canvas);
		this.canvas.style.border = "1px solid black";

		if (options.center) {
			element.style.textAlign = "center";
			this.canvas.style.display = "inline";
		}
	}

	AddGameObject(gameObject: GameObject) {
		this.objects.push(gameObject);
	}

	Run() {
		const loop = (ms: number) => {
			window.requestAnimationFrame(loop);

			this._UpdateTiming(ms);

			this.World(ms);
		};

		loop(0);
	}

	World(ms: number) {
		this.ctx.fillStyle = this.backgroundColor.hexColor;
		this.ctx.fillRect(0, 0, this.width, this.height);

		if (this.objects.length <= 0) return;

		if (this.convex) {
			this.DrawConvex(this.objects);
		} else {
			this.DrawWireframes(this.objects);
		}

		if (this.grid && this.drawGrid) {
			this.grid.renderGrid(this.ctx);
		}
	}

	private DrawWireframes(objects: GameObject[]) {
		const c = this.ctx;
		// render all objects
		for (const obj of objects) {
			if (!obj.isActive) continue;
			if (!obj.hasVertices) continue;

			c.translate(obj.position.x, obj.position.y);
			c.beginPath();
			const points = this.DrawPolygon(c, obj, true);

			c.closePath();
			c.strokeStyle = obj.strokeColor.hexColor;
			c.stroke();

			if (points) this.drawPoints(points);
			c.setTransform(1, 0, 0, 1, 0, 0);
		}
	}

	private DrawConvex(objects: GameObject[]) {
		const c = this.ctx;
		//c.beginPath();

		// render all objects
		for (const obj of objects) {
			if (!obj.isActive) continue;
			if (!obj.hasVertices) continue;

			c.translate(obj.position.x, obj.position.y);
			c.beginPath();
			this.DrawPolygon(c, obj);

			c.closePath();
			c.fillStyle = obj.fillColor.hexColor;
			c.fill();
			c.setTransform(1, 0, 0, 1, 0, 0);
		}
	}

	private DrawPolygon(
		c: CanvasRenderingContext2D,
		obj: GameObject,
		showPoints = false
	) {
		const points: Vector[] = [];

		c.moveTo(obj.vertices[0].x, obj.vertices[0].y);

		if (showPoints)
			points.push(new Vector(obj.vertices[0].x, obj.vertices[0].y));

		for (let j = 1; j < obj.vertices.length; j++) {
			if (!obj.vertices[j - 1].isInternal) {
				c.lineTo(obj.vertices[j].x, obj.vertices[j].y);
			} else {
				c.moveTo(obj.vertices[j].x, obj.vertices[j].y);
			}

			if (showPoints)
				points.push(new Vector(obj.vertices[j].x, obj.vertices[j].y));

			if (obj.vertices[j].isInternal) {
				c.moveTo(
					obj.vertices[(j + 1) % obj.vertices.length].x,
					obj.vertices[(j + 1) % obj.vertices.length].y
				);
			}
		}

		c.lineTo(obj.vertices[0].x, obj.vertices[0].y);

		if (showPoints) return points;
	}

	private drawPoints(points: Vector[]) {
		for (const point of points) {
			this.ctx.fillStyle = "#000";
			this.ctx.beginPath();
			this.ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
			this.ctx.fill();
		}
	}

	private _UpdateTiming(ms: number) {
		const timing = this.timing;
		timing.delta = ms - timing.lastTime;
	}

	private _CreateCanvas(): HTMLCanvasElement {
		const canvas = document.createElement("canvas");
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
