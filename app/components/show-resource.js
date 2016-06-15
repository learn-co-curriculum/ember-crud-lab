import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleEdit(){
      // debugger;
      this.toggleProperty('isEditing')
    }, 
    save(){
      // debugger;
      // let resource = this.get('resource');
      this.attrs.saveChanges();
      this.toggleProperty('isEditing')

    }
  }
});
