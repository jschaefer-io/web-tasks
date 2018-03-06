const emily = require('emily-cm');

const paths = {
	watch: 'src/**/*',
	scss: {
		files: ['src/app.scss'],
		includePaths: [],
		dist: 'dist/assets/css'
	},
	js: {
		files: [
			['src/app.js']
		],
		dist: 'dist/assets/js'
	},
	pug: {
		files: ['src/views/*.pug'],
		dist: 'dist'
	},
	assets: {
		files: [{
			from: 'src/img/**/*',
			to: 'img'
		},
		{
			from: 'src/fonts/**/*',
			to: 'font'
		}],
		dist: 'dist/assets'
	}
}
const options = {
	sync: {
		rel: true,
		value: 'dist'
	},
	styleguide: {
		dist: 'styleguide',
		css: 'dist/assets/css/app.css'
	},
	abovefold: {
		dist: 'dist/assets/css/abovethefold',
		replace: [
			['http://localhost:3000', '']
		],
		link: 'http://localhost:3000/',
		chunksize: 10,
		viewport: {width: 1920, height: 1080},
		types: ['document', 'stylesheet', 'script'],
		timeout: 5000
	}
}


let activeModules 	= emily.toFilename(emily.active);
paths.scss.files 	= paths.scss.files.concat(activeModules.map((el)=>el+'*.scss'));
paths.js.files[0]	= paths.js.files[0].concat(activeModules.map((el)=>el+'*.js'));

const config = {};
config.paths = paths;
config.options = options;
module.exports = config;