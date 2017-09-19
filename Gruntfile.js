module.exports = function (grunt) {

	grunt.initConfig({
		includes: {
			files: {
				src: ['html_dev/*.html', '*.html'], // Source files
				dest: '',
				flatten: true,
				cwd: '.',
				options: {
					silent: true
				}
			}
		},
		watch: {
			files: ['html_dev/*.html'],
			tasks: ['includes']
		}
	});

	grunt.loadNpmTasks('grunt-includes')
	grunt.loadNpmTasks('grunt-contrib-watch');;

	grunt.registerTask('default', ['includes', 'watch']);

};
