module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    connect: {
      server:{
        options: {
              port: 9000,
              hostname: '0.0.0.0',
              keepalive: true,
              base:'.'
          }
      }

        // livereload: {
        //     options: {
        //         open: {
        //              target: 'http://localhost:9000/'
        //         },
        //         base: [
        //             '.'
        //         ]
        //     }
        //}



     },
     copy: {
        main: {
            files: [
              // includes files within path
            //  {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

              // includes files within path and its sub-directories
              {expand: true, src: ['app/**'], dest: 'dest/'},

              // makes all src relative to cwd
            //  {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

              // flattens results to a single level
            //  {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
            ],
          },
        },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint','connect','watch']);
};
