import Vector from "./Vector";
import Vertex from "./Vertex";

const minBoundingRect = (verts: Vertex[], offset = 0) => {
	const hull = quickHull(verts);
	const x = hull.map((e) => e.x);
	const y = hull.map((e) => e.y);

	const min = new Vector(Math.min(...x), Math.min(...y));
	const max = new Vector(Math.max(...x), Math.max(...y));

	const o = offset;
	const vertices = [
		new Vertex(min.x - o, min.y - o, 0),
		new Vertex(max.x + o, min.y - o, 1),
		new Vertex(max.x + o, max.y + o, 2),
		new Vertex(min.x - o, max.y + o, 3),
	];
	return vertices;
};

const quickHull = (verts: Vertex[]) => {
	const hull: any[] = [];
	//if there are only three points, this is a triangle, which by definition is already a hull
	if (verts.length == 3) {
		verts.push(verts[0]); //close the poly
		return verts;
	}

	const baseline = getMinMaxPoints(verts);
	addSegments(baseline, verts, hull);
	addSegments([baseline[1], baseline[0]], verts, hull); //reverse line direction to get points on other side
	//add the last point to make a closed loop
	hull.push(hull[0]);
	return hull;
};

const getMinMaxPoints = (points: Vertex[]) => {
	let i;
	let minPoint;
	let maxPoint;

	minPoint = points[0];
	maxPoint = points[0];

	for (i = 1; i < points.length; i++) {
		if (points[i].x < minPoint.x) minPoint = points[i];
		if (points[i].x > maxPoint.x) maxPoint = points[i];
	}

	return [minPoint, maxPoint];
};

const addSegments = (line: Vector[], points: Vertex[], hull: any[]) => {
	const distal = distalPoints(line, points);
	if (!distal.max) return hull.push(line[0]);
	addSegments([line[0], distal.max], distal.points, hull);
	addSegments([distal.max, line[1]], distal.points, hull);
};

const distalPoints = (line: Vector[], points: Vertex[]) => {
	let i;
	const outer_points = [];
	let point;
	let distal_point;
	let distance = 0;
	let max_distance = 0;

	for (i = 0; i < points.length; i++) {
		point = points[i];
		distance = distanceFromLine(point, line);

		if (distance > 0) outer_points.push(point);
		else continue; //short circuit

		if (distance > max_distance) {
			distal_point = point;
			max_distance = distance;
		}
	}

	return { points: outer_points, max: distal_point };
};

const distanceFromLine = (point: Vector, line: Vector[]) => {
	const vY = line[1].y - line[0].y;
	const vX = line[0].x - line[1].x;
	return vX * (point.y - line[0].y) + vY * (point.x - line[0].x);
};

export {
	minBoundingRect,
	quickHull,
	distanceFromLine,
	getMinMaxPoints,
	distalPoints,
};
