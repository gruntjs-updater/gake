module.exports = function(grunt){
    // Build the assets into a web accessible folder.
    // (handy for phone gap apps, chrome extensions, etc.)
    grunt.registerTask('ssssssssssssssssssss', [
        'compileAssets',
        'linkAssets',
        'clean:build',
        'copy:build'
    ]);
};
