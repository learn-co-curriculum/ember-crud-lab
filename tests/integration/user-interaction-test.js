// with integration test, can visit, click, fill out, submit, trigger closure action 
//  BUT data from filled out form not reflected in this.attrs in closure action

import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Integration: User Interaction', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('adds a new resource', function(){
    visit('/resources/new');
    fillIn('#title', 'Learn Ember Today!');
    fillIn('#url', 'www.emberlearning.com');
    fillIn('#topic', 'Ember');
    fillIn('#description', 'Learn Ember by reading this book.');
    click('#submit');
    
    andThen(function() {
      expect(find('h5:last').text(), 'Learn Ember Today!');
    });
  });

  it('deletes a resource', function() {
    server.create('resource', {
      title: "Hacking 101",
      description: "Be the black hat you always wanted to be!"
    });
    server.createList('resource', 2);

    visit('/resources/1');
    andThen(function() {
      click('#delete');
      andThen(function() {
        expect(find('ul li.resources').length).to.eq(2);
      });
    });
  });

  it('edits a resource: persists edits to resource made when user clicks title, fills out and submits edit form', function() {
    server.create('resource', {
      title: "Learn Ember RIGHT NOW",
      description: "Learn it right now, real quick."
    });
    visit('/resources/1');
    click('h4');
    andThen(function() {
      expect(find('#h4').length).to.eq(0);
      fillIn("#title", "Learn Ember A Little Bit Later");
      click("#submit");
      andThen(function() {
        expect(find('h4').text()).to.eq("Learn Ember A Little Bit Later");
      });
    });
  });
});
