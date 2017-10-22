var nodemon = require('gulp-nodemon');
const bs = require('browser-sync');


module.exports = (gulp, plugins, config) => () => {
    var stream = nodemon({
        script: 'server.js',
        ext: 'html js',
        ignore: ['ignored.js'],
        // tasks: ['lint']
    });

    stream
        .on('start', function () {
            console.log('started');

            bs.init({
                files: ["public/**/*.*"],
                proxy: "http://localhost:3000",
                port: 7000
            });

            bs.watch('./public/**/*.*').on('change', bs.reload);
        })
        .on('crash', function () {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10)  // restart the server in 10 seconds
        });


};