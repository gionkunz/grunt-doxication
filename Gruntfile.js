'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    doxication: {
      json: {
        src: 'test/fixture/**/*.js',
        dest: 'test/generated',
        options: {
          format: 'json',
          fileName: 'dox'
        }
      },
      yaml: {
        src: 'test/fixture/**/*.js',
        dest: 'test/generated/doxicated.yaml',
        options: {
          format: 'yaml'
        }
      },
      yml: {
        src: 'test/fixture/**/*.js',
        dest: 'test/generated/doxicated.yml',
        options: {
          format: 'yml'
        }
      }
    },
    jasmine_node: {
      options: {
        matchall: true,
        extensions: 'js',
        specNameMatcher: 'spec'
      },
      all: ['test/spec/']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: ['test/spec/**/*.js', 'tasks/**/*.js', 'Gruntfile.js']
      }
    },
    watch: {
      all: {
        files: ['test/**/*.js', 'tasks/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint', 'doxication', 'jasmine_node']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadTasks('tasks/');

  // Default task.
  grunt.registerTask('default', ['jshint', 'doxication:json', 'doxication:yml', 'doxication:yaml', 'jasmine_node']);
};
