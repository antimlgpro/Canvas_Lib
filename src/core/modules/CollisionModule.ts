import Grid from "collision/Grid";
import Render from "core/Render";
import GameObject from "object/GameObject";
import EngineModule from "./EngineModule";

class CollisionModule extends EngineModule {
	render: Render;
	grid: Grid;
	collisions: GameObject[][];
	moduleName = "Collision module";

	width = 50;
	height = 50;

	constructor(width?: number, height?: number) {
		super();

		this.width = width ?? this.width;
		this.height = height ?? this.height;
	}

	init() {
		super.init();

		this.render = this.engine.render;
		this.addCollisionGrid(this.width, this.height);
	}

	update() {
		this.grid.update();
		const collisions = this.grid.queryCollisions();
		this.collisions = collisions;
	}

	private addCollisionGrid(width: number, height: number) {
		if (!this.render) {
			console.error("You need to create a renderer first");
		}

		this.grid = new Grid(width, height, this.render.width, this.render.height);
		this.render.grid = this.grid;
	}
}

export default CollisionModule;
