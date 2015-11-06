  import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('resource');
  },
  actions: {
    save: function() {
      var resource = this.currentModel;
      resource.save().then(() => {
        this.transitionTo('resources');
      });
    }
  }
});

