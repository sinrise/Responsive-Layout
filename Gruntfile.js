module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        src: ['source/lib/scss/main.scss'],
        dest: 'source/css/main.css',
        options: {
          style: 'expanded'
        },
      },
    },
    uglify: {
      options: {
        beautify: true,
      },
      my_target: {
        files: {
          'source/js/site.js': ['source/lib/js/*.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['source/lib/js/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['source/lib/scss/**/*.scss'],
        tasks: ['sass'],
      },
      livereload: {
        options: { livereload: true },
        files: [
          'source/css/*.css',
          'source/lib/**/*.scss',
          'source/js/*.js',
          'source/lib/js/*.js',
          'source/**/*.html'
        ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

};