/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Acceptance: Getting Around', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('welcomes the user', function() {
    visit('/');

    andThen(function() {
      expect(find('h2').text()).to.eq("Flatiron Library");
    });
  });

  it('has a link to the resources page', function(){
    visit('/');
    andThen(function(){
      let link = find('a.resources');
      // $('p.resources a');
      // find('a.resources');
      expect(link.text()).to.eq('Resources');
      expect(link.attr('href')).to.eq('/resources');
    });
  });

  it('lists all of the resources', function(){
    server.create('resource', {title: "Hacking 101"});
    server.createList('resource', 2);

    visit('/');
    // let link = $("p.resources a");
    // click(link);
    click(".resources");

    andThen(function(){
      expect(find('ul li.resources').length).to.eq(3);
      expect(find('ul li:first a').attr('href')).to.eq("/resources/1");
      expect(find('ul li:first a').text().trim()).to.eq("Hacking 101");
    });
  });

  it('shows a specific resource', function(){
    server.create('resource', {
      title: "Hacking 101",
      description: "Be the black hat you always wanted to be!"
    });

    visit('/');
    // let link = $("p.resources a");
    // click(link);
    click('.resources');
    click('ul li:first a');

    andThen(function(){
      expect(find('h4').text()).to.eq("Hacking 101");
      expect(find('p#description').text().trim()).to.eq("description: Be the black hat you always wanted to be!");
    });
  });
});