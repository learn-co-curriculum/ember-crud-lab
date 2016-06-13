import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'v1',
  host: 'https://dry-shore-2260.herokuapp.com'
});
