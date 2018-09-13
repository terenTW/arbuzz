import babel from 'rollup-plugin-babel';

export default {
	input: 'public/js/',
	output: {
		file: 'public/js/bundle.js',
		format: 'life'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
		})
	]

};