class Color {
	private _hexColor: string;
	private _rgbColor: string;

	constructor(color?: string) {
		if (color) this.setColor(color);
	}

	set color(val: string) {
		this.setColor(val);
	}

	get hexColor() {
		return this._hexColor;
	}

	get rgbColor() {
		return this._rgbColor;
	}

	setColor(val: string) {
		if (/^#[0-9A-F]{6}$/i.test(val)) {
			this._hexColor = val;
			this._rgbColor = Color.rgbFromHex(val);
		} else if (Color.isRgb(val)) {
			this._hexColor = Color.hexFromRgb(val);
			this._rgbColor = val;
		}
	}

	private static rgbFromHex(hex: string) {
		hex = hex.split("#")[1];

		const rgbLst: number[] = [];
		for (let i = 0; i < hex.length; i += 2) {
			const hexCode = hex.slice(i, i + 2);
			const dec = parseInt(hexCode, 16);
			rgbLst.push(dec);
		}

		const [r, g, b] = rgbLst;
		const str = "rgb(" + r + ", " + g + ", " + b + ")";
		return str;
	}

	private static hexFromRgb(rgb: string) {
		const rgbVals = rgb.split("(")[1].split(")")[0];
		let [r, g, b] = rgbVals.split(",");
		r = parseInt(r.replace(" ", "")).toString(16);
		g = parseInt(g.replace(" ", "")).toString(16);
		b = parseInt(b.replace(" ", "")).toString(16);

		const str = "#" + r + g + b;
		return str;
	}

	private static isRgb(val: string) {
		return /^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/.test(
			val
		);
	}
}

export default Color;
