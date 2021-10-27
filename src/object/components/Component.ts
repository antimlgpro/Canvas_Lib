import GameObject from "../GameObject";

class Component {
	gameObject: GameObject;
	type: string;

	constructor(gameObject: GameObject, type = "Base") {
		this.gameObject = gameObject;
		this.type = type;
	}

	Update(deltaTime: number) {
		//
	}
}

export default Component;
