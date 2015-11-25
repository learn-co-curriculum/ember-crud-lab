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

    it('toggles to the editing state on double click', function() {
      this.on('dblclick', function() {
        expect(this.get('isEditing').to.eq('false'));
      });
    });

    it('persists edits to the record on submit of editing form', function() {
      this.render(hbs`{{show-resource title="Learn Ember Today"}}`);
      // expect(find('h4').text()).to.eq("Learn Ember Today");
      expect(this.$('#title').text()).to.eq("Learn Ember Today");
      this.on('dblclick', function() {
        expect(this.$('#title').text()).to.eq("Learn Ember Today");
        // expect(find('h4').text()).to.eq("Learn Ember Today");
        expect(this.get('isEditing').to.eq('true'));
        fillIn('#title', 'Learn Ember Today!!!');
        click('#submit');
        andThen(function(){
          expect(this.$('#title').text()).to.eq("Learn Ember Today!!!")
          // expect(find('h4').text()).to.eq("Learn Ember Today!!!");
        });
      });
    });
  }
);
