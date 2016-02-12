import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('resource', params.resource_id);
  },
  actions: {
    delete() {
      var resource = this.currentModel;
      resource.deleteRecord();
      resource.save().then(() => {
        this.transitionTo('resources');
      });
    },
  }
});
