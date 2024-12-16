var gulp = global.gulp = global.gulp || require("gulp");
var fs = require("fs");
var shelljs = (global.shelljs = global.shelljs || require("shelljs"));

require('@syncfusion/ej2-showcase-helper');

gulp.task("build", function(done) {
    var buildPath = ['Profile', 'Activities', 'Diet', 'Fasting'];
    for (var i = 0; i < buildPath.length; i++) {
        var path = buildPath[i];
        var bundleName = 'fitness-tracker-app-' + path.toLowerCase();
        shelljs.mkdir('-p', './dist/' + bundleName);
        try{
            shelljs.cd('./' + path);
            console.log('Navigate to ' + path + ' folder');
            shelljs.exec('npm i');
            shelljs.exec('npm run build');
            shelljs.cp('./dist/*', '../dist/' + bundleName + '/');
            shelljs.cd('../');
            console.log('Exist from ' + path + ' folder');
        } catch (e) {
            console.log(e);
        }
    }
    done();
});