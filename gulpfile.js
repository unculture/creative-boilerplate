var elixir = require('laravel-elixir');
require('smartcontent-cdk/tasks');

/*
 |-----------------------------
 | Smart Content Creative Build
 |-----------------------------
 |
 | The smartcontent-cdk executes standard build tasks for a creative
 | through the creative mixin.
 |
 | Any custom tasks specific to the creative should be defined in `./tasks.js`.
 | The custom tasks can be called before or after `mix.creative()` below, or
 | alternatively you may hook into the lifecycle events of `mix.creative()`
 | by calling the custom tasks in a closure as options.
 |
 */

elixir(function (mix) {

  var opts = {};

  // Runs after dist and zip have been purged.
  // ---
  // opts.afterDelete = function () {
  //   mix.foo();
  // };

  // Runs before the package is zipped.
  // ---
  // opts.beforeZip = function () {
  //   mix.bar();
  // };

  mix.creative(opts);

});
