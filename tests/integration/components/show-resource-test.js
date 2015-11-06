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
  }
);
