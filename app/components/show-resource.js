import Ember from 'ember';

export default Ember.Component.extend({
  doubleClick: function() {
    this.toggleProperty('isEditing');
  },
  actions: {
    submit() {
      var resource = this
      debugger;
      resource.set('title', "EMBER EMBER");
      // resource.save();
      this.toggleProperty('isEditing');
    }
  },
  isEditing: false
});

