import Ember from 'ember';

export default Ember.Component.extend({
  doubleClick: function() {
    this.toggleProperty('isEditing');
  },
  actions: {
    update() {
      this.toggleProperty('isEditing');
      this.attrs.update();
      // this.sendAction('update');
    } 
  },
  isEditing: false
});

