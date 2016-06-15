import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      debugger;
      let resource = this.get('model')
      resource.save();
      // resource.save()
    }
  }
});
