import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() { 
  this.route('resources', function() {
    this.route('new');
    this.route('resource', { path: '/:resource_id' });
  });
});

