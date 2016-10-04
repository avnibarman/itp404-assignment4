define('itp404/routes/subreddit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var url = 'https://www.reddit.com/r/emberjs.json';
      return $.ajax({
        url: url
      }).then(function (response) {
        return response.data.children;
      });
    }
  });
});