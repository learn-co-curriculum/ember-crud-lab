# Resource-library

## Objectives

* Build a route and route handler to create a new object. 
* build a template that contains a form for a new object.
* build a route handler action for deleting an object. use handlebars {{action="delete"}} to make delete button. 
* build a component to toggle editing state and handle edits.  


## Testing

Just jotting down the steps I took so I don't forget/future reference:

1. Install mocha addon, pretender addon, mirage addon. 
2. set up `app/mirage/scenarios/default.js`.
3. set up `app/mirage/config.js` to stub web requests. 
4. set up facotries in `app/mirage/factories` directory. 
5. `ember generate acceptance-test routing`.
6. Write tests. 