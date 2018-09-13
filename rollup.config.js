import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
	input: 'public/js/',
	output: {
		file: 'public/js/bundle.js',
		format: 'life'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
		}),
		eslint({
			include: './public/js/**',
		}),
	],1

};