import { dirname, resolve } from "path"
import { fileURLToPath } from "url"
import nodeExternals from "webpack-node-externals"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
	target: "node20.10",
	entry: {
		index: "./src/index.ts"
	},
	output: {
		filename: "index.js",
		path: resolve(__dirname, "./dist"),
		clean: true
	},
	resolve: {
		extensions: [".ts", "..."]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
					"ts-loader"
				]
			}
		]
	},
	externals: [
		nodeExternals()
	],
	externalsPresets: {node: true}
}