var Elixir = require('laravel-elixir');
var Task = Elixir.Task;

// Elixir task to create the zip package
// for upload to SmartContent
// -------------------------------------

var archiver = require('archiver');
var fs = require('fs');
var moment = require('moment');

Elixir.extend('zip', function (onlyInProduction) {

  if (onlyInProduction && !Elixir.inProduction) return;

  var srcDirectory = 'dist/';
  var zipFile = __dirname.split('/').slice(-1)[0] + '_' + moment().format('YYYYMMDD-HHmmss') + '.zip';
  var zipPath = __dirname + '/zip/' + zipFile;

  new Task('zip', function () {
      var output = fs.createWriteStream(zipPath);
      var archive = archiver('zip', {});
      archive.pipe(output);
      return archive.directory(srcDirectory, '/').finalize();
    }, {src: srcDirectory, output: zipFile}
  ).recordStep('Zip file written to Destination');

});
// -------------------------------------


// Elixir task to clean build
// --------------------------

var del = require('del');

Elixir.extend('clean', function () {
  var paths = ['dist/**/*', 'zip/**/*'];
  new Task('clean', function () {
      return del.sync(paths);
    }, {src: paths, output: 'Trash!'}
  ).recordStep('Paths Deleted');
});
// --------------------------

// Elixir task copy cdk across
// ---------------------------

Elixir.extend('cdk', function () {
  var libPaths = [
    {
      src: "node_modules/smartcontent-cdk/lib/main.js",
      dst: "src/js/main.js"
    },
  ];
  libPaths.forEach(function (path) {
    var paths = new Elixir.GulpPaths().src(path.src).output(path.dst);

    new Elixir.Task('copy', function ($) {
      return gulp.src(paths.src.path, {dot: true}).pipe($.if(!paths.output.isDir, $.rename(paths.output.name))).pipe(this.saveAs(gulp));
    }, paths).watch(paths.src.path).ignore(paths.output.path);
  });
});
// --------------------------