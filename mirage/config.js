export default function() {

  this.namespace = 'https://dry-shore-2260.herokuapp.com/v1';    
  this.get('/resources');
  this.get('/resources/:id');
  this.get('/resources/new');
  this.post('/resources');
  this.put('/resources/:id');
  this.del('/resources/:id');
}
