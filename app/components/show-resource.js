import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.saveChanges(this.get('resource'));
      this.toggleProperty('isEditing');

    },
    edit() {
      this.toggleProperty('isEditing');
    }
  }

});
