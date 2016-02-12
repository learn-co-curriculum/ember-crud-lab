import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    update: function(resource) {
      resource.save();
    }
  }
});
