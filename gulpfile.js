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
 | Any custom tasks specific to the creative should be defined
 | in `./tasks.js` and called above or below `mix.creative()`.
 |
 | Additionally, if you need to call a custom task between existing tasks
 | `mix.creative()` you can tasks to lifecycle arrays defined below.
 |
 */

elixir(function (mix) {
  // use the below to add your custom tasks to specific points in the
  // creative task lifecycle
  var lifeCycle = {};

  // for tasks that run after the dist and zip folders have been emptied
  lifeCycle.afterDelete = [];

  // for tasks that run before the package is zipped up
  lifeCycle.beforeZip = [];

  mix.creative(lifeCycle);
});
