import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('resource')
  }, 
  
  actions: {
    save(){
      let resource = this.modelFor(this.routeName);
      resource.save().then((response)=> {
        this.transitionTo('resources.resource', resource)
      })
    }
  }
});
