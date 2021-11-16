interface Mapping {
	key: string;
	name: string;
	pressed: boolean;
	released: boolean;
	continous: boolean;
}

class Input {
	static buttonMappings: Mapping[] = [];

	static addMapping(name: string, key: string) {
		const newMapping: Mapping = {
			key: key,
			name: name,
			pressed: false,
			released: false,
			continous: false,
		};
		this.buttonMappings.push(newMapping);
	}

	static addListener() {
		window.addEventListener("keydown", this.keyDownListener.bind(this));
		window.addEventListener("keyup", this.keyUpListener.bind(this));
		window.addEventListener("keypress", this.keyPressListener.bind(this));
	}

	static keyPressListener(e: KeyboardEvent) {
		for (const mapping of this.buttonMappings) {
			if (e.code === mapping.key) {
				mapping.continous = true;
			}
		}
	}

	static keyDownListener(e: KeyboardEvent) {
		if (e.repeat) return;

		for (const mapping of this.buttonMappings) {
			if (e.code === mapping.key) {
				mapping.pressed = true;
				mapping.released = false;
			}
		}
	}

	static keyUpListener(e: KeyboardEvent) {
		if (e.repeat) return;

		for (const mapping of this.buttonMappings) {
			if (e.code === mapping.key) {
				mapping.released = true;
				mapping.pressed = false;

				mapping.continous = false;
			}
		}
	}

	static getButtonDown(key: string) {
		const mapping = this.buttonMappings.find((e) => e.name === key);
		if (mapping) {
			if (mapping.pressed) {
				mapping.pressed = false;
				return true;
			} else {
				return false;
			}
		} else {
			console.error(`Key '${key}' does not exist`);
			return false;
		}
	}

	static getButtonUp(key: string) {
		const mapping = this.buttonMappings.find((e) => e.name === key);
		if (mapping) {
			if (mapping.released) {
				mapping.released = false;
				return true;
			} else {
				return false;
			}
		} else {
			console.error(`Key '${key}' does not exist`);
			return false;
		}
	}

	static getButton(key: string) {
		const mapping = this.buttonMappings.find((e) => e.name === key);
		if (mapping) {
			return mapping.continous;
		} else {
			console.error(`Key '${key}' does not exist`);
			return false;
		}
	}
}

export default Input;
