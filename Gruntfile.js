/*
 * grunt-mthamlphp-vlz
 * https://github.com/Zaitsev/grunt-mthamlphp-vlz
 *
 * Copyright (c) 2015 Vlad Zaitsev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        haml: {
            basic_html: {
                options: {},
                files: {
                    'tmp/basic.html': ['test/fixtures/basic.haml']
                }
            },
            invalid: {
                options: {
                    writeError: false
                },
                files: {
                    'tmp/invalid.html': ['test/fixtures/invalid.haml']
                }
            },
            php_code: {
                files: {
                    'tmp/php_code.php': ['test/fixtures/php_code.haml']
                }
            },
            invalidWrite: {
                files: {
                    'tmp/invalidWrite.html': ['test/fixtures/invalid.haml']
                }
            },
            unknownFilter: {
                files: {
                    'tmp/unknown_filter.html': ['test/fixtures/unknown_filter.haml']
                }
            },
            filter: {
                options: {
                    haml_options: {options: {enable_escaper: false}, filters: ['less', 'coffee', 'markdown']}
                },
                files: {
                    'tmp/filter.html': ['test/fixtures/filter.haml']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            options: {
                haml_options: {options: {enable_escaper: false}, filters: ['less', 'coffee', 'markdown']}
            },
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'haml', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
