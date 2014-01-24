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
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeomanConfig.dist %>/*',
            '!<%= yeomanConfig.dist %>/.git*'
          ]
        }]
      }
    },
    compass: {
      all: {
        options: {
          sassDir: 'sass',
          specify: 'style.scss',
          outputStyle: 'compressed'
        }
      },
      dev: {
        options: {
          cssDir: 'css',
          outputStyle: 'compressed'
        }
      },
      dist: {
        options: {
          cssDir: '<%= yeomanConfig.dist %>/css',
          outputStyle: 'compressed'
        }
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            src: ['./index.html'],
            dest: '<%= yeomanConfig.dist %>/',
            filter: 'isFile'
          }
        ]
      }
    },
    watch: {
      compass: {
        files: [
          'sass/{,*/}*.scss'
        ],
        tasks: ['compass:dev']
      }
    }
  });

  grunt.registerTask('dev', function (target) {
      grunt.task.run([
          'watch'
      ]);
  });

  grunt.registerTask('build', [
      'clean:dist',
      'compass:dist',
      'copy:dist'
  ]);
}