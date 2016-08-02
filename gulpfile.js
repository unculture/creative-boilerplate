var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

require('./gulp-tasks');

elixir(function (mix) {

  mix

    // Clean build files
    // -----------------
    .clean()

    // Copy SmartContent CDK
    // ---------------------
    .cdk()

    // Copy static assets
    // ------------------
    .copy('src/index.html', 'dist')
    .copy('src/fonts', 'dist/fonts')
    .copy('src/images', 'dist/images')

    // Compile SASS
    // ------------
    .sass('main.scss')

    // Transpile JS
    // ------------
    .rollup('main.js')

    // Create Zip (in production only)
    // ----------------------------
    .zip(true);

});
