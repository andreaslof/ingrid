module.exports = function (grunt) {
  'use strict';

  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var yeomanConfig = {
    dist: 'dist'
  };

  grunt.initConfig({
    yeomanConfig: yeomanConfig,
    compass: {
      all: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          specify: 'style.scss'
          outputStyle: 'compressed'
        }
      }
    },
    watch: {
      compass: {
        files: [
          'app/wp-content/themes/<%= yeomanConfig.themeName %>/sass/{,*/}*.scss'
        ],
        tasks: ['compass:all']
      }
    }
  });
}