import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.saveChanges(this.getProperties(['title', 'url', 'descriptioin', 'topic']));
      this.toggleProperty('isEditing');

    },
    edit() {
      this.toggleProperty('isEditing');
    }
  }

});
