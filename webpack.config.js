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
		path: resolve(__dirname, "./dist"),
		filename: "index.js",
		library: {
			type: "module"
		},
		chunkFormat: "module"
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
		nodeExternals({
			importType: "module"
		})
	],
	externalsPresets: {node: true},
	experiments: {
		outputModule: true
	}
}