import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    update: function() {
      let resource = this.get("model");
      resource.save();
    }
  }
});
