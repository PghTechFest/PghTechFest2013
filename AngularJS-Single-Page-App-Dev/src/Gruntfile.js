/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n'
        },
        concat: {
            dist: {
                src: ['<banner:meta.banner>', 'public/javascripts/app/*.js', 'public/javascripts/app/**/*.js'],
                dest: 'public/javascripts/compiled-angular-app.js'
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
    grunt.registerTask('default', ['concat']);

};