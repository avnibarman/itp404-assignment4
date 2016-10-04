define('itp404/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'itp404/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _itp404ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_itp404ConfigEnvironment['default'].APP.name, _itp404ConfigEnvironment['default'].APP.version)
  };
});