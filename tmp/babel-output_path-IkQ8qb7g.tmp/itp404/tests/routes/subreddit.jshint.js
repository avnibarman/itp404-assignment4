define('itp404/tests/routes/subreddit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/subreddit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/subreddit.js should pass jshint.\nroutes/subreddit.js: line 6, col 12, \'$\' is not defined.\n\n1 error');
  });
});