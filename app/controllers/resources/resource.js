import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    update: function(properties) {
      let resource = this.get('model');
      resource.setProperties(properties)
      resource.save();
    }
  }
});
