'use strict';

define('itp404/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('itp404/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('itp404/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('itp404/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'itp404/tests/helpers/start-app', 'itp404/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _itp404TestsHelpersStartApp, _itp404TestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _itp404TestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _itp404TestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('itp404/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('itp404/tests/helpers/resolver', ['exports', 'itp404/resolver', 'itp404/config/environment'], function (exports, _itp404Resolver, _itp404ConfigEnvironment) {

  var resolver = _itp404Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp404ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp404ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('itp404/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('itp404/tests/helpers/start-app', ['exports', 'ember', 'itp404/app', 'itp404/config/environment'], function (exports, _ember, _itp404App, _itp404ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itp404ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itp404App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('itp404/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('itp404/tests/jquery-3.1.1.min.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | jquery-3.1.1.min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'jquery-3.1.1.min.js should pass jshint.\njquery-3.1.1.min.js: line 2, col 39, Expected \'===\' and instead saw \'==\'.\njquery-3.1.1.min.js: line 2, col 64, Expected \'===\' and instead saw \'==\'.\njquery-3.1.1.min.js: line 2, col 147, Expected \'{\' and instead saw \'throw\'.\njquery-3.1.1.min.js: line 2, col 218, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 223, Expected an assignment or function call and instead saw an expression.\njquery-3.1.1.min.js: line 2, col 224, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 239, Expected \'!==\' and instead saw \'!=\'.\njquery-3.1.1.min.js: line 2, col 562, Expected an assignment or function call and instead saw an expression.\njquery-3.1.1.min.js: line 2, col 563, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 619, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 722, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 812, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 889, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 975, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1015, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1100, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1103, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1168, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1204, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1240, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1335, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1394, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1542, Expected \'===\' and instead saw \'==\'.\njquery-3.1.1.min.js: line 2, col 1591, Expected \'===\' and instead saw \'==\'.\njquery-3.1.1.min.js: line 2, col 1653, Expected \'{\' and instead saw \'if\'.\njquery-3.1.1.min.js: line 2, col 1679, Expected \'{\' and instead saw \'for\'.\njquery-3.1.1.min.js: line 2, col 1690, Expected \'{\' and instead saw \'c\'.\njquery-3.1.1.min.js: line 2, col 1861, Expected an assignment or function call and instead saw an expression.\njquery-3.1.1.min.js: line 2, col 1871, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 1983, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2054, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2127, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2226, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2372, Expected \'===\' and instead saw \'==\'.\njquery-3.1.1.min.js: line 2, col 2397, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2442, Expected \'{\' and instead saw \'return\'.\njquery-3.1.1.min.js: line 2, col 2459, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2508, Expected \'===\' and instead saw \'==\'.\njquery-3.1.1.min.js: line 2, col 2530, Expected \'===\' and instead saw \'==\'.\njquery-3.1.1.min.js: line 2, col 2570, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2599, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2661, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2747, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2810, Expected \'{\' and instead saw \'if\'.\njquery-3.1.1.min.js: line 2, col 2835, Confusing use of \'!\'.\njquery-3.1.1.min.js: line 2, col 2838, Expected \'{\' and instead saw \'break\'.\njquery-3.1.1.min.js: line 2, col 2843, Missing semicolon.\njquery-3.1.1.min.js: line 2, col 2849, Expected \'{\' and instead saw \'for\'.\njquery-3.1.1.min.js: line 2, col 2860, Expected \'{\' and instead saw \'if\'.\njquery-3.1.1.min.js: line 2, col 2885, Confusing use of \'!\'.\njquery-3.1.1.min.js: line 2, col 2885, Too many errors. (40% scanned).\n\n52 errors');
  });
});
define('itp404/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('itp404/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('itp404/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('itp404/tests/routes/subreddit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/subreddit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/subreddit.js should pass jshint.\nroutes/subreddit.js: line 6, col 12, \'$\' is not defined.\n\n1 error');
  });
});
define('itp404/tests/test-helper', ['exports', 'itp404/tests/helpers/resolver', 'ember-qunit'], function (exports, _itp404TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_itp404TestsHelpersResolver['default']);
});
define('itp404/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('itp404/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('itp404/tests/unit/routes/subreddit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:subreddit', 'Unit | Route | subreddit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404/tests/unit/routes/subreddit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/subreddit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/subreddit-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('itp404/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map