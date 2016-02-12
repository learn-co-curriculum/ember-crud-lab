import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'v1',
  host: 'https://dry-shore-2260.herokuapp.com'
});
