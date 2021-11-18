import { GameObject } from "../core";

class Grid {
	grid: GameObject[][][] = [];

	width = 50;
	height = 50;
	cellWidth = 10;
	cellHeight = 10;

	allocatedCells: number;
	collisionTests: number;
	hashChecks: number;

	objects: GameObject[] = [];

	constructor(
		cellWidth: number,
		cellHeight: number,
		maxW: number,
		maxH: number
	) {
		this.cellWidth = cellWidth;
		this.cellHeight = cellHeight;

		this.width = maxW / cellWidth;
		this.height = maxH / cellHeight;

		this.update();
	}

	update() {
		this.allocatedCells = 0;

		this.grid = Array(this.width);
		for (const obj of this.objects) {
			// FIXME: add check for objects outside of grid.

			const bo = obj.boundingBox;

			const cXEntityMin = Math.floor(bo.x / this.cellWidth);
			const cXEntityMax = Math.floor((bo.x + bo.width) / this.cellWidth);
			const cYEntityMin = Math.floor(bo.y / this.cellHeight);
			const cYEntityMax = Math.floor((bo.y + bo.height) / this.cellHeight);

			for (let cX = cXEntityMin; cX <= cXEntityMax; cX++) {
				if (!this.grid[cX]) this.grid[cX] = Array(this.height);

				const col = this.grid[cX];

				for (let cY = cYEntityMin; cY <= cYEntityMax; cY++) {
					// ensure we have a bucket to put entities into for this cell
					if (!col[cY]) {
						col[cY] = [];

						// this is for stats purposes only
						this.allocatedCells += 1;
					}

					const gridCell = col[cY];

					// add entity to cell
					gridCell.push(obj);
				}
			}
		}
	}

	queryCollisions() {
		const checked: any = {};
		const pairs: any[] = [];

		this.collisionTests = 0;
		this.hashChecks = 0;

		for (let i = 0; i < this.grid.length; i++) {
			const gridCol = this.grid[i];

			// ignore columns that have no cells
			if (!gridCol) continue;

			// for every cell within a column of the grid...
			for (let j = 0; j < gridCol.length; j++) {
				const gridCell = gridCol[j];

				// ignore cells that have no objects
				if (!gridCell) continue;

				// for every object in a cell...
				for (let k = 0; k < gridCell.length; k++) {
					const entityA = gridCell[k];

					// for every other object in a cell...
					for (let l = k + 1; l < gridCell.length; l++) {
						const entityB = gridCell[l];

						// create a unique key to mark this pair.
						// use both combinations to ensure linear time
						const hashA = entityA.uuid + ":" + entityB.uuid;
						const hashB = entityB.uuid + ":" + entityA.uuid;

						this.hashChecks += 2;

						if (!checked[hashA] && !checked[hashB]) {
							// mark this pair has checked
							checked[hashA] = checked[hashB] = true;

							this.collisionTests += 1;

							if (entityA.boundingBox.intersects(entityB.boundingBox)) {
								pairs.push([entityA, entityB]);
							}
						}
					}
				}
			}
		}

		return pairs;
	}

	renderGrid(ctx: CanvasRenderingContext2D) {
		for (let col = 0; col < this.width; col++) {
			for (let row = 0; row < this.height; row++) {
				ctx.strokeStyle = "#ffffff";
				ctx.strokeRect(
					col * this.cellWidth,
					row * this.cellHeight,
					this.cellWidth,
					this.cellHeight
				);
			}
		}
	}
}

export default Grid;
