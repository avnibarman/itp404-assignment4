import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'https://www.reddit.com/r/emberjs.json';
    return $.ajax({
      url: url
    }).then(function(response){
     return response.data.children;
    });
  }
});
