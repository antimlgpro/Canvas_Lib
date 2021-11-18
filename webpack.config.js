const path = require("path");

/*	
factory: "./src/factory/index.ts",
math: "./src/math/index.ts",
object: "./src/object/index.ts",
render: "./src/render/index.ts",
util: "./src/util/index.ts", 
*/

module.exports = {
	entry: {
		core: "./src/core.ts",
		test: "./src/test.ts",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
		modules: [path.resolve(__dirname, "src"), "node_modules"],
	},
	output: {
		filename: "[name].bundle.js",
		library: {
			name: "canvaslib",
			type: "umd",
		},
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	watch: true,
	watchOptions: {
		aggregateTimeout: 600,
		ignored: "**/node_modules",
	},
};
