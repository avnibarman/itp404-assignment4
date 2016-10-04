define('itp404/tests/test-helper', ['exports', 'itp404/tests/helpers/resolver', 'ember-qunit'], function (exports, _itp404TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_itp404TestsHelpersResolver['default']);
});