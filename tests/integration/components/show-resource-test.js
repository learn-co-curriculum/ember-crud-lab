// can set update closure action, render component with stubbed action, 
//  can fill out input field, can "submit" form and hit stubbed action
//  BUT this stub is not correct/complete and will not then trigger the
//  controller action.

/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'show-resource',
  'Integration: ShowResourceComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#show-resource}}
      //     template content
      //   {{/show-resource}}
      // `);

      this.render(hbs`{{show-resource}}`);
      expect(this.$()).to.have.length(1);
    });

   it('shows the edit form when the isEditing property is set to true', function() {
      this.set('model', {title: "Learn Ember RIGHT NOW"});
      this.render(hbs `{{show-resource resource=model isEditing=true}}`);
      expect($.trim(this.$('input#title').val())).to.eq('Learn Ember RIGHT NOW');
    });

    it('toggles the editing state when the user clicks on the h4 title on the component', function() {
      this.set('model', {title: "Learn Ember RIGHT NOW"});
      this.set('isEditing', false);
      this.render(hbs `{{show-resource resource=model isEditing=isEditing}}`);
      this.$('h4').click();
      expect(this.get('isEditing')).to.be.true;
    });

  });


