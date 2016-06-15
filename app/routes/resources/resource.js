import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findRecord('resource', params["resource_id"])
  }, 

  actions: {
    delete(){
      debugger;
      let resource = this.modelFor(this.routeName);
      resource.destroyRecord().then((response)=>{
        this.transitionTo('resources')
      });
    }
  }
});
